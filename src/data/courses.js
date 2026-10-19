export const courseCategories = [
  "All Categories",
  "Medical & Healthcare",
  "Engineering & Technology",
  "Management & Business",
  "Computer Science & IT",
  "Hospitality & Tourism",
  "Law",
  "Science",
  "Commerce & Finance",
  "Education",
  "Arts & Humanities",
  "Design & Creative Arts",
  "Agriculture & Veterinary Sciences",
  "Architecture & Construction",
  "Media & Communication",
  "Sports & Fitness",
  "Transport & Logistics",
  "Vocational & Professional Courses"
];

export const coursesData = [
  // MEDICAL & HEALTHCARE (Brochure 1 & 3 explicit items)
  {
    id: "mbbs",
    name: "Bachelor of Medicine and Bachelor of Surgery",
    abbreviation: "MBBS",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: true,
    description: "Premier undergraduate medical qualification preparing physicians with clinical and surgical skills. Comprehensive guidance for management quota and merit seats.",
    brochureNote: "Management Seats Available in Maharashtra, Karnataka, MP, UP, Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
    destinations: ["India", "United Kingdom", "Ireland", "Italy"],
    inquiryEnabled: true
  },
  {
    id: "bhms",
    name: "Bachelor of Homeopathic Medicine and Surgery",
    abbreviation: "BHMS",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: true,
    description: "Holistic medical degree encompassing modern medicine foundation alongside classic and clinical homeopathic therapeutics.",
    brochureNote: "Management Seats Available in Maharashtra, Karnataka, Punjab, MP, UP, HP",
    statesAvailable: ["Maharashtra", "Karnataka", "Punjab", "Madhya Pradesh", "Uttar Pradesh", "Himachal Pradesh"],
    destinations: ["India"],
    inquiryEnabled: true
  },
  {
    id: "bams",
    name: "Bachelor of Ayurvedic Medicine and Surgery",
    abbreviation: "BAMS",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: true,
    description: "Comprehensive study of traditional Ayurvedic science integrated with modern anatomy, physiology, pathology, and clinical diagnostic techniques.",
    brochureNote: "Management Seats Available in Maharashtra, Karnataka, Punjab, MP, UP, HP",
    statesAvailable: ["Maharashtra", "Karnataka", "Punjab", "Madhya Pradesh", "Uttar Pradesh", "Himachal Pradesh"],
    destinations: ["India"],
    inquiryEnabled: true
  },
  {
    id: "bpth",
    name: "Bachelor of Physiotherapy",
    abbreviation: "BPTH",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: true,
    description: "Professional rehabilitation qualification specializing in movement science, orthopedics, neurology, cardiopulmonary care, and sports physical therapy.",
    brochureNote: "Management Seats Available in Gujarat, Maharashtra, Karnataka, MP, Rajasthan",
    statesAvailable: ["Gujarat", "Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "Australia", "United Kingdom"],
    inquiryEnabled: true
  },
  {
    id: "bds",
    name: "Bachelor of Dental Surgery",
    abbreviation: "BDS",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: false,
    description: "Accredited dental surgery programme covering oral surgery, prosthodontics, periodontics, orthodontics, and restorative oral health care.",
    brochureNote: "Brochure Featured Option : Top Dental Colleges Guidance",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"],
    destinations: ["India"],
    inquiryEnabled: true
  },
  {
    id: "bopt",
    name: "Bachelor of Clinical Optometry",
    abbreviation: "BOPT",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: false,
    description: "Specialized eye care and vision science programme covering refractive error diagnosis, contact lens fittings, and ocular clinical evaluations.",
    brochureNote: "Brochure Featured Option : Clinical Optometry",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat"],
    destinations: ["India"],
    inquiryEnabled: true
  },
  {
    id: "nursing",
    name: "B.Sc Nursing & Healthcare Care",
    abbreviation: "B.Sc Nursing",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: false,
    description: "Professional nursing degree focused on critical patient care, surgical nursing, pediatric care, community health, and international licensing pathways.",
    brochureNote: "Brochure Featured Option : Leading Nursing Colleges",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"],
    destinations: ["India", "United Kingdom", "Ireland", "Australia", "Canada"],
    inquiryEnabled: true
  },
  {
    id: "pharmacy-bpharm",
    name: "Bachelor of Pharmacy",
    abbreviation: "B.Pharm",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: false,
    description: "Pharmaceutical science qualification covering drug formulation, medicinal chemistry, clinical pharmacology, and regulatory standards.",
    brochureNote: "Brochure Featured Option : Pharmacy Programmes",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Madhya Pradesh"],
    destinations: ["India", "United Kingdom", "United States"],
    inquiryEnabled: true
  },
  {
    id: "paramedical-bmlt",
    name: "Medical Laboratory Technology (Paramedical)",
    abbreviation: "BMLT",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: true,
    description: "Clinical diagnostic science programme covering hematology, clinical pathology, biochemistry, microbiology, and advanced clinical laboratory instrumentation.",
    brochureNote: "Private University Seats in Gujarat, Maharashtra, Karnataka & Rajasthan",
    statesAvailable: ["Gujarat", "Maharashtra", "Karnataka", "Rajasthan"],
    destinations: ["India"],
    inquiryEnabled: true
  },
  {
    id: "paramedical-radiology",
    name: "B.Sc Medical Radiology & Imaging Technology",
    abbreviation: "B.Sc Radiology",
    category: "Medical & Healthcare",
    fieldId: "health-medicine",
    featured: false,
    description: "Advanced training in medical imaging including X-Ray, CT Scan, MRI, Ultrasound, and radiation protection safety.",
    brochureNote: "Private University Seats in Gujarat, Maharashtra, Karnataka & Rajasthan",
    statesAvailable: ["Gujarat", "Maharashtra", "Karnataka", "Rajasthan"],
    destinations: ["India"],
    inquiryEnabled: true
  },

  // ENGINEERING & TECHNOLOGY (Brochure 2 & 3)
  {
    id: "btech-cse",
    name: "B.Tech Computer Science & Engineering",
    abbreviation: "B.Tech CSE",
    category: "Engineering & Technology",
    fieldId: "engineering",
    featured: true,
    description: "Comprehensive software and hardware engineering degree focusing on algorithms, full-stack systems, systems architecture, and distributed cloud computing.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, MP & Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United States", "Germany", "United Kingdom", "Canada", "Singapore"],
    inquiryEnabled: true
  },
  {
    id: "btech-ai-ml",
    name: "B.Tech Artificial Intelligence & Machine Learning",
    abbreviation: "B.Tech AI & ML",
    category: "Engineering & Technology",
    fieldId: "engineering",
    featured: true,
    description: "Cutting-edge specialization in neural networks, natural language processing, computer vision, deep learning, and predictive computational modelling.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, MP & Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United States", "Germany", "United Kingdom", "Ireland"],
    inquiryEnabled: true
  },
  {
    id: "btech-mech",
    name: "B.Tech Mechanical & Mechatronics Engineering",
    abbreviation: "B.Tech Mech",
    category: "Engineering & Technology",
    fieldId: "engineering",
    featured: false,
    description: "Core engineering discipline covering thermodynamics, computer-aided design (CAD/CAM), robotics, automation, and manufacturing technology.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, MP & Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "Germany", "United States", "Australia"],
    inquiryEnabled: true
  },
  {
    id: "btech-civil",
    name: "B.Tech Civil & Structural Engineering",
    abbreviation: "B.Tech Civil",
    category: "Engineering & Technology",
    fieldId: "engineering",
    featured: false,
    description: "Infrastructure engineering spanning structural analysis, geotechnical engineering, environmental engineering, and modern smart construction methods.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, MP & Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United Arab Emirates", "Australia"],
    inquiryEnabled: true
  },
  {
    id: "btech-ece",
    name: "B.Tech Electronics & Communication Engineering",
    abbreviation: "B.Tech ECE",
    category: "Engineering & Technology",
    fieldId: "engineering",
    featured: false,
    description: "Semiconductor devices, VLSI design, wireless signal processing, embedded systems, and telecommunication networks.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, MP & Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United States", "Germany", "Singapore"],
    inquiryEnabled: true
  },

  // MANAGEMENT & BUSINESS (Brochure 2 & 3)
  {
    id: "mba",
    name: "Master of Business Administration",
    abbreviation: "MBA",
    category: "Management & Business",
    fieldId: "business-management",
    featured: true,
    description: "Flagship postgraduate business qualification developing leadership in corporate strategy, finance, marketing analytics, human resources, and operations.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, Gujarat, Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"],
    destinations: ["India", "United Kingdom", "United States", "Canada", "Singapore", "Australia", "France"],
    inquiryEnabled: true
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    abbreviation: "BBA",
    category: "Management & Business",
    fieldId: "business-management",
    featured: true,
    description: "Foundation business qualification imparting managerial competence, enterprise governance, financial principles, and organizational behaviour.",
    brochureNote: "Private University Seats in Maharashtra, Karnataka, Gujarat, Rajasthan",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"],
    destinations: ["India", "United Kingdom", "United Arab Emirates", "Singapore"],
    inquiryEnabled: true
  },
  {
    id: "pgdm-ib",
    name: "PGDM in International Business & Global Strategy",
    abbreviation: "PGDM-IB",
    category: "Management & Business",
    fieldId: "business-management",
    featured: false,
    description: "Specialized management curriculum focusing on global trade policies, cross-border corporate finance, global supply chain, and international market expansion.",
    brochureNote: "Brochure Featured Global Programme",
    statesAvailable: ["Maharashtra", "Karnataka", "Delhi NCR"],
    destinations: ["India", "United Kingdom", "Germany", "Singapore"],
    inquiryEnabled: true
  },

  // HOSPITALITY & TOURISM (Brochure 3)
  {
    id: "hotel-management",
    name: "Bachelor of Hotel Management & Catering Tech",
    abbreviation: "BHM / BHMCT",
    category: "Hospitality & Tourism",
    fieldId: "travel-hospitality",
    featured: true,
    description: "Hotel Management & Hospitality Admissions in India & Abroad covering front office operations, luxury food & beverage services, culinary arts, and resort management.",
    brochureNote: "Hotel Management & Hospitality Admissions in India & Abroad",
    statesAvailable: ["Maharashtra", "Gujarat", "Karnataka", "Rajasthan", "Goa"],
    destinations: ["India", "Switzerland", "United Kingdom", "United Arab Emirates", "Singapore", "New Zealand"],
    inquiryEnabled: true
  },
  {
    id: "culinary-arts",
    name: "Diploma & Degree in International Culinary Arts",
    abbreviation: "B.Sc Culinary",
    category: "Hospitality & Tourism",
    fieldId: "travel-hospitality",
    featured: false,
    description: "Professional culinary training under international chef instructors covering European pastry, classical gastronomy, restaurant entrepreneurship, and kitchen management.",
    brochureNote: "Global & Domestic Culinary Guidance",
    statesAvailable: ["Maharashtra", "Karnataka", "Goa"],
    destinations: ["India", "Italy", "United Kingdom", "France", "Switzerland"],
    inquiryEnabled: true
  },

  // COMPUTER SCIENCE & IT
  {
    id: "bca",
    name: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    category: "Computer Science & IT",
    fieldId: "it-computer-science",
    featured: false,
    description: "Applied computing degree focusing on application programming, database design, mobile app development, web architectures, and cloud services.",
    brochureNote: "Private University & Autonomous College Options",
    statesAvailable: ["Maharashtra", "Gujarat", "Karnataka", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United Kingdom", "Australia"],
    inquiryEnabled: true
  },
  {
    id: "mca",
    name: "Master of Computer Applications",
    abbreviation: "MCA",
    category: "Computer Science & IT",
    fieldId: "it-computer-science",
    featured: false,
    description: "Postgraduate software engineering degree preparing enterprise application architects, cybersecurity analysts, and data engineering leads.",
    brochureNote: "Guidance for Centralised Maharashtra and National Seats",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh"],
    destinations: ["India"],
    inquiryEnabled: true
  },

  // COMMERCE & FINANCE
  {
    id: "bcom-financial-markets",
    name: "B.Com in Accounting & Finance / Financial Markets",
    abbreviation: "BAF / BFM",
    category: "Commerce & Finance",
    fieldId: "accounting-finance",
    featured: false,
    description: "Intensive finance programme covering security analysis, portfolio management, international taxation, financial accounting, and auditing standards.",
    brochureNote: "Top Commerce & Management Colleges",
    statesAvailable: ["Maharashtra", "Gujarat", "Karnataka"],
    destinations: ["India", "United Kingdom", "Australia"],
    inquiryEnabled: true
  },

  // LAW
  {
    id: "ba-llb",
    name: "BA LLB (Integrated 5-Year Honours Law)",
    abbreviation: "BA LLB",
    category: "Law",
    fieldId: "law",
    featured: false,
    description: "Integrated legal curriculum integrating social sciences with constitutional law, civil procedure, criminal law, corporate jurisprudence, and moot court practice.",
    brochureNote: "Guidance for State & Private Law Universities",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Madhya Pradesh", "Rajasthan"],
    destinations: ["India", "United Kingdom"],
    inquiryEnabled: true
  },

  // ARCHITECTURE & DESIGN
  {
    id: "barch",
    name: "Bachelor of Architecture (COA Approved)",
    abbreviation: "B.Arch",
    category: "Architecture & Construction",
    fieldId: "architecture-construction",
    featured: false,
    description: "Professional 5-year architecture programme covering architectural design studios, building materials, sustainable urbanism, landscape architecture, and structural design.",
    brochureNote: "NATA & Centralised Admission Counselling",
    statesAvailable: ["Maharashtra", "Gujarat", "Karnataka", "Rajasthan"],
    destinations: ["India", "United Kingdom", "Italy", "Germany"],
    inquiryEnabled: true
  },
  {
    id: "bdes",
    name: "Bachelor of Design (Interaction & Product Design)",
    abbreviation: "B.Des",
    category: "Design & Creative Arts",
    fieldId: "art-design",
    featured: false,
    description: "Creative design qualification focused on user experience (UX), digital product design, industrial design, visual communication, and design research.",
    brochureNote: "Top Design Institutes in India & Overseas",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat", "Delhi NCR"],
    destinations: ["India", "United Kingdom", "Italy", "United States", "Germany"],
    inquiryEnabled: true
  },

  // AGRICULTURE & VETERINARY
  {
    id: "bsc-agri",
    name: "B.Sc (Hons) Agriculture",
    abbreviation: "B.Sc Agri",
    category: "Agriculture & Veterinary Sciences",
    fieldId: "agriculture-veterinary",
    featured: false,
    description: "Agronomic science programme encompassing soil science, plant breeding, crop physiology, agricultural biotechnology, and agribusiness farm management.",
    brochureNote: "State & Deemed Agriculture University Admissions",
    statesAvailable: ["Maharashtra", "Karnataka", "Madhya Pradesh", "Punjab", "Rajasthan"],
    destinations: ["India", "New Zealand", "Australia", "Canada"],
    inquiryEnabled: true
  },

  // EDUCATION
  {
    id: "bed",
    name: "Bachelor of Education (B.Ed)",
    abbreviation: "B.Ed",
    category: "Education",
    fieldId: "education-training",
    featured: false,
    description: "Professional teacher training qualification emphasizing pedagogical theory, classroom psychology, curriculum design, and educational leadership.",
    brochureNote: "NCTE Approved Colleges Guidance",
    statesAvailable: ["Maharashtra", "Gujarat", "Karnataka", "Madhya Pradesh"],
    destinations: ["India"],
    inquiryEnabled: true
  },

  // MEDIA & COMMUNICATION
  {
    id: "bmm-journalism",
    name: "Bachelor of Mass Media & Communication",
    abbreviation: "BMM / BAMMC",
    category: "Media & Communication",
    fieldId: "media-communication",
    featured: false,
    description: "Media studies qualification spanning broadcast journalism, corporate public relations, digital advertising, audio-visual editing, and content strategy.",
    brochureNote: "Leading Media & Arts Colleges",
    statesAvailable: ["Maharashtra", "Delhi NCR", "Karnataka"],
    destinations: ["India", "United Kingdom", "United States", "Australia"],
    inquiryEnabled: true
  },

  // SCIENCE & BIOTECH
  {
    id: "bsc-biotech",
    name: "B.Sc in Biotechnology & Bioinformatics",
    abbreviation: "B.Sc Biotech",
    category: "Science",
    fieldId: "applied-pure-sciences",
    featured: false,
    description: "Biological sciences degree focusing on recombinant DNA technology, immunology, fermentation technology, genetic engineering, and bio-data algorithms.",
    brochureNote: "Research-led Universities",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat"],
    destinations: ["India", "Germany", "United Kingdom", "Ireland", "United States"],
    inquiryEnabled: true
  },

  // VOCATIONAL & PROFESSIONAL
  {
    id: "aviation-ground",
    name: "Aviation Operations & Commercial Logistics",
    abbreviation: "Aviation & Logistics",
    category: "Transport & Logistics",
    fieldId: "transport-logistics",
    featured: false,
    description: "Commercial aviation operations, airport passenger terminal management, cargo logistics, and international air transport regulations.",
    brochureNote: "Aviation & Logistics Academy Options",
    statesAvailable: ["Maharashtra", "Karnataka", "Gujarat"],
    destinations: ["India", "Singapore", "United Arab Emirates"],
    inquiryEnabled: true
  }
];
