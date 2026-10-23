import urllib.request, urllib.error, xml.etree.ElementTree as ET, json, concurrent.futures
from html.parser import HTMLParser
from pathlib import Path
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.title=[];self.h1=[];self.links=[];self.canonicals=[];self.robots=[];self.text=[];self.tags=[];self.skip=0
 def handle_starttag(self,t,a):
  d=dict(a);self.tags.append(t)
  if t in ['script','style']:self.skip+=1
  if t=='a' and d.get('href'):self.links.append(d['href'])
  if t=='link' and d.get('rel')=='canonical':self.canonicals.append(d.get('href'))
  if t=='meta' and d.get('name','').lower() in ['robots','googlebot']:self.robots.append(d)
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=max(0,self.skip-1)
  if t in self.tags:self.tags=self.tags[:len(self.tags)-1-self.tags[::-1].index(t)]
 def handle_data(self,d):
  if 'title' in self.tags:self.title.append(d)
  if 'h1' in self.tags:self.h1.append(d)
  if 'main' in self.tags and not self.skip:self.text.append(d)
def fetch(url,ua='Mozilla/5.0'):
 chain=[]
 class Redirect(urllib.request.HTTPRedirectHandler):
  http_error_308 = urllib.request.HTTPRedirectHandler.http_error_302
  def redirect_request(self,req,fp,code,msg,headers,newurl):
   chain.append({'status':code,'from':req.full_url,'to':newurl});return super().redirect_request(req,fp,301 if code==308 else code,msg,headers,newurl)
 try:
  try:r=urllib.request.build_opener(Redirect).open(urllib.request.Request(url,headers={'User-Agent':ua}),timeout=35)
  except urllib.error.HTTPError as e:r=e
  raw=r.read().decode('utf-8','replace');p=Page();p.feed(raw)
  return {'url':url,'status':r.code,'final_url':r.url,'redirects':chain,'content_type':r.headers.get('Content-Type'),'x_robots_tag':r.headers.get('X-Robots-Tag'),'canonicals':p.canonicals,'robots':p.robots,'title':''.join(p.title),'h1':p.h1,'main_text':' '.join(' '.join(p.text).split()),'links':sorted(set(p.links)),'raw':raw}
 except Exception as e:return {'url':url,'error':str(e)}
base='https://www.benchmarkmissoula.com'
sitemap=fetch(base+'/sitemap.xml')['raw'];urls=[x.text for x in ET.fromstring(sitemap).iter() if x.tag.endswith('}loc')]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:rows=list(pool.map(fetch,urls))
extra=[base+'/indexing-audit-missing-page',base+'/services/indexing-audit-missing-page',base+'/problems/squeaking-brakes',base+'/services/brakes-squeaking',base+'/services/check-engine-light',base+'/services/car-not-blowing-cold-air','http://benchmarkmissoula.com/','https://benchmarkmissoula.com/',base+'/services/']
rows+=list(map(fetch,extra))
representatives=['/contact','/services','/services/electrical-diagnostics','/service-areas/lolo','/guides/how-to-choose-a-mechanic','/services/brake-repair','/services/engine-and-performance','/service-areas/target-range']
for ua in ['Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)','Mozilla/5.0 (compatible; Google-InspectionTool/1.0;)']:
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
  results=list(pool.map(lambda path:fetch(base+path,ua),representatives))
 for r in results:r['user_agent']=ua
 rows+=results
for r in rows:r.pop('raw',None)
Path('docs/indexing/2026-10-23-live-http.json').write_text(json.dumps(rows,indent=2))
print(json.dumps({'sitemap_urls':len(urls),'requests':len(rows),'statuses':[(r['url'],r.get('status'),r.get('error')) for r in rows if r.get('status')!=200],'noindex':[r['url'] for r in rows if 'noindex' in str(r.get('robots'))+str(r.get('x_robots_tag'))]},indent=2))
