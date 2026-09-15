import slide1Img from '../assets/images/slide-1.jpg';
import slide2Img from '../assets/images/slide-2.jpg';
import slide3Img from '../assets/images/slide-3.jpg';
import slide4Img from '../assets/images/slide-4.jpg';
import slide5Img from '../assets/images/slide-5.jpg';

// ==========================================
// 1. MATERIALS DATA (Row 1 & Row 2 for continuous marquees)
// ==========================================
export const materialsRow1 = [
  {
    name: "Stainless Steel",
    code: "SS",
    grades: "304 / 304L / 316 / 316L / 321 / 310S",
    property: "Superior Corrosion & Heat Resistance"
  },
  {
    name: "Duplex Steel",
    code: "DX",
    grades: "UNS S31803 / UNS S32205 (F51)",
    property: "High Yield Strength & Pitting Resistance"
  },
  {
    name: "Super Duplex",
    code: "SD",
    grades: "UNS S32750 / S32760 (F53 / F55)",
    property: "Critical Offshore & Acid Environments"
  },
  {
    name: "Nickel Alloys",
    code: "NA",
    grades: "Alloy 200 / 201 / Monel 400 / K500",
    property: "Marine, Alkaline & Cryogenic Resistance"
  },
  {
    name: "Inconel",
    code: "INC",
    grades: "Inconel 600 / 625 / 718 / 825",
    property: "Extreme High-Temperature Oxidation Resistance"
  }
];

export const materialsRow2 = [
  {
    name: "Hastelloy",
    code: "HAST",
    grades: "C276 / C22 / B2 / B3 / X",
    property: "Severe Chemical & Wet Chlorine Service"
  },
  {
    name: "Titanium",
    code: "TI",
    grades: "Grade 1 / Grade 2 / Grade 5 (Ti-6Al-4V)",
    property: "Ultra High Strength-to-Weight Ratio"
  },
  {
    name: "Alloy Steel",
    code: "AS",
    grades: "ASTM A335 P11 / P22 / P91 / 4140",
    property: "High Pressure Boilers & Power Piping"
  },
  {
    name: "Copper",
    code: "CU",
    grades: "Cu-Ni 90/10, 70/30 & Electrolytic Copper",
    property: "High Thermal Conductivity & Anti-fouling"
  },
  {
    name: "Carbon Steel",
    code: "CS",
    grades: "ASTM A106 Gr.B / A53 / A105 / API 5L",
    property: "Heavy Industrial & Structural Infrastructure"
  }
];

// ==========================================
// 2. PRODUCTS DATA (13 Products with Category Tabs)
// ==========================================
export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "fittings", label: "Fittings & Flanges" },
  { id: "pipes", label: "Pipes & Tubes" },
  { id: "plates", label: "Sheets & Plates" },
  { id: "bars", label: "Bars & Fasteners" }
];

export const productsData = [
  {
    id: "butt-weld-fittings",
    name: "Butt Weld Fittings",
    category: "fittings",
    categoryLabel: "Fittings & Flanges",
    specTag: "ASME B16.9 // ELBOWS, TEES, REDUCERS",
    image: slide3Img,
    alt: "Precision industrial butt weld pipe fittings"
  },
  {
    id: "flanges",
    name: "Flanges",
    category: "fittings",
    categoryLabel: "Fittings & Flanges",
    specTag: "ASME B16.5 // WELD NECK, SLIP-ON, BLIND",
    image: slide3Img,
    alt: "High-pressure industrial forged steel flanges"
  },
  {
    id: "round-bars",
    name: "Round Bars",
    category: "bars",
    categoryLabel: "Bars & Fasteners",
    specTag: "ASTM A276 / A479 // BRIGHT & BLACK FINISH",
    image: slide4Img,
    alt: "Stainless steel and alloy solid round bars"
  },
  {
    id: "pipe-fittings",
    name: "Pipe Fittings",
    category: "fittings",
    categoryLabel: "Fittings & Flanges",
    specTag: "MSS-SP // HIGH INTEGRITY PROCESS CONNECTIONS",
    image: slide3Img,
    alt: "Heavy duty process pipe fittings"
  },
  {
    id: "tube-fittings",
    name: "Tube Fittings",
    category: "fittings",
    categoryLabel: "Fittings & Flanges",
    specTag: "DOUBLE FERRULE // INSTRUMENTATION GRADE",
    image: slide3Img,
    alt: "Precision instrumentation tube fittings"
  },
  {
    id: "forged-fittings",
    name: "Forged Fittings",
    category: "fittings",
    categoryLabel: "Fittings & Flanges",
    specTag: "ASME B16.11 // 3000# / 6000# / 9000#",
    image: slide3Img,
    alt: "High-pressure forged socket weld and threaded fittings"
  },
  {
    id: "fasteners",
    name: "Fasteners",
    category: "bars",
    categoryLabel: "Bars & Fasteners",
    specTag: "ASTM A193 / A194 // STUDS, BOLTS & SPECIALS",
    image: slide4Img,
    alt: "High tensile industrial alloy fasteners"
  },
  {
    id: "sheets",
    name: "Sheets",
    category: "plates",
    categoryLabel: "Sheets & Plates",
    specTag: "ASTM A240 // 2B / BA / NO.4 FINISH",
    image: slide2Img,
    alt: "Cold rolled precision stainless steel sheets"
  },
  {
    id: "plates",
    name: "Plates",
    category: "plates",
    categoryLabel: "Sheets & Plates",
    specTag: "ASME SA516 / SA240 // HEAVY ROLLING",
    image: slide1Img,
    alt: "Heavy boiler and pressure vessel steel plates"
  },
  {
    id: "pipes",
    name: "Pipes",
    category: "pipes",
    categoryLabel: "Pipes & Tubes",
    specTag: "ASTM A312 / A358 // SCHEDULE 10 TO XXS",
    image: slide3Img,
    alt: "Welded and heavy wall industrial steel pipes"
  },
  {
    id: "tubes",
    name: "Tubes",
    category: "pipes",
    categoryLabel: "Pipes & Tubes",
    specTag: "ASTM A269 / A213 // HEAT EXCHANGER TUBES",
    image: slide5Img,
    alt: "Precision seamless heat exchanger and boiler tubes"
  },
  {
    id: "seamless-pipes",
    name: "Seamless Pipes",
    category: "pipes",
    categoryLabel: "Pipes & Tubes",
    specTag: "HOT ROLLED & COLD DRAWN // ZERO DEFECT",
    image: slide3Img,
    alt: "High-pressure seamless carbon and alloy pipes"
  },
  {
    id: "nuts-bolts",
    name: "Nuts & Bolts",
    category: "bars",
    categoryLabel: "Bars & Fasteners",
    specTag: "GRADE 8.8 / 10.9 / 12.9 & B8M / B7",
    image: slide4Img,
    alt: "Industrial heavy hex nuts and studs"
  }
];

// ==========================================
// 3. WHY CHOOSE US (6 Pillars)
// ==========================================
export const whyChooseData = [
  {
    number: "01",
    title: "ENGINEERED QUALITY",
    description: "Precision-focused products for demanding applications, manufactured under stringent metallurgical tolerances.",
    badge: "100% PMI & UT TESTED",
    iconName: "ShieldCheck"
  },
  {
    number: "02",
    title: "GLOBAL SUPPLY",
    description: "Reliable sourcing and delivery for international markets with synchronized export handling and packaging.",
    badge: "45+ EXPORT DESTINATIONS",
    iconName: "Globe"
  },
  {
    number: "03",
    title: "QUALITY ASSURANCE",
    description: "Consistent standards, inspection and documentation provided with every heat lot and batch shipment.",
    badge: "EN 10204 3.1 & 3.2 MTR",
    iconName: "Award"
  },
  {
    number: "04",
    title: "INDUSTRIAL EXPERTISE",
    description: "Solutions built around demanding engineering requirements, code compliance, and specialized metallurgy.",
    badge: "ASME • ASTM • DIN • ISO",
    iconName: "Cpu"
  },
  {
    number: "05",
    title: "RELIABLE SERVICE",
    description: "Responsive support from enquiry to delivery with dedicated project desk and technical consultation.",
    badge: "TECHNICAL ASSISTANCE",
    iconName: "Headphones"
  },
  {
    number: "06",
    title: "ON-TIME DELIVERY",
    description: "Organized supply and logistics for critical requirements, backed by strategic inventory and ready stock.",
    badge: "OPTIMIZED LOGISTICS",
    iconName: "Truck"
  }
];

// ==========================================
// 4. APPLICATION INDUSTRIES (10 Industries)
// ==========================================
export const industriesData = [
  {
    id: "engineering",
    name: "Engineering Industries",
    subtitle: "Heavy Machinery & Structural Systems",
    code: "ENG-01",
    image: slide1Img
  },
  {
    id: "sugar",
    name: "Sugar Industries",
    subtitle: "Corrosion-Resistant Mill Rollers & Piping",
    code: "SGR-02",
    image: slide2Img
  },
  {
    id: "power",
    name: "Power",
    subtitle: "Thermal Generation & Superheater Tubes",
    code: "PWR-03",
    image: slide5Img
  },
  {
    id: "nuclear-power",
    name: "Nuclear Power",
    subtitle: "Ultra-High Purity Reactor Grade Piping",
    code: "NUC-04",
    image: slide3Img
  },
  {
    id: "petrochemical",
    name: "Petrochemical",
    subtitle: "Hydrocarbon Processing & Refineries",
    code: "PET-05",
    image: slide5Img
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    subtitle: "Upstream, Midstream & Subsea Pipelines",
    code: "O&G-06",
    image: slide3Img
  },
  {
    id: "precision-engineering",
    name: "Precision Engineering",
    subtitle: "Tight Tolerance Shafts & Turned Parts",
    code: "PRC-07",
    image: slide4Img
  },
  {
    id: "industrial-piping",
    name: "Industrial Piping",
    subtitle: "Chemical Lines & High Pressure Distribution",
    code: "PIP-08",
    image: slide3Img
  },
  {
    id: "heavy-engineering",
    name: "Heavy Engineering",
    subtitle: "Fabricated Columns, Pressure Vessels & Boilers",
    code: "HVY-09",
    image: slide1Img
  },
  {
    id: "defense-aerospace",
    name: "Defense & Aerospace",
    subtitle: "Mission-Critical Certified Superalloys",
    code: "DEF-10",
    image: slide4Img
  }
];

// ==========================================
// 5. VALUE ADDED SERVICES (7 Items)
// ==========================================
export const valueAddedData = [
  {
    id: "material-sourcing",
    number: "01",
    title: "Material Sourcing",
    tagline: "Direct Mill Partnerships",
    description: "Global procurement of rare alloy grades and hard-to-source metallurgy directly from audited primary producers.",
    highlight: "Primary Producer Auditing"
  },
  {
    id: "quality-inspection",
    number: "02",
    title: "Quality Inspection",
    tagline: "Independent Verification",
    description: "Rigorous third-party inspection (TPI) options with agencies like DNV, Lloyds, Bureau Veritas, and TUV.",
    highlight: "TPI / Client Witnessing"
  },
  {
    id: "testing-documentation",
    number: "03",
    title: "Testing & Documentation",
    tagline: "Complete Traceability",
    description: "Certified Mill Test Reports (MTRs) to EN 10204 3.1 & 3.2, ultrasonic, radiographic, impact, and chemical testing.",
    highlight: "100% Heat Number Traceability"
  },
  {
    id: "custom-requirements",
    number: "04",
    title: "Custom Requirements",
    tagline: "Precision Profiling",
    description: "Custom cut-to-length pipes, plate beveling, waterjet profile cutting, custom drilling, and precision surface finishes.",
    highlight: "Tight Engineering Tolerances"
  },
  {
    id: "project-supply",
    number: "05",
    title: "Project Supply",
    tagline: "Turnkey Package Execution",
    description: "Integrated bill-of-materials fulfillment for EPC contractors, multi-commodity project staging, and milestone delivery.",
    highlight: "EPC & Turnkey Coordination"
  },
  {
    id: "export-packaging",
    number: "06",
    title: "Export Packaging",
    tagline: "Seaworthy Protection",
    description: "Fumigated ISPM-15 wooden boxes, end-capping, anti-corrosion VCI wrapping, and reinforced container lashing.",
    highlight: "ISPM-15 Seaworthy Standards"
  },
  {
    id: "logistics-support",
    number: "07",
    title: "Logistics Support",
    tagline: "Global Multi-Modal Transit",
    description: "End-to-end freight clearance, customs documentation, breakbulk shipping, and door-to-port delivery worldwide.",
    highlight: "Air / Sea Freight Handling"
  }
];

// ==========================================
// 6. CLIENT NETWORK (Continuous Logo Marquee)
// ==========================================
export const clientsData = [
  { name: "Indian Oil", sector: "Refinery & Hydrocarbons", tag: "Petroleum Giant" },
  { name: "L&T", sector: "EPC & Heavy Engineering", tag: "Infrastructure Major" },
  { name: "Tata Steel", sector: "Primary Metals & Steel", tag: "Industrial Pioneer" },
  { name: "EIL", sector: "Consultancy & Petrochemical", tag: "Engineering Premier" },
  { name: "Adani", sector: "Energy & Port Logistics", tag: "Conglomerate" },
  { name: "Reliance", sector: "Refinery & Energy Mega-complex", tag: "Energy Leader" },
  { name: "ONGC", sector: "Exploration & Production", tag: "Offshore Leader" },
  { name: "BHEL", sector: "Power Equipment & Boilers", tag: "Power Premier" },
  { name: "GAIL", sector: "Natural Gas Transmission", tag: "Gas Utility" },
  { name: "Bharat Petroleum", sector: "Downstream Fuel Refining", tag: "Downstream Giant" }
];

// ==========================================
// 7. COUNTRIES WE EXPORT TO (Global Footprint)
// ==========================================
export const exportRegions = [
  {
    region: "North America",
    destinations: ["United States", "Canada", "Mexico"],
    hub: "Houston & New York",
    lat: "35%",
    lng: "22%"
  },
  {
    region: "Europe",
    destinations: ["Germany", "United Kingdom", "Italy", "Netherlands"],
    hub: "Rotterdam & Antwerp",
    lat: "28%",
    lng: "50%"
  },
  {
    region: "Middle East",
    destinations: ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait"],
    hub: "Jebel Ali & Dammam",
    lat: "42%",
    lng: "60%"
  },
  {
    region: "Asia & Southeast Asia",
    destinations: ["Singapore", "Malaysia", "Vietnam", "Japan", "South Korea"],
    hub: "Singapore & Yokohama",
    lat: "48%",
    lng: "78%"
  },
  {
    region: "Africa",
    destinations: ["South Africa", "Nigeria", "Egypt", "Kenya"],
    hub: "Durban & Alexandria",
    lat: "58%",
    lng: "52%"
  },
  {
    region: "South America",
    destinations: ["Brazil", "Chile", "Argentina"],
    hub: "Santos & Valparaíso",
    lat: "70%",
    lng: "32%"
  },
  {
    region: "Australia / Oceania",
    destinations: ["Australia", "New Zealand"],
    hub: "Sydney & Melbourne",
    lat: "75%",
    lng: "86%"
  }
];

export const exportMetrics = [
  { label: "Global Export Markets", value: "45+", suffix: "Countries" },
  { label: "On-Spec Compliance", value: "100%", suffix: "Verified" },
  { label: "Annual Supply Volume", value: "25,000+", suffix: "Metric Tons" },
  { label: "Global Logistics Hubs", value: "12", suffix: "Strategic Ports" }
];
