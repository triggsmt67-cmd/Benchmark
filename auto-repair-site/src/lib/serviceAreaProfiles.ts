import type { Metadata } from "next";

export interface ServiceAreaProfile {
    slug: string;
    cityName: string;
    title: string;
    description: string;
    eyebrow: string;
    intro: string[];
    routeNote: string;
    localConditions: {
        title: string;
        description: string;
    }[];
    services: {
        title: string;
        href: string;
        description: string;
    }[];
    visitReasons: string[];
    faqs: {
        q: string;
        a: string;
    }[];
}

export const serviceAreaProfiles: Record<string, ServiceAreaProfile> = {
    bonner: {
        slug: "bonner",
        cityName: "Bonner",
        title: "Auto Repair for Bonner, MT Drivers",
        description: "Benchmark Automotive Service provides diagnostics, brake repair, electrical testing, and maintenance for Bonner and Blackfoot Valley drivers from our Missoula shop.",
        eyebrow: "Serving Bonner from Missoula",
        intro: [
            "Benchmark Automotive Service is located in Missoula, not Bonner. We serve Bonner drivers who want a shop that tests the vehicle before recommending parts, especially when the problem is intermittent or has already been looked at elsewhere.",
            "A daily drive along MT-200 or I-90 combines highway speed, winter exposure, and stretches where a breakdown is more than a minor inconvenience. Our job is to identify the cause, explain what is urgent, and help you plan the repair around how the vehicle is actually used."
        ],
        routeNote: "Bonner drivers typically reach our shop by following MT-200 or I-90 into Missoula. Secure after-hours key drop is available when leaving the vehicle before or after business hours is easier than coordinating a same-day round trip.",
        localConditions: [
            {
                title: "Highway-speed symptoms",
                description: "Wheel imbalance, worn steering parts, and wheel-bearing noise often become noticeable only at sustained road speed. We road-test under the conditions that produce the concern when it is safe to do so."
            },
            {
                title: "Cold starts and charging load",
                description: "A marginal battery or charging-system connection may behave normally in the afternoon and struggle after a cold night. Load testing and voltage-drop testing separate the battery from the rest of the starting circuit."
            },
            {
                title: "Canyon and recreation travel",
                description: "Vehicles used along the Blackfoot corridor may see gravel, washboard surfaces, mountain grades, and longer distances between stops. Those conditions put added attention on tires, brakes, cooling, and suspension condition."
            }
        ],
        services: [
            {
                title: "Advanced Diagnostics",
                href: "/services/engine-and-performance",
                description: "For intermittent warning lights, drivability faults, and problems that require live data or circuit testing."
            },
            {
                title: "Steering Vibration",
                href: "/services/steering-vibration",
                description: "For shaking, pulling, humming, or looseness that appears on MT-200 or I-90."
            },
            {
                title: "Brake Repair",
                href: "/services/brake-repair",
                description: "Pad, rotor, caliper, and hydraulic inspection based on measurements rather than noise alone."
            },
            {
                title: "Engine Overheating",
                href: "/services/engine-overheating",
                description: "Cooling-system pressure testing and fault isolation before mountain or summer travel."
            }
        ],
        visitReasons: [
            "The symptom appears only at highway speed or after a longer drive.",
            "A warning light returned after a previous repair or code clear.",
            "You want inspection findings separated into urgent, upcoming, and monitor-only items.",
            "You need after-hours drop-off to make the trip from Bonner workable."
        ],
        faqs: [
            {
                q: "Is Benchmark Automotive Service located in Bonner?",
                a: "No. Our repair facility is at 1914 North Ave W in Missoula. This page explains how we serve customers traveling from Bonner and nearby Blackfoot Valley communities."
            },
            {
                q: "Can I leave my vehicle after hours?",
                a: "Yes. We provide a secure after-hours key drop and confirm receipt the next business day."
            },
            {
                q: "What should I tell you about an intermittent highway problem?",
                a: "Tell us the speed, road conditions, outside temperature, warning lights, sounds, and how long the vehicle must be driven before the symptom appears. Those details help us reproduce the concern efficiently."
            },
            {
                q: "Do I need to know which service to schedule?",
                a: "No. Describe what the vehicle is doing. We will determine the appropriate inspection or diagnostic starting point before the appointment is finalized."
            }
        ]
    },
    frenchtown: {
        slug: "frenchtown",
        cityName: "Frenchtown",
        title: "Auto Repair for Frenchtown, MT Drivers",
        description: "Missoula diagnostics and auto repair for Frenchtown commuters, rural vehicles, trucks, and family cars at Benchmark Automotive Service.",
        eyebrow: "Serving Frenchtown commuters",
        intro: [
            "Frenchtown drivers often put substantial interstate mileage on their vehicles before the odometer reflects much stop-and-go use. A vibration at I-90 speed, a charging problem after a cold night, or a noise that appears after miles of driving needs to be tested under the conditions that make it happen.",
            "Benchmark Automotive Service is based in Missoula. We work with Frenchtown customers who value documented testing, clear authorization, and a practical explanation of what needs attention now versus what can be planned."
        ],
        routeNote: "The usual trip from Frenchtown follows I-90 into Missoula. Our North Ave W location is accessible from the Reserve Street corridor, and after-hours drop-off lets commuters leave a vehicle without waiting at the shop.",
        localConditions: [
            {
                title: "Interstate commuting",
                description: "Longer, higher-speed drives reveal tire balance, bearing, alignment, cooling, and under-load engine problems that may not appear during short neighborhood trips."
            },
            {
                title: "Gravel and washboard roads",
                description: "Vehicles that regularly leave pavement can develop looseness, dust-related wear, damaged underbody shields, and alignment changes. A lift inspection helps distinguish cosmetic wear from a component that affects control."
            },
            {
                title: "Towing and loaded vehicles",
                description: "Trailers, work equipment, and heavier pickups increase demand on brakes, cooling systems, tires, and suspension. We consider the actual load and travel pattern when evaluating wear."
            }
        ],
        services: [
            {
                title: "Suspension and Steering",
                href: "/services/suspension-steering",
                description: "Inspection of shocks, struts, ball joints, tie rods, bushings, and steering concerns."
            },
            {
                title: "Vehicle Inspection",
                href: "/services/vehicle-inspection",
                description: "A condition report for commuters, work vehicles, seasonal travel, or maintenance planning."
            },
            {
                title: "Check Engine Light Diagnostics",
                href: "/services/engine-and-performance",
                description: "Code retrieval followed by testing of the system that set the fault."
            },
            {
                title: "General Maintenance",
                href: "/services/general-maintenance",
                description: "Mileage- and condition-based maintenance for vehicles accumulating regular interstate miles."
            }
        ],
        visitReasons: [
            "A vibration, noise, or warning appears only after driving on I-90.",
            "The vehicle is used for towing, work, or regular gravel-road travel.",
            "You need a written inspection before a long trip or major repair decision.",
            "A previous parts replacement did not correct the original concern."
        ],
        faqs: [
            {
                q: "Where is the shop relative to Frenchtown?",
                a: "Benchmark Automotive Service is at 1914 North Ave W in Missoula. Frenchtown customers generally reach us through the I-90 and Reserve Street corridors."
            },
            {
                q: "Can you diagnose a vibration that only happens on the interstate?",
                a: "Yes. We document the speed and conditions that trigger it, inspect tires and steering components, and road-test when safe to confirm whether the physical findings match the symptom."
            },
            {
                q: "Do you inspect trucks used for towing?",
                a: "Yes. Tell us the normal trailer weight and use. That context helps us focus on brakes, cooling, tires, steering, suspension, and fluid condition."
            },
            {
                q: "Can I authorize repairs remotely?",
                a: "We explain the findings and estimate before work begins. Contact the shop when scheduling to confirm the communication and authorization method that works for you."
            }
        ]
    },
    "east-missoula": {
        slug: "east-missoula",
        cityName: "East Missoula",
        title: "Auto Repair for East Missoula Drivers",
        description: "Diagnostics, maintenance, brake repair, and electrical service for East Missoula drivers at Benchmark Automotive Service on North Ave W.",
        eyebrow: "A Missoula shop for East Missoula",
        intro: [
            "East Missoula is close to our shop, but short driving distance does not make every vehicle problem simple. Repeated short trips, winter starts, potholes, and stop-and-go driving can produce battery, brake, tire, and maintenance concerns that develop without an obvious breakdown.",
            "Benchmark Automotive Service gives East Missoula drivers a testing-first option. We inspect the vehicle, explain the evidence, and get approval before repair work begins."
        ],
        routeNote: "Drivers commonly enter Missoula from East Broadway or MT-200 and continue to our facility at 1914 North Ave W. After-hours drop-off is available for early or late schedules.",
        localConditions: [
            {
                title: "Short-trip wear",
                description: "Frequent drives that end before the engine and exhaust fully warm can be harder on batteries and fluids than the mileage suggests. Maintenance decisions should consider trip pattern, not only the odometer."
            },
            {
                title: "Potholes and curb impacts",
                description: "A hard impact can change alignment, damage a tire, or expose wear in a steering joint. Pulling, a crooked steering wheel, or a new vibration deserves inspection."
            },
            {
                title: "Winter electrical demand",
                description: "Cold starts combined with lights, defrosters, and blower use expose weak batteries and poor charging connections. Testing under load shows whether the issue is storage, charging, or resistance in the circuit."
            }
        ],
        services: [
            {
                title: "Battery Drain Diagnostics",
                href: "/services/electrical-diagnostics",
                description: "Testing for repeat dead batteries, parasitic draw, alternator faults, and circuit problems."
            },
            {
                title: "Brake Repair",
                href: "/services/brake-repair",
                description: "Inspection and measurement for squealing, grinding, pulling, or pedal concerns."
            },
            {
                title: "Pothole Damage Inspection",
                href: "/services/pothole-damage-inspection",
                description: "Tire, wheel, alignment, steering, and suspension checks after a hard impact."
            },
            {
                title: "Oil Change",
                href: "/services/oil-change",
                description: "Manufacturer-specified oil and filter service with a visual maintenance check."
            }
        ],
        visitReasons: [
            "The battery has needed more than one jump.",
            "A new steering or tire symptom began after a pothole impact.",
            "Brake noise continues after the first few stops of the day.",
            "You need a maintenance baseline for a recently purchased vehicle."
        ],
        faqs: [
            {
                q: "How far is Benchmark Automotive Service from East Missoula?",
                a: "The shop is at 1914 North Ave W in Missoula. Travel time varies with the route and traffic, so check current directions when scheduling."
            },
            {
                q: "Can short trips really affect maintenance needs?",
                a: "Yes. Repeated cold starts and short drives can increase battery demand and may keep fluids and the exhaust from reaching full operating temperature."
            },
            {
                q: "Should I schedule an inspection after hitting a pothole?",
                a: "Schedule promptly if the tire is damaged, the steering wheel changed position, the car pulls, or a new vibration or noise began after the impact."
            },
            {
                q: "Do you offer after-hours drop-off?",
                a: "Yes. Use the secure key drop and we will confirm receipt the next business day."
            }
        ]
    },
    milltown: {
        slug: "milltown",
        cityName: "Milltown",
        title: "Auto Repair for Milltown, MT Drivers",
        description: "Benchmark Automotive Service provides diagnostic testing, cooling-system service, inspections, and repairs for Milltown drivers from our Missoula facility.",
        eyebrow: "Serving Milltown and the canyon corridor",
        intro: [
            "Vehicles traveling between Milltown and Missoula move quickly from local roads to sustained highway speeds. That mix can reveal cooling, tire, steering, and drivability problems that are easy to miss during a short test around town.",
            "Our facility is in Missoula. Milltown customers bring us difficult symptoms, maintenance questions, and inspection needs when they want the recommendation tied to actual testing rather than a trouble code or mileage alone."
        ],
        routeNote: "Milltown drivers generally use I-90 or MT-200 to reach Missoula. Our shop is at 1914 North Ave W, with a secure key drop available outside normal business hours.",
        localConditions: [
            {
                title: "Temperature and elevation changes",
                description: "A cooling or fuel-control problem may appear under sustained load and disappear after the vehicle slows down. We use the customer's route description and live data to help reproduce those conditions."
            },
            {
                title: "Older highway vehicles",
                description: "Age, mileage, and corrosion matter differently on each vehicle. A lift inspection shows whether rust is superficial, hardware is beginning to seize, or a line or mounting point needs action."
            },
            {
                title: "Recreation and unpaved access",
                description: "Gravel access roads and outdoor travel can affect tires, underbody panels, suspension joints, and fluid seals. We focus on observable wear rather than assuming every vehicle used off pavement needs the same work."
            }
        ],
        services: [
            {
                title: "Engine Overheating",
                href: "/services/engine-overheating",
                description: "Pressure, circulation, fan, thermostat, and leak testing for rising temperature concerns."
            },
            {
                title: "Car Making Noise",
                href: "/services/car-making-noise",
                description: "Lift inspection and road testing for humming, clunking, grinding, and rattling."
            },
            {
                title: "Fluid Services",
                href: "/services/fluid-services",
                description: "Condition- and schedule-based coolant, brake, transmission, and driveline fluid service."
            },
            {
                title: "Vehicle Inspection",
                href: "/services/vehicle-inspection",
                description: "A documented overview before travel, seasonal use, or a repair-versus-replace decision."
            }
        ],
        visitReasons: [
            "Engine temperature rises only on the highway or on a grade.",
            "A hum, vibration, or pull increases with road speed.",
            "The vehicle sees gravel, recreation, or seasonal storage.",
            "You need to understand corrosion or maintenance condition before approving repairs."
        ],
        faqs: [
            {
                q: "Is the repair shop in Milltown?",
                a: "No. Benchmark Automotive Service is at 1914 North Ave W in Missoula and serves customers traveling from Milltown and the MT-200 corridor."
            },
            {
                q: "Can you diagnose a problem that appears only after the car warms up?",
                a: "Yes. Tell us how long you drive, the speed and grade, outside temperature, warning lights, and whether the symptom changes after slowing or stopping."
            },
            {
                q: "Do you inspect underbody corrosion?",
                a: "Yes. We distinguish surface rust from corrosion that affects lines, fasteners, mounting points, or structural components and document what we find."
            },
            {
                q: "Can I drop the vehicle off before opening?",
                a: "Yes. Secure after-hours key drop is available, and we confirm receipt the next business day."
            }
        ]
    },
    "orchard-homes": {
        slug: "orchard-homes",
        cityName: "Orchard Homes",
        title: "Auto Repair for Orchard Homes Drivers",
        description: "Local diagnostics, family-vehicle maintenance, used-car inspections, and repairs for Orchard Homes drivers at Benchmark Automotive Service in Missoula.",
        eyebrow: "Serving Orchard Homes",
        intro: [
            "Orchard Homes drivers are close to our North Ave W facility, making it practical to leave a vehicle for a proper inspection instead of trying to diagnose a concern from a dashboard light or sound alone.",
            "We service commuter cars, family vehicles, pickups, and used vehicles with a process built around evidence. You receive an explanation of the finding, a written estimate, and the chance to approve the work before repairs begin."
        ],
        routeNote: "Our shop is at 1914 North Ave W in Missoula, near the Reserve Street and South Avenue corridors used by many Orchard Homes residents. Secure after-hours drop-off is available.",
        localConditions: [
            {
                title: "Urban stop-and-go use",
                description: "Frequent braking, idling, and short trips can affect brake wear, battery charging, and maintenance timing. We evaluate the vehicle's use instead of relying on mileage alone."
            },
            {
                title: "Family-vehicle reliability",
                description: "For vehicles used for school, work, and errands, a condition inspection can identify safety concerns and help separate immediate work from items that can be planned."
            },
            {
                title: "Used-vehicle decisions",
                description: "A pre-purchase or post-purchase inspection documents mechanical condition, scan results, underbody wear, and likely maintenance needs before they become surprises."
            }
        ],
        services: [
            {
                title: "General Maintenance",
                href: "/services/general-maintenance",
                description: "A practical maintenance baseline using service history, manufacturer schedules, and observed condition."
            },
            {
                title: "Pre-Purchase Inspection",
                href: "/services/pre-purchase-inspection",
                description: "Independent lift, scan, road-test, and condition reporting before buying a used vehicle."
            },
            {
                title: "Car Won't Start",
                href: "/services/car-wont-start",
                description: "Battery, starting-circuit, fuel, ignition, and security-system testing."
            },
            {
                title: "AC and Heating",
                href: "/services/ac-heating",
                description: "Climate-control diagnosis for cooling, heating, airflow, leak, and electrical concerns."
            }
        ],
        visitReasons: [
            "You want a maintenance plan based on the vehicle's actual condition.",
            "A family vehicle has a new warning light, noise, or starting concern.",
            "You are considering a used vehicle and want an independent report.",
            "You need a nearby shop with after-hours drop-off and clear authorization."
        ],
        faqs: [
            {
                q: "Where is Benchmark Automotive Service?",
                a: "The shop is at 1914 North Ave W in Missoula, convenient to Orchard Homes through the South Avenue and Reserve Street area."
            },
            {
                q: "Can you establish a maintenance baseline if I have no records?",
                a: "Yes. We combine visible condition, fluid checks, scan information where relevant, mileage, and manufacturer guidance to show what is known and what should be monitored."
            },
            {
                q: "Do you inspect a used vehicle before I buy it?",
                a: "Yes. Schedule before the purchase and confirm that the seller will make the vehicle available long enough for a lift inspection, scan, and road test."
            },
            {
                q: "Will you call before doing repairs?",
                a: "Yes. We explain the findings and estimate and obtain approval before repair work begins."
            }
        ]
    },
    "target-range": {
        slug: "target-range",
        cityName: "Target Range",
        title: "Auto Repair for Target Range Drivers",
        description: "Diagnostic-first auto repair, truck inspections, brake service, and maintenance for Target Range drivers at Benchmark Automotive Service in Missoula.",
        eyebrow: "Serving Target Range and west Missoula",
        intro: [
            "Target Range vehicles often split time between neighborhood streets, Reserve Street traffic, highway travel, and unpaved access roads. That mixed use matters when a truck develops a vibration, a commuter car needs a maintenance baseline, or a warning light appears only under load.",
            "Benchmark Automotive Service is located on North Ave W in Missoula. We test the system involved, document the result, and explain the repair before asking for approval."
        ],
        routeNote: "Target Range drivers can reach our shop through the South Avenue, Spurgin Road, and Reserve Street area. Check current directions for the best route, and use our secure after-hours key drop when needed.",
        localConditions: [
            {
                title: "Mixed road surfaces",
                description: "Transitions between pavement, potholes, and gravel can expose tire, alignment, steering, and suspension wear. We inspect for looseness and damage before recommending alignment or parts."
            },
            {
                title: "Pickups and towing",
                description: "Loaded vehicles place more demand on tires, brakes, cooling, and suspension. Tell us how the truck is used so the inspection reflects its normal operating conditions."
            },
            {
                title: "Long idle and short trips",
                description: "Vehicles used for errands or work may accumulate engine hours without much mileage. Battery condition, fluids, and maintenance planning should account for that use."
            }
        ],
        services: [
            {
                title: "Brake Repair",
                href: "/services/brake-repair",
                description: "Brake-system measurement and inspection for commuter cars, pickups, and towing vehicles."
            },
            {
                title: "Suspension and Steering",
                href: "/services/suspension-steering",
                description: "Diagnosis of pulling, looseness, clunks, uneven tire wear, and ride-control concerns."
            },
            {
                title: "Advanced Diagnostics",
                href: "/services/engine-and-performance",
                description: "Live-data, circuit, module, and intermittent-fault testing for difficult problems."
            },
            {
                title: "Vehicle Inspection",
                href: "/services/vehicle-inspection",
                description: "A documented condition check for travel, towing, maintenance planning, or ownership decisions."
            }
        ],
        visitReasons: [
            "The vehicle is used on a mix of city, highway, and gravel roads.",
            "A truck or SUV is used for towing or carrying regular loads.",
            "A warning light or drivability symptom appears only under load.",
            "You want measurements and documentation before replacing steering or brake parts."
        ],
        faqs: [
            {
                q: "Is Benchmark Automotive Service in Target Range?",
                a: "Our facility is at 1914 North Ave W in Missoula. We serve Target Range and west Missoula customers from that location."
            },
            {
                q: "Can you inspect a truck used for towing?",
                a: "Yes. Share the trailer weight, frequency, routes, and any braking, cooling, or handling symptoms so we can focus the inspection appropriately."
            },
            {
                q: "Does driving on gravel automatically mean I need suspension work?",
                a: "No. Road use provides context, but recommendations should be based on measured looseness, leakage, damage, tire wear, alignment data, or a symptom we can confirm."
            },
            {
                q: "How do I schedule if I am not sure what is wrong?",
                a: "Describe the symptom, when it happens, and any warning lights. We will help choose the correct diagnostic or inspection starting point."
            }
        ]
    }
};

export function buildServiceAreaMetadata(profile: ServiceAreaProfile): Metadata {
    const url = `https://www.benchmarkmissoula.com/service-areas/${profile.slug}`;
    return {
        title: profile.title,
        description: profile.description,
        alternates: {
            canonical: url
        },
        openGraph: {
            type: "website",
            url,
            title: profile.title,
            description: profile.description
        }
    };
}
