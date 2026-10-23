"""Audit rendered local JSON-LD against Schema.org vocabulary and page content.
Usage: python3 scripts/audit-page-schema.py http://127.0.0.1:3001
Does not submit data to Google or a third-party validator.
"""
import concurrent.futures, html, json, re, sys, urllib.request, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
BASE = sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:3001'
PUBLIC = 'https://www.benchmarkmissoula.com'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.scripts=[]; self.current=None; self.skip=0; self.text=[]; self.links=[]
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if tag in ['script','style']: self.skip+=1
  if tag=='script' and attrs.get('type')=='application/ld+json':self.current=[]
  if tag=='a':self.links.append(attrs.get('href'))
 def handle_data(self,data):
  if self.current is not None:self.current.append(data)
  if not self.skip:self.text.append(data)
 def handle_endtag(self,tag):
  if tag=='script' and self.current is not None:self.scripts.append(''.join(self.current));self.current=None
  if tag in ['script','style']:self.skip=max(0,self.skip-1)
def get(url):
 with urllib.request.urlopen(url,timeout=40) as r:return r.read().decode()
def norm(s):return re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',s))).strip().replace('“','"').replace('”','"').replace('’',"'")
vocab=json.loads(get('https://schema.org/version/latest/schemaorg-current-https.jsonld'))['@graph']
def local(v):return v.removeprefix('schema:').removeprefix('https://schema.org/').removeprefix('http://schema.org/')
def ids(v):
 if isinstance(v,dict):return [local(v.get('@id',''))]
 if isinstance(v,list):return [x for y in v for x in ids(y)]
 return []
terms={local(x['@id']):x for x in vocab}
def ancestors(t,seen=None):
 seen=set() if seen is None else seen
 if t in seen:return seen
 seen.add(t)
 for p in ids(terms.get(t,{}).get('rdfs:subClassOf',[])):ancestors(p,seen)
 return seen
sitemap=ET.fromstring(get(BASE+'/sitemap.xml'))
paths=[x.text.replace(PUBLIC,'') or '/' for x in sitemap.iter() if x.tag.endswith('}loc')]
paths=list(dict.fromkeys(paths+['/privacy','/terms','/services/brake-repair/missoula']))
def audit(path):
 page=Page();page.feed(get(BASE+path));text=norm(' '.join(page.text));errors=[];warnings=[];types=[];questions=0;defined=set();refs=[]
 def walk(node):
  nonlocal questions
  if isinstance(node,list):
   for v in node:walk(v)
  elif isinstance(node,dict):
   ts=node.get('@type',[]);ts=[ts] if isinstance(ts,str) else ts
   types.extend(ts)
   if '@id' in node:
    if ts:
     if node['@id'] in defined:errors.append('Duplicate definition '+node['@id'])
     defined.add(node['@id'])
    else:refs.append(node['@id'])
   allowed=set().union(*(ancestors(t) for t in ts)) if ts else set()
   for t in ts:
    if t not in terms:errors.append('Unknown type '+t)
   for k,v in node.items():
    if not k.startswith('@'):
     if k not in terms:errors.append('Unknown property '+k)
     else:
      domains=ids(terms[k].get('schema:domainIncludes',[]))
      if domains and allowed and not allowed.intersection(domains):errors.append(f'{k} not applicable to {ts}')
      ranges=ids(terms[k].get('schema:rangeIncludes',[]))
      values=v if isinstance(v,list) else [v]
      for value in values:
       if isinstance(value,dict) and value.get('@type') and ranges:
        value_types=value['@type'] if isinstance(value['@type'],list) else [value['@type']]
        value_ancestors=set().union(*(ancestors(t) for t in value_types))
        if not value_ancestors.intersection(ranges):errors.append(f'{k} has incompatible value types {value_types}')
       if isinstance(value,str) and value.startswith(('https://schema.org/','http://schema.org/')) and local(value) not in terms:
        errors.append('Unknown schema enumeration URL '+value)
    if k=='dateModified' and str(v)[:10]>'2026-10-23':errors.append('Future modification date '+v)
    walk(v)
   if 'Question' in ts:
    questions+=1
    for label,value in [('question',node.get('name','')),('answer',node.get('acceptedAnswer',{}).get('text',''))]:
     if not value or norm(value) not in text:errors.append(f'FAQ {label} absent from HTML text: '+value[:100])
   if 'BreadcrumbList' in ts:
    items=node.get('itemListElement',[])
    if [x.get('position') for x in items]!=list(range(1,len(items)+1)):errors.append('Invalid breadcrumb positions')
    if items and items[-1].get('item','').rstrip('/')!=(PUBLIC+path).rstrip('/'):errors.append('Breadcrumb final URL mismatch')
   if 'Offer' in ts:
    if not node.get('priceCurrency') or not re.fullmatch(r'\d+(\.\d+)?',str(node.get('price',''))):errors.append('Invalid offer price/currency')
 for script in page.scripts:
  try:
   document=json.loads(script)
   graph=document.get('@graph',[document]) if isinstance(document,dict) else document
   graph_ids=[node['@id'] for node in graph if isinstance(node,dict) and node.get('@id')]
   if len(graph_ids)!=len(set(graph_ids)):errors.append('Duplicate top-level graph IDs')
   walk(document)
  except ValueError as e:errors.append('Invalid JSON: '+str(e))
 # Typed references to the same entity are legitimate, so duplicate-id checks are limited below.
 errors=[x for x in errors if not x.startswith('Duplicate definition')]
 for ref in refs:
  if ref.startswith(PUBLIC+path+'#') and ref not in defined:errors.append('Unresolved local entity reference '+ref)
 if not page.scripts:warnings.append('No JSON-LD (not inherently an error)')
 return {'path':path,'blocks':len(page.scripts),'types':sorted(set(types)),'faqQuestions':questions,'errors':sorted(set(errors)),'warnings':warnings}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(audit,paths))
Path('docs/indexing/schema-audit.json').write_text(json.dumps(results,indent=2))
print(json.dumps({'pages':len(results),'errors':[r for r in results if r['errors']],'warnings':[r for r in results if r['warnings']]},indent=2))
sys.exit(1 if any(r['errors'] for r in results) else 0)
