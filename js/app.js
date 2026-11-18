/**
 * Upright Smart Solution - Main Application Script
 * Handles Karachi property data, search & filter logic, favorites persistence,
 * PKR mortgage calculator, modals, and property details rendering.
 */

const USS_WHATSAPP_JAHANGIR = "923172594192";
const USS_WHATSAPP_SECOND = "923323438045";

// ==========================================================================
// 1. KARACHI REAL ESTATE DATASET (100% Karachi-Specific Neighborhoods)
// ==========================================================================
const KARACHI_PROPERTIES = [
  {
    id: "khi-101",
    purpose: "buy",
    title: "500 Sq. Yds Brand New Designer Bungalow",
    area: "DHA Karachi",
    subLocation: "DHA Phase 8, Zone B, Karachi",
    type: "Bungalow / House",
    pricePKR: 165000000, // 16.5 Crore
    priceFormatted: "PKR 16.5 Crore",
    sizeText: "500 Sq. Yards",
    sizeCategory: "500 Sq. Yards",
    beds: 5,
    baths: 6,
    badge: "Featured",
    verified: true,
    yearBuilt: 2025,
    facing: "West Open / Park Facing",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Architect-designed 500 Sq. Yards brand new luxury residence in DHA Phase 8 Zone B. Features imported Italian porcelain flooring, double-height lobby, dirty & show kitchens with built-in appliances, full basement theater lounge, servant quarters, and solar net-metering readiness.",
    amenities: [
      "24/7 DHA Vigilance Security",
      "Solar Hybrid Ready",
      "Basement Lounge & Home Theater",
      "Imported Spanish & Italian Tiles",
      "2 Servant Quarters",
      "4 Car Covered Parking",
      "Sweet Water Line + Underground Tank",
      "West Open Corner Plot"
    ],
    agent: {
      name: "Tariq Mahmood",
      agency: "Defence Prime Realtors",
      phone: "+92 300 8214590",
      whatsapp: "923008214590",
      verified: true
    }
  },
  {
    id: "khi-102",
    purpose: "buy",
    title: "3-Bed Sea-Facing Luxury Apartment with Terrace",
    area: "Clifton",
    subLocation: "Clifton Block 4, Near Dolmen Mall, Karachi",
    type: "Apartment / Flat",
    pricePKR: 78000000, // 7.8 Crore
    priceFormatted: "PKR 7.8 Crore",
    sizeText: "2,850 Sq. Ft (316 Sq. Yds)",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 3,
    baths: 4,
    badge: "Verified",
    verified: true,
    yearBuilt: 2024,
    facing: "Arabian Sea Facing",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "High-floor panoramic Arabian Sea view apartment located in prestigious Clifton Block 4, steps away from Boat Basin and Dolmen Mall Clifton. Includes 2 reserved basement parking slots, 100% standby backup generators, rooftop infinity pool, and biometric elevator access.",
    amenities: [
      "Uninterrupted Arabian Sea View",
      "100% Standby Generator Backup",
      "High-Speed Mitsubishi Elevators",
      "2 Reserved Basement Parkings",
      "Rooftop Gym & Residents Lounge",
      "RO Water Filtration Plant",
      "24/7 CCTV & Concierge",
      "Walking Distance to Dolmen Clifton"
    ],
    agent: {
      name: "Sanaullah Sheikh",
      agency: "Clifton Coastal Estates",
      phone: "+92 321 9204411",
      whatsapp: "923219204411",
      verified: true
    }
  },
  {
    id: "khi-103",
    purpose: "buy",
    title: "250 Sq. Yds Ready Villa in Precinct 10A",
    area: "Bahria Town Karachi",
    subLocation: "Precinct 10A, Bahria Town Karachi",
    type: "Bungalow / House",
    pricePKR: 34500000, // 3.45 Crore
    priceFormatted: "PKR 3.45 Crore",
    sizeText: "250 Sq. Yards",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 4,
    baths: 4,
    badge: "Featured",
    verified: true,
    yearBuilt: 2024,
    facing: "Park & Masjid Facing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Company-built + custom upgraded 250 Sq. Yards Bahria Homes villa in highly populated Precinct 10A. Located right opposite the central park and grand mosque, with uninterrupted electricity, wide 50-ft carpeted roads, and immediate possession.",
    amenities: [
      "Load-Shedding Free Grid",
      "Opposite Central Park & Mosque",
      "24/7 Armed Bahria Security",
      "50 Feet Wide Carpeted Road",
      "Modular Kitchen Cabinets",
      "2 Car Porch",
      "Near Theme Park & Imtiaz Mega",
      "Ready for Immediate Possession"
    ],
    agent: {
      name: "Kamran Siddiqui",
      agency: "Super Highway Associates",
      phone: "+92 333 2188904",
      whatsapp: "923332188904",
      verified: true
    }
  },
  {
    id: "khi-104",
    purpose: "buy",
    title: "240 Sq. Yds Corner Residential Plot",
    area: "PECHS",
    subLocation: "PECHS Block 6, Near Shahrah-e-Faisal, Karachi",
    type: "Plot",
    pricePKR: 89000000, // 8.9 Crore
    priceFormatted: "PKR 8.9 Crore",
    sizeText: "240 Sq. Yards",
    sizeCategory: "120 - 240 Sq. Yards",
    beds: 0,
    baths: 0,
    badge: "Verified",
    verified: true,
    yearBuilt: 2026,
    facing: "Corner / East Open",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Prime 240 Sq. Yards clear-title KDA lease corner residential plot in PECHS Block 6, just 2 minutes off Shahrah-e-Faisal. Ideal for constructing a modern G+2 family residence or boutique apartment project with verified mutation and transfer.",
    amenities: [
      "Clear KDA Lease & Mutation",
      "Corner + East Open Plot",
      "2 Mins from Shahrah-e-Faisal",
      "Gas, Electric & Water Available",
      "Peaceful Gated Lane",
      "Close to Top Schools & Hospitals"
    ],
    agent: {
      name: "Zeeshan Ahmed",
      agency: "Central Karachi Properties",
      phone: "+92 300 2099412",
      whatsapp: "923002099412",
      verified: true
    }
  },
  {
    id: "khi-105",
    purpose: "buy",
    title: "3-Bed Modern Flat in Gulshan-e-Iqbal Block 13-D",
    area: "Gulshan-e-Iqbal",
    subLocation: "Block 13-D/2, Near Hassan Square, Karachi",
    type: "Apartment / Flat",
    pricePKR: 21500000, // 2.15 Crore
    priceFormatted: "PKR 2.15 Crore",
    sizeText: "1,650 Sq. Ft (183 Sq. Yds)",
    sizeCategory: "120 - 240 Sq. Yards",
    beds: 3,
    baths: 3,
    badge: "Featured",
    verified: true,
    yearBuilt: 2023,
    facing: "West Open",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Spacious 3-bedroom drawing/dining apartment in a newly completed project in Gulshan-e-Iqbal Block 13-D/2. Excellent ventilation, standby lift generator, sweet water supply, and easy access to University Road, Expo Centre, and Aga Khan Hospital.",
    amenities: [
      "Sub-Leased Project",
      "Standby Lift & Corridor Backup",
      "Sweet Water + Boring",
      "Reserved Covered Car Parking",
      "5 Mins to Aga Khan Hospital",
      "24/7 Security Guard & CCTV"
    ],
    agent: {
      name: "Farhan Qureshi",
      agency: "Gulshan Builders & Estate",
      phone: "+92 312 8845120",
      whatsapp: "923128845120",
      verified: true
    }
  },
  {
    id: "khi-106",
    purpose: "buy",
    title: "120 Sq. Yds G+1 Newly Built House in Scheme 33",
    area: "Scheme 33",
    subLocation: "Sector 18-A, Gulzar-e-Hijri, Scheme 33, Karachi",
    type: "Bungalow / House",
    pricePKR: 26500000, // 2.65 Crore
    priceFormatted: "PKR 2.65 Crore",
    sizeText: "120 Sq. Yards",
    sizeCategory: "120 - 240 Sq. Yards",
    beds: 4,
    baths: 4,
    badge: "Verified",
    verified: true,
    yearBuilt: 2025,
    facing: "North-West Open",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Brand new 120 Sq. Yards G+1 leased house in a boundary-wall cooperative housing society in Scheme 33 near Memon Medical Institute and Safoora Chowrangi. Separate portion entry, modern false ceilings, and tile flooring throughout.",
    amenities: [
      "Gated Boundary Wall Society",
      "Leased & Bank Loan Eligible",
      "Separate Portion Entrance",
      "Near Memon Hospital & M-9",
      "Tiled Roof & Waterproofing",
      "Mosque & Park Within Society"
    ],
    agent: {
      name: "Bilal Memon",
      agency: "Hijri Realtors Karachi",
      phone: "+92 345 2190876",
      whatsapp: "923452190876",
      verified: true
    }
  },
  {
    id: "khi-107",
    purpose: "rent",
    title: "1,000 Sq. Yds Executive Bungalow for Rent",
    area: "DHA Karachi",
    subLocation: "DHA Phase 6, Khayaban-e-Muhafiz, Karachi",
    type: "Bungalow / House",
    pricePKR: 750000, // 7.5 Lakh/month
    priceFormatted: "PKR 7.5 Lakh / mo",
    sizeText: "1,000 Sq. Yards",
    sizeCategory: "1,000+ Sq. Yards",
    beds: 6,
    baths: 7,
    badge: "Featured",
    verified: true,
    yearBuilt: 2022,
    facing: "West Open",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Expansive 1,000 Sq. Yards executive residence in DHA Phase 6 ideal for multinational corporate executives, diplomats, or large families. Features landscaped lawn, swimming pool, heavy-duty generator, and 6-car parking.",
    amenities: [
      "Private Swimming Pool & Lawn",
      "Heavy Duty Silent Generator",
      "6 Car Covered Garage",
      "3 Servant Quarters",
      "Corporate Lease Preferred",
      "Prime Phase 6 Boulevard Access"
    ],
    agent: {
      name: "Tariq Mahmood",
      agency: "Defence Prime Realtors",
      phone: "+92 300 8214590",
      whatsapp: "923008214590",
      verified: true
    }
  },
  {
    id: "khi-108",
    purpose: "buy",
    title: "2,200 Sq. Ft Corporate Office Floor on I.I. Chundrigar / Shahrah-e-Faisal",
    area: "PECHS",
    subLocation: "Main Shahrah-e-Faisal, Nursery, Karachi",
    type: "Commercial",
    pricePKR: 62000000, // 6.2 Crore
    priceFormatted: "PKR 6.2 Crore",
    sizeText: "2,200 Sq. Ft (244 Sq. Yds)",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 0,
    baths: 2,
    badge: "Verified",
    verified: true,
    yearBuilt: 2024,
    facing: "Main Boulevard Facing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Grade-A commercial office space overlooking Main Shahrah-e-Faisal near Nursery. Ideal for software houses, fintech startups, and corporate regional headquarters with central HVAC, 4 passenger lifts, and dedicated basement parking.",
    amenities: [
      "Main Shahrah-e-Faisal Frontage",
      "Central Chiller HVAC System",
      "4 High-Speed Commercial Lifts",
      "100% Redundant Power Backup",
      "Fire Fighting & Sprinkler System",
      "3 Dedicated Basement Parkings"
    ],
    agent: {
      name: "Zeeshan Ahmed",
      agency: "Central Karachi Properties",
      phone: "+92 300 2099412",
      whatsapp: "923002099412",
      verified: true
    }
  },
  {
    id: "khi-109",
    purpose: "projects",
    title: "Creek Vista Sky Residences — 2, 3 & 4 Bed Luxury Towers",
    area: "DHA Karachi",
    subLocation: "DHA Phase 8, Waterfront Creek Belt, Karachi",
    type: "Apartment / Flat",
    pricePKR: 49500000, // 4.95 Crore
    priceFormatted: "PKR 4.95 Crore",
    sizeText: "2,100 - 3,600 Sq. Ft",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 3,
    baths: 4,
    badge: "New Project",
    verified: true,
    yearBuilt: 2027,
    facing: "Creek & Golf Course View",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "3-Year easy installment plan by a Grade-A Karachi developer in DHA Phase 8. Featuring sky lounges, indoor heated pool, padel tennis court, children's daycare, and EV charging bays.",
    amenities: [
      "36-Month Easy Installment Plan",
      "SBCA & DHA Approved Project",
      "Indoor Heated Pool & Spa",
      "Padel Court & Jogging Track",
      "EV Charging Stations",
      "Smart Home Automation"
    ],
    agent: {
      name: "Ayesha Zuberi",
      agency: "Upright Smart Solution",
      phone: "+92 301 8220011",
      whatsapp: "923018220011",
      verified: true
    }
  },
  {
    id: "khi-110",
    purpose: "buy",
    title: "400 Sq. Yds Renovated Family House in North Nazimabad",
    area: "North Nazimabad",
    subLocation: "Block H, Near Hydri Market, North Nazimabad, Karachi",
    type: "Bungalow / House",
    pricePKR: 68000000, // 6.8 Crore
    priceFormatted: "PKR 6.8 Crore",
    sizeText: "400 Sq. Yards",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 5,
    baths: 5,
    badge: "Verified",
    verified: true,
    yearBuilt: 2021,
    facing: "Park Facing",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Solidly constructed 400 Sq. Yards G+1 park-facing bungalow in prime North Nazimabad Block H. Walking distance to Hydri Market, AO Clinic, and Green Line BRT station.",
    amenities: [
      "Prime Block H Park Facing",
      "Walking Distance to Hydri Market",
      "KDA Leased Property",
      "3 Car Parking Porch",
      "Solar 10kW Installed",
      "Sweet Water + KWSB Line"
    ],
    agent: {
      name: "Usman Farooq",
      agency: "North Star Associates",
      phone: "+92 322 2541099",
      whatsapp: "923222541099",
      verified: true
    }
  },
  {
    id: "khi-111",
    purpose: "buy",
    title: "350 Sq. Yds Modern Bungalow in Malir Cantt",
    area: "Malir Cantt",
    subLocation: "DOHS Phase 2, Malir Cantonment, Karachi",
    type: "Bungalow / House",
    pricePKR: 74000000, // 7.4 Crore
    priceFormatted: "PKR 7.4 Crore",
    sizeText: "350 Sq. Yards",
    sizeCategory: "250 - 400 Sq. Yards",
    beds: 5,
    baths: 5,
    badge: "Featured",
    verified: true,
    yearBuilt: 2024,
    facing: "East Open",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Ultra-secure, serene 350 Sq. Yards bungalow in Malir Cantonment DOHS Phase 2. Lush green tree-lined avenues, uninterrupted utilities, top-tier cantonment schools, and 10 minutes from Jinnah International Airport.",
    amenities: [
      "High-Security Cantonment Zone",
      "10 Mins from Karachi Airport",
      "Zero Water or Gas Shortage",
      "Lush Parks & Jogging Tracks",
      "Modern Tile & Woodwork",
      "Servant Quarter + Store"
    ],
    agent: {
      name: "Maj (R) Sohail Khan",
      agency: "Cantt Garrison Estates",
      phone: "+92 300 9244110",
      whatsapp: "923009244110",
      verified: true
    }
  },
  {
    id: "khi-112",
    purpose: "rent",
    title: "Furnished 2-Bed Luxury Flat in Clifton Block 2",
    area: "Clifton",
    subLocation: "Clifton Block 2, Near Bilawal Chowrangi, Karachi",
    type: "Apartment / Flat",
    pricePKR: 165000, // 1.65 Lakh/month
    priceFormatted: "PKR 1.65 Lakh / mo",
    sizeText: "1,450 Sq. Ft (161 Sq. Yds)",
    sizeCategory: "120 - 240 Sq. Yards",
    beds: 2,
    baths: 2,
    badge: "Verified",
    verified: true,
    yearBuilt: 2023,
    facing: "South-West Open",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Tastefully furnished 2-bedroom apartment in Clifton Block 2 featuring inverter ACs, smart LED TV, fully equipped kitchen, standby generator, and dedicated covered car parking.",
    amenities: [
      "Fully Furnished & Ready",
      "Standby Generator Backup",
      "Reserved Covered Parking",
      "24/7 Security & Intercom",
      "Near Ziauddin Hospital & Boat Basin"
    ],
    agent: {
      name: "Sanaullah Sheikh",
      agency: "Clifton Coastal Estates",
      phone: "+92 321 9204411",
      whatsapp: "923219204411",
      verified: true
    }
  }
];

// Karachi Area Guides Dataset
const KARACHI_AREA_GUIDES = [
  {
    name: "DHA Defence",
    searchKey: "DHA Karachi",
    listingsCount: 1420,
    avgPriceSqYd: "PKR 2.85 Lakh / Sq. Yd",
    trend: "+8.4% YoY",
    tagline: "Karachi's premier coastal lifestyle & planned residential hub (Phases 1–8).",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Clifton",
    searchKey: "Clifton",
    listingsCount: 860,
    avgPriceSqYd: "PKR 3.10 Lakh / Sq. Yd",
    trend: "+6.9% YoY",
    tagline: "High-rise seafront living, diplomatic enclave, and flagship retail hubs.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Bahria Town Karachi",
    searchKey: "Bahria Town Karachi",
    listingsCount: 2150,
    avgPriceSqYd: "PKR 95,000 / Sq. Yd",
    trend: "+11.2% YoY",
    tagline: "Master-planned gated living on M-9 Motorway with load-shedding free infrastructure.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Gulshan-e-Iqbal",
    searchKey: "Gulshan-e-Iqbal",
    listingsCount: 940,
    avgPriceSqYd: "PKR 1.75 Lakh / Sq. Yd",
    trend: "+7.5% YoY",
    tagline: "Central Karachi's family favorite with top universities, hospitals & commercial avenues.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "PECHS",
    searchKey: "PECHS",
    listingsCount: 680,
    avgPriceSqYd: "PKR 2.60 Lakh / Sq. Yd",
    trend: "+9.1% YoY",
    tagline: "Historic central society bordering Shahrah-e-Faisal with high commercial & residential demand.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Scheme 33",
    searchKey: "Scheme 33",
    listingsCount: 1580,
    avgPriceSqYd: "PKR 82,000 / Sq. Yd",
    trend: "+14.6% YoY",
    tagline: "Fastest-growing residential corridor connecting University Road to M-9 Super Highway.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80"
  }
];

// ==========================================================================
// 2. STATE & LOCALSTORAGE FAVORITES MANAGEMENT
// ==========================================================================
const FAVORITES_STORAGE_KEY = "karachi_estates_favorites_v1";
let currentPurposeTab = "buy";

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favIds) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favIds));
  } catch (e) {
    console.warn("Unable to save favorites to localStorage", e);
  }
}

function toggleFavorite(propertyId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const favs = getFavorites();
  const idx = favs.indexOf(propertyId);
  let added = false;

  if (idx === -1) {
    favs.push(propertyId);
    added = true;
  } else {
    favs.splice(idx, 1);
  }

  saveFavorites(favs);
  updateFavoriteUI();
  showToast(
    added
      ? "Property saved to your Karachi Shortlist"
      : "Removed from your Saved Properties"
  );
}

function updateFavoriteUI() {
  const favs = getFavorites();
  // Update all heart buttons across page
  document.querySelectorAll("[data-fav-id]").forEach((btn) => {
    const id = btn.getAttribute("data-fav-id");
    if (favs.includes(id)) {
      btn.classList.add("is-favorite");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("is-favorite");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  // Update navbar saved counter badge
  document.querySelectorAll(".saved-count-badge").forEach((badge) => {
    badge.textContent = favs.length;
    badge.classList.toggle("hidden", favs.length === 0);
  });
}

// ==========================================================================
// 3. TOAST NOTIFICATION & SHARED MODALS
// ==========================================================================
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className =
    "toast-enter bg-slate-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2.5";
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 4. PROPERTY CARD COMPONENT RENDERER
// ==========================================================================
function renderPropertyCard(prop) {
  const isFav = getFavorites().includes(prop.id);
  const badgeColor =
    prop.badge === "Featured"
      ? "bg-rose-600 text-white"
      : prop.badge === "New Project"
      ? "bg-amber-500 text-slate-950"
      : "bg-slate-900/85 text-white";

  const specsHtml =
    prop.type === "Plot"
      ? `<span class="flex items-center gap-1.5 text-xs font-medium text-slate-600">
           <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
           ${prop.sizeText}
         </span>
         <span class="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Leased Plot</span>`
      : prop.type === "Commercial"
      ? `<span class="flex items-center gap-1.5 text-xs font-medium text-slate-600">
           <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
           ${prop.sizeText}
         </span>
         <span class="text-xs font-medium text-slate-600">${prop.baths} Washrooms</span>`
      : `<span class="flex items-center gap-1 text-xs font-medium text-slate-600" title="Bedrooms">
           <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
           ${prop.beds} Beds
         </span>
         <span class="flex items-center gap-1 text-xs font-medium text-slate-600" title="Bathrooms">
           <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
           ${prop.baths} Baths
         </span>
         <span class="flex items-center gap-1 text-xs font-medium text-slate-600" title="Area Size">
           <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
           ${prop.sizeText}
         </span>`;

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum, I am interested in "${prop.title}" (${prop.priceFormatted}) in ${prop.subLocation}, listed by Upright Smart Solution.`
  );

  return `
    <article class="property-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
      <div class="relative h-52 overflow-hidden bg-slate-100">
        <a href="property-details.html?id=${prop.id}" class="block w-full h-full">
          <img
            src="${prop.image}"
            alt="${prop.title}"
            loading="lazy"
            class="property-img w-full h-full object-cover"
          />
        </a>
        <!-- Top Badges -->
        <div class="absolute top-3 left-3 flex items-center gap-1.5">
          <span class="${badgeColor} text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
            ${prop.badge}
          </span>
          ${
            prop.verified
              ? `<span class="bg-emerald-600 text-white text-[11px] font-semibold px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                   <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                   Verified
                 </span>`
              : ""
          }
        </div>
        <!-- Favorite Heart Button -->
        <button
          type="button"
          data-fav-id="${prop.id}"
          onclick="toggleFavorite('${prop.id}', event)"
          aria-label="Save property"
          aria-pressed="${isFav}"
          class="fav-btn ${isFav ? "is-favorite" : ""} absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-md flex items-center justify-center"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
        <!-- Property Type Pill -->
        <span class="absolute bottom-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
          ${prop.type}
        </span>
      </div>

      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between gap-2 mb-1">
            <p class="text-lg font-extrabold text-slate-900">${prop.priceFormatted}</p>
            <span class="text-[11px] font-semibold uppercase tracking-wide text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
              For ${prop.purpose === "rent" ? "Rent" : prop.purpose === "projects" ? "Booking" : "Sale"}
            </span>
          </div>
          <a href="property-details.html?id=${prop.id}" class="block group">
            <h3 class="text-base font-bold text-slate-800 group-hover:text-rose-600 transition-colors line-clamp-1">
              ${prop.title}
            </h3>
          </a>
          <p class="text-xs text-slate-500 mt-1 flex items-center gap-1 line-clamp-1">
            <svg class="w-3.5 h-3.5 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>${prop.subLocation}</span>
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100">
          <div class="flex items-center justify-between gap-2 mb-3">
            ${specsHtml}
          </div>
          <!-- Quick Call & WhatsApp Actions -->
          <div class="grid grid-cols-2 gap-2">
            <a
              href="tel:${prop.agent.phone.replace(/\s+/g, "")}"
              onclick="showToast('Calling ${prop.agent.name}: ${prop.agent.phone}')"
              class="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:border-rose-600 hover:bg-rose-50 hover:text-rose-600 text-slate-700 text-xs font-bold transition-all"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call for Details
            </a>
            <a
              href="https://wa.me/${USS_WHATSAPP_JAHANGIR}?text=${whatsappMessage}"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Jahangir: 0317 2594192"
              class="min-w-0 flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all"
            >
              <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2a9.9 9.9 0 00-8.48 15.06L2.1 22l5.1-1.34A9.99 9.99 0 1012.04 2zm0 18.2a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.03.8.81-2.96-.19-.31A8.2 8.2 0 1112.04 20.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.79-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.07-.1-.23-.16-.48-.29z"/>
              </svg>
              <span class="min-w-0 text-left leading-tight">
                <span class="block text-[10px] uppercase tracking-wide text-emerald-100">WhatsApp</span>
                <span class="block text-xs font-bold truncate">Jahangir</span>
              </span>
            </a>
            <a
              href="https://wa.me/${USS_WHATSAPP_SECOND}?text=${whatsappMessage}"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Irfan Ullah Khan: 0332 3438045"
              class="min-w-0 flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all"
            >
              <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2a9.9 9.9 0 00-8.48 15.06L2.1 22l5.1-1.34A9.99 9.99 0 1012.04 2zm0 18.2a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.03.8.81-2.96-.19-.31A8.2 8.2 0 1112.04 20.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.79-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.07-.1-.23-.16-.48-.29z"/>
              </svg>
              <span class="min-w-0 text-left leading-tight">
                <span class="block text-[10px] uppercase tracking-wide text-emerald-100">WhatsApp</span>
                <span class="block text-[11px] font-bold leading-4">Irfan Ullah Khan</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ==========================================================================
// 5. FILTERING ENGINE (USED ON BOTH INDEX & LISTINGS PAGES)
// ==========================================================================
function filterKarachiProperties({
  purpose = "all",
  area = "",
  type = "",
  maxBudget = "",
  size = "",
  onlyFavorites = false,
  sortBy = "featured"
}) {
  const favs = getFavorites();

  let results = KARACHI_PROPERTIES.filter((item) => {
    if (onlyFavorites && !favs.includes(item.id)) return false;
    if (purpose && purpose !== "all" && item.purpose !== purpose) return false;
    if (area && area !== "all" && item.area !== area) return false;
    if (type && type !== "all" && item.type !== type) return false;
    if (size && size !== "all" && item.sizeCategory !== size) return false;

    if (maxBudget && maxBudget !== "all") {
      const limit = Number(maxBudget);
      if (!isNaN(limit) && item.pricePKR > limit) return false;
    }

    return true;
  });

  if (sortBy === "price-asc") {
    results.sort((a, b) => a.pricePKR - b.pricePKR);
  } else if (sortBy === "price-desc") {
    results.sort((a, b) => b.pricePKR - a.pricePKR);
  } else {
    // Featured first
    results.sort((a, b) => (b.badge === "Featured" ? 1 : 0) - (a.badge === "Featured" ? 1 : 0));
  }

  return results;
}

// ==========================================================================
// 6. HOME PAGE INITIALIZATION (index.html)
// ==========================================================================
function initHomePage() {
  const featuredGrid = document.getElementById("featured-properties-grid");
  const areaGuidesGrid = document.getElementById("area-guides-grid");
  const heroSearchForm = document.getElementById("hero-search-form");

  // Render Featured Properties (first 6)
  if (featuredGrid) {
    const initialList = KARACHI_PROPERTIES.slice(0, 6);
    featuredGrid.innerHTML = initialList.map(renderPropertyCard).join("");
  }

  // Render Karachi Area Guides
  if (areaGuidesGrid) {
    areaGuidesGrid.innerHTML = KARACHI_AREA_GUIDES.map(
      (guide) => `
      <a
        href="listings.html?area=${encodeURIComponent(guide.searchKey)}"
        class="group relative h-64 rounded-2xl overflow-hidden block shadow-sm border border-slate-200"
      >
        <img
          src="${guide.image}"
          alt="${guide.name} Karachi"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="area-card-overlay absolute inset-0 p-5 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full">
              ${guide.listingsCount.toLocaleString()} Properties
            </span>
            <span class="bg-emerald-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              ${guide.trend}
            </span>
          </div>
          <div>
            <h3 class="text-xl font-extrabold text-white group-hover:text-rose-300 transition-colors">
              ${guide.name}
            </h3>
            <p class="text-xs text-slate-200 mt-1 line-clamp-2">${guide.tagline}</p>
            <div class="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs">
              <span class="text-slate-300">Avg. Price Trend</span>
              <span class="font-bold text-white">${guide.avgPriceSqYd}</span>
            </div>
          </div>
        </div>
      </a>
    `
    ).join("");
  }

  // Hero Tab Switching (Buy / Rent / Projects)
  document.querySelectorAll("[data-purpose-tab]").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      currentPurposeTab = tabBtn.getAttribute("data-purpose-tab");
      document.querySelectorAll("[data-purpose-tab]").forEach((b) => b.classList.remove("active"));
      tabBtn.classList.add("active");

      // Adjust budget options dynamically for Rent vs Buy
      const budgetSelect = document.getElementById("hero-budget");
      if (budgetSelect) {
        if (currentPurposeTab === "rent") {
          budgetSelect.innerHTML = `
            <option value="all">Any Monthly Rent</option>
            <option value="150000">Up to PKR 1.5 Lakh / mo</option>
            <option value="300000">Up to PKR 3 Lakh / mo</option>
            <option value="800000">Up to PKR 8 Lakh / mo</option>
          `;
        } else {
          budgetSelect.innerHTML = `
            <option value="all">Any Budget (PKR)</option>
            <option value="30000000">Up to PKR 3 Crore</option>
            <option value="75000000">Up to PKR 7.5 Crore</option>
            <option value="100000000">Up to PKR 10 Crore</option>
            <option value="200000000">Up to PKR 20 Crore</option>
          `;
        }
      }
    });
  });

  // Hero Search Form Submission -> Redirects to listings.html with query params
  if (heroSearchForm) {
    heroSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const area = document.getElementById("hero-area")?.value || "all";
      const type = document.getElementById("hero-type")?.value || "all";
      const budget = document.getElementById("hero-budget")?.value || "all";
      const size = document.getElementById("hero-size")?.value || "all";

      const params = new URLSearchParams();
      if (currentPurposeTab) params.set("purpose", currentPurposeTab);
      if (area !== "all") params.set("area", area);
      if (type !== "all") params.set("type", type);
      if (budget !== "all") params.set("budget", budget);
      if (size !== "all") params.set("size", size);

      window.location.href = `listings.html?${params.toString()}`;
    });
  }
}

// ==========================================================================
// 7. LISTINGS PAGE INITIALIZATION (listings.html)
// ==========================================================================
function initListingsPage() {
  const resultsGrid = document.getElementById("listings-results-grid");
  if (!resultsGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const purposeEl = document.getElementById("filter-purpose");
  const areaEl = document.getElementById("filter-area");
  const typeEl = document.getElementById("filter-type");
  const budgetEl = document.getElementById("filter-budget");
  const sizeEl = document.getElementById("filter-size");
  const sortEl = document.getElementById("filter-sort");
  const favOnlyEl = document.getElementById("filter-favorites-only");
  const countEl = document.getElementById("results-count");
  const activeTitleEl = document.getElementById("listings-heading");

  // Hydrate controls from URL query string
  if (urlParams.get("purpose") && purposeEl) purposeEl.value = urlParams.get("purpose");
  if (urlParams.get("area") && areaEl) areaEl.value = urlParams.get("area");
  if (urlParams.get("type") && typeEl) typeEl.value = urlParams.get("type");
  if (urlParams.get("budget") && budgetEl) budgetEl.value = urlParams.get("budget");
  if (urlParams.get("size") && sizeEl) sizeEl.value = urlParams.get("size");
  if (urlParams.get("saved") === "1" && favOnlyEl) favOnlyEl.checked = true;

  function applyAndRender() {
    const criteria = {
      purpose: purposeEl ? purposeEl.value : "all",
      area: areaEl ? areaEl.value : "all",
      type: typeEl ? typeEl.value : "all",
      maxBudget: budgetEl ? budgetEl.value : "all",
      size: sizeEl ? sizeEl.value : "all",
      sortBy: sortEl ? sortEl.value : "featured",
      onlyFavorites: favOnlyEl ? favOnlyEl.checked : false
    };

    const filtered = filterKarachiProperties(criteria);

    if (countEl) {
      countEl.textContent = `${filtered.length} ${
        filtered.length === 1 ? "Property" : "Properties"
      } Found in Karachi`;
    }

    if (activeTitleEl) {
      const areaLabel = criteria.area !== "all" ? criteria.area : "All Karachi Societies";
      const typeLabel = criteria.type !== "all" ? criteria.type : "Properties";
      activeTitleEl.textContent = `${typeLabel} in ${areaLabel}`;
    }

    if (filtered.length === 0) {
      resultsGrid.innerHTML = `
        <div class="col-span-full bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <div class="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900">No Matching Karachi Properties Found</h3>
          <p class="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Try widening your PKR budget range, switching societies (e.g., DHA Karachi, Clifton, Bahria Town), or resetting active filters.
          </p>
          <button
            type="button"
            onclick="resetListingFilters()"
            class="mt-5 inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      `;
    } else {
      resultsGrid.innerHTML = filtered.map(renderPropertyCard).join("");
    }

    updateFavoriteUI();
  }

  [purposeEl, areaEl, typeEl, budgetEl, sizeEl, sortEl, favOnlyEl].forEach((el) => {
    if (el) el.addEventListener("change", applyAndRender);
  });

  window.resetListingFilters = function () {
    if (purposeEl) purposeEl.value = "all";
    if (areaEl) areaEl.value = "all";
    if (typeEl) typeEl.value = "all";
    if (budgetEl) budgetEl.value = "all";
    if (sizeEl) sizeEl.value = "all";
    if (sortEl) sortEl.value = "featured";
    if (favOnlyEl) favOnlyEl.checked = false;
    window.history.replaceState({}, "", "listings.html");
    applyAndRender();
  };

  applyAndRender();
}

// ==========================================================================
// 8. PROPERTY DETAILS PAGE & PKR MORTGAGE CALCULATOR (property-details.html)
// ==========================================================================
function formatPKRShort(amount) {
  if (amount >= 10000000) {
    return `PKR ${(amount / 10000000).toFixed(2)} Crore`;
  } else if (amount >= 100000) {
    return `PKR ${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `PKR ${Math.round(amount).toLocaleString("en-PK")}`;
}

function initPropertyDetailsPage() {
  const detailsContainer = document.getElementById("property-details-root");
  if (!detailsContainer) return;

  const params = new URLSearchParams(window.location.search);
  const propId = params.get("id") || "khi-101";
  const property =
    KARACHI_PROPERTIES.find((p) => p.id === propId) || KARACHI_PROPERTIES[0];

  // Update page title & breadcrumb
  document.title = `${property.title} — ${property.area} | Upright Smart Solution`;
  const breadcrumbArea = document.getElementById("breadcrumb-area");
  const breadcrumbTitle = document.getElementById("breadcrumb-title");
  if (breadcrumbArea) {
    breadcrumbArea.textContent = property.area;
    breadcrumbArea.href = `listings.html?area=${encodeURIComponent(property.area)}`;
  }
  if (breadcrumbTitle) breadcrumbTitle.textContent = property.title;

  // Populate main header details
  document.getElementById("detail-title").textContent = property.title;
  document.getElementById("detail-location").textContent = property.subLocation;
  document.getElementById("detail-price").textContent = property.priceFormatted;
  document.getElementById("detail-badge").textContent = property.badge;
  document.getElementById("detail-type").textContent = property.type;
  document.getElementById("detail-size").textContent = property.sizeText;
  document.getElementById("detail-beds").textContent =
    property.beds > 0 ? `${property.beds} Bedrooms` : "N/A";
  document.getElementById("detail-baths").textContent =
    property.baths > 0 ? `${property.baths} Bathrooms` : "Commercial";
  document.getElementById("detail-facing").textContent = property.facing;
  document.getElementById("detail-year").textContent = property.yearBuilt;
  document.getElementById("detail-description").textContent = property.description;

  // Favorite button on details page
  const detailFavBtn = document.getElementById("detail-fav-btn");
  if (detailFavBtn) {
    detailFavBtn.setAttribute("data-fav-id", property.id);
    detailFavBtn.onclick = (e) => toggleFavorite(property.id, e);
  }

  // Photo Gallery
  const mainImg = document.getElementById("gallery-main-img");
  const thumbsWrap = document.getElementById("gallery-thumbs");
  if (mainImg && thumbsWrap) {
    mainImg.src = property.gallery[0];
    mainImg.alt = property.title;

    thumbsWrap.innerHTML = property.gallery
      .map(
        (imgUrl, index) => `
        <button
          type="button"
          onclick="selectGalleryImage('${imgUrl}', this)"
          class="gallery-thumb relative h-20 rounded-xl overflow-hidden border-2 ${
            index === 0 ? "border-rose-600" : "border-transparent opacity-75 hover:opacity-100"
          } transition-all"
        >
          <img src="${imgUrl}" alt="View ${index + 1}" class="w-full h-full object-cover" />
        </button>
      `
      )
      .join("");
  }

  window.selectGalleryImage = function (url, btnEl) {
    if (mainImg) mainImg.src = url;
    document.querySelectorAll(".gallery-thumb").forEach((b) => {
      b.classList.remove("border-rose-600");
      b.classList.add("border-transparent", "opacity-75");
    });
    if (btnEl) {
      btnEl.classList.add("border-rose-600");
      btnEl.classList.remove("border-transparent", "opacity-75");
    }
  };

  // Amenities Checklist
  const amenitiesList = document.getElementById("detail-amenities");
  if (amenitiesList) {
    amenitiesList.innerHTML = property.amenities
      .map(
        (item) => `
        <div class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
          <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </span>
          <span class="text-sm font-medium text-slate-700">${item}</span>
        </div>
      `
      )
      .join("");
  }

  // Agent Sidebar Info
  document.getElementById("agent-name").textContent = property.agent.name;
  document.getElementById("agent-agency").textContent = property.agent.agency;
  const callLink = document.getElementById("agent-call-btn");
  const waJahangirLink = document.getElementById("agent-wa-jahangir-btn");
  const waSecondLink = document.getElementById("agent-wa-second-btn");
  if (callLink) {
    callLink.href = `tel:${property.agent.phone.replace(/\s+/g, "")}`;
    callLink.textContent = `Call ${property.agent.phone}`;
  }
  if (waJahangirLink || waSecondLink) {
    const msg = encodeURIComponent(
      `Assalam-o-Alaikum ${property.agent.name}, I found your listing "${property.title}" (${property.priceFormatted}) in ${property.area} through Upright Smart Solution.`
    );
    if (waJahangirLink) {
      waJahangirLink.href = `https://wa.me/${USS_WHATSAPP_JAHANGIR}?text=${msg}`;
    }
    if (waSecondLink) {
      waSecondLink.href = `https://wa.me/${USS_WHATSAPP_SECOND}?text=${msg}`;
    }
  }

  // Agent Inquiry Form Submit
  const inquiryForm = document.getElementById("agent-inquiry-form");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(`Inquiry sent to ${property.agent.name} (${property.agent.agency})!`);
      inquiryForm.reset();
    });
  }

  // Interactive PKR Mortgage Calculator
  const defaultPropertyPrice =
    property.purpose === "rent" ? 45000000 : property.pricePKR;
  initMortgageCalculator(defaultPropertyPrice);
}

function initMortgageCalculator(initialPricePKR) {
  const priceInput = document.getElementById("calc-price");
  const downSlider = document.getElementById("calc-down-slider");
  const tenureSlider = document.getElementById("calc-tenure-slider");
  const rateSlider = document.getElementById("calc-rate-slider");

  if (!priceInput || !downSlider || !tenureSlider || !rateSlider) return;

  priceInput.value = initialPricePKR;

  function recalculateMortgage() {
    const propertyPrice = Math.max(1000000, Number(priceInput.value) || 0);
    const downPercent = Number(downSlider.value);
    const years = Number(tenureSlider.value);
    const annualRate = Number(rateSlider.value);

    const downAmount = propertyPrice * (downPercent / 100);
    const loanPrincipal = Math.max(0, propertyPrice - downAmount);
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;

    let monthlyEMI = 0;
    if (monthlyRate === 0) {
      monthlyEMI = loanPrincipal / totalMonths;
    } else {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      monthlyEMI = (loanPrincipal * monthlyRate * factor) / (factor - 1);
    }

    // Update UI Labels
    document.getElementById("calc-price-display").textContent =
      formatPKRShort(propertyPrice);
    document.getElementById("calc-down-label").textContent = `${downPercent}% (${formatPKRShort(
      downAmount
    )})`;
    document.getElementById("calc-tenure-label").textContent = `${years} Years`;
    document.getElementById("calc-rate-label").textContent = `${annualRate.toFixed(1)}% / yr`;

    document.getElementById("calc-monthly-emi").textContent = `PKR ${Math.round(
      monthlyEMI
    ).toLocaleString("en-PK")}`;
    document.getElementById("calc-loan-amount").textContent =
      formatPKRShort(loanPrincipal);
    document.getElementById("calc-down-amount").textContent =
      formatPKRShort(downAmount);
  }

  [priceInput, downSlider, tenureSlider, rateSlider].forEach((ctrl) => {
    ctrl.addEventListener("input", recalculateMortgage);
  });

  recalculateMortgage();
}

// ==========================================================================
// 9. BOOTSTRAP ON DOM CONTENT LOADED
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Auth Modal Form Submission
  const authForm = document.getElementById("auth-modal-form");
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("auth-modal");
      showToast("Welcome to Upright Smart Solution! You are now signed in.");
    });
  }

  // Add Property Modal Form Submission
  const addPropForm = document.getElementById("add-property-form");
  if (addPropForm) {
    addPropForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("add-property-modal");
      showToast("Your Karachi property has been submitted for verification!");
      addPropForm.reset();
    });
  }

  // Run Page-Specific Initializers
  initHomePage();
  initListingsPage();
  initPropertyDetailsPage();
  updateFavoriteUI();
});
