const getImg = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export const hospitalInfo = {
  name: "KRS Multispeciality Hospital & Trauma Care Centre",
  shortName: "KRS Hospital",
  location: "Edappadi, Salem District, Tamil Nadu",
  address: "Salem Main Road, Vellandivalasu, Edappadi, Tamil Nadu 637105",
  founded: 1996,
  founder: "Dr. K. Ravisuthan",
  emergencyPhone: "+91 94432 55555",
  hospitalMobile: "+91 63808 98608",
  landlinePhone: "04283 222266",
  labPhone: "+91 99444 49559",
  email: "krsmultispecialityh@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61583509866582",
  instagram: "https://www.instagram.com/krshospital?igsh=MXdxanowcDY1eXQzZA==",
  googleMaps: "https://maps.google.com/?q=KRS+Hospital+Edappadi+Salem+Tamil+Nadu",
  whatsapp: "+91 63808 98608",
  workingHours: "24 Hours / 7 Days Open (Emergency, ICU & Lab Available 24/7)",
  tagline: "A Trusted Name, A Deserved Care",
  stats: [
    { label: "Years of Trust", value: "28+", desc: "Serving families since 1996" },
    { label: "Specialist Departments", value: "15+", desc: "Comprehensive care under one roof" },
    { label: "Expert Doctors", value: "19+", desc: "Highly qualified surgeons & physicians" },
    { label: "Patients Treated", value: "150k+", desc: "Trusted by generations in Edappadi" }
  ]
};

export const aboutData = {
  story: "KRS Multispeciality Hospital & Trauma Care Centre stands as a symbol of trust, excellence, and compassionate care in Edappadi. Founded in 1996 as KRS Clinic by Dr. K. Ravisuthan, it has today grown into one of Edappadi’s most trusted and advanced healthcare destinations. Built on a foundation of dedication and integrity, KRS has expanded from a small clinic to a multispeciality hub that brings expert doctors, modern technology, and comprehensive care together under one roof. Our commitment has always been simple: quality healthcare that every family can rely on.\n\nFrom routine consultations to advanced treatments, from emergency trauma care to specialized medical services, we ensure every patient receives personalised attention supported by the latest innovations in healthcare. At KRS, we believe healing is not just a process, it’s a partnership. That’s why we continuously upgrade our facilities, invest in superior diagnostic systems, and focus on patient comfort and safety at every step.\n\nFor nearly three decades, KRS has been more than a hospital — it has been a symbol of trust, hope, and healing for the people of Edappadi.",
  buildingImage: getImg("images/building.jpeg"),
  buildingImages: [
    getImg("images/building.jpeg"),
    getImg("images/building_wide.jpeg")
  ],
  mission: [
    "Delivering comprehensive, evidence-based medical services",
    "Offering personalized attention with empathy, dignity, and respect",
    "Maintaining a safe, transparent, and friendly environment",
    "Ensuring affordable clinical excellence for all individuals"
  ],
  missionClosing: "Our mission is rooted in a commitment to treat every patient with the same care and sincerity we extend to family.",
  vision: [
    "Delivering high-quality, technology-driven healthcare.",
    "Making world-class treatment accessible to every patient.",
    "Building long-term confidence through ethical and honest care.",
    "Ensuring every patient feels heard, cared for, and respected.",
    "Adopting the latest medical advancements for better outcomes.",
    "Contributing to a healthier society through education and preventive care."
  ],
  qualityPolicy: [
    "Uphold international standards in all aspects of healthcare delivery",
    "Use state-of-the-art technology for precise diagnosis and effective treatment",
    "Combine safety, quality, and affordability in every service we provide",
    "Offer individualized care, making every patient feel supported and valued",
    "Foster a positive, empowering environment for our healthcare workforce to excel"
  ]
};

export const healthPackages = [
  {
    id: "pkg-master",
    name: "Master Executive Health Checkup",
    category: "Full Body Wellness",
    popular: true,
    price: "₹2,499",
    originalPrice: "₹4,500",
    discount: "45% OFF",
    icon: "Activity",
    desc: "Comprehensive 45+ parameter health screening designed for complete organ function assessment and early disease prevention.",
    inclusions: [
      "Complete Blood Count (CBC & ESR)",
      "Fasting Blood Sugar & HbA1c",
      "Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)",
      "Kidney Function Test (Urea, Creatinine, Uric Acid)",
      "Liver Function Test (SGOT, SGPT, Bilirubin)",
      "Thyroid Profile (TSH)",
      "12-Lead Digital ECG",
      "Urine Routine & Microscopic",
      "General Physician Consultation"
    ]
  },
  {
    id: "pkg-diabetic",
    name: "Comprehensive Diabetic & Vascular Care",
    category: "Diabetology Special",
    popular: true,
    price: "₹1,899",
    originalPrice: "₹3,200",
    discount: "40% OFF",
    icon: "HeartPulse",
    desc: "Specialized package tailored for diabetic patients to evaluate sugar control, nerve health, and target organ complications.",
    inclusions: [
      "Fasting & Post-Prandial Blood Glucose",
      "HbA1c Glycated Hemoglobin Test",
      "Serum Creatinine & Microalbuminuria",
      "Lipid Profile & Liver Enzymes",
      "Diabetic Foot Neuropathy Screening",
      "Diabetic Eye & Retina Screening Guidance",
      "Chief Diabetologist Consultation (Dr. K. Ravisuthan)"
    ]
  },
  {
    id: "pkg-women",
    name: "Women's Wellness & Hormonal Package",
    category: "Women's Health",
    popular: false,
    price: "₹2,199",
    originalPrice: "₹3,800",
    discount: "42% OFF",
    icon: "Sparkles",
    desc: "Holistic screening for women covering hormonal balance, bone density, thyroid, blood count, and gynecologic wellness.",
    inclusions: [
      "Complete Hemogram & Anemia Screening",
      "Thyroid Profile (T3, T4, TSH)",
      "Calcium & Vitamin D3 Evaluation",
      "Fasting Blood Sugar & Urine Analysis",
      "Pap Smear Screening & Pelvic Evaluation",
      "Breast Wellness Check",
      "Consultant Gynecologist Consultation (Dr. Srija)"
    ]
  },
  {
    id: "pkg-senior",
    name: "Senior Citizen Total Care Package",
    category: "Elderly Care",
    popular: true,
    price: "₹2,999",
    originalPrice: "₹5,500",
    discount: "45% OFF",
    icon: "HeartHandshake",
    desc: "Tailored health assessment for adults aged 50+ to monitor joint health, cardiac function, prostate/gynecologic wellness, and vital organs.",
    inclusions: [
      "Full Body Biochemistry (Liver, Kidney, Lipid)",
      "HbA1c & Fasting Glucose",
      "Digital Chest X-Ray & 12-Lead ECG",
      "Serum Electrolytes & Uric Acid",
      "Bone Health (Calcium, Vitamin D)",
      "Prostate (PSA for Men) / Pap Smear (for Women)",
      "Senior Physician & Joint Specialist Consultation"
    ]
  },
  {
    id: "pkg-cardiac",
    name: "Cardiac & Hypertension Risk Check",
    category: "Heart & Vascular",
    popular: false,
    price: "₹1,999",
    originalPrice: "₹3,500",
    discount: "43% OFF",
    icon: "ShieldAlert",
    desc: "Focused cardiovascular checkup to detect early signs of hypertension, heart strain, high cholesterol, and arterial risk.",
    inclusions: [
      "12-Lead Digital ECG",
      "Complete Lipid Profile (HDL, LDL, VLDL, Triglycerides)",
      "High-Sensitivity CRP & Homocysteine",
      "Serum Electrolytes & Renal Panel",
      "Blood Pressure Monitoring & Risk Scoring",
      "Senior Physician & Cardiologist Consultation"
    ]
  }
];

export const departments = [
  {
    id: "gen-med",
    name: "General Medicine",
    icon: "Stethoscope",
    desc: "Comprehensive outpatient consultation, acute emergency care, and chronic disease management.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Outpatient Consultation & Chronic Illness Treatment",
      "24/7 Emergency & Acute Medical Care (Fever, Chest Pain, Breathlessness)",
      "Chronic Disease Management (Hypertension, Thyroid, Asthma, COPD)",
      "Advanced Diagnostic Support (24/7 Lab, Digital X-Ray, ECG)",
      "Inpatient Medical Care & Multispecialty Coordination"
    ]
  },
  {
    id: "diabetology",
    name: "Diabetology",
    icon: "Activity",
    desc: "Advanced screening, personalized insulin & oral therapies, and diabetic foot & complication care.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "HbA1c & Fasting Sugar Screening for Type 1, Type 2 & Gestational Diabetes",
      "Personalized Oral & Insulin Regimen Planning",
      "Diabetic Foot Examination, Neuropathy Screening & Ulcer Care",
      "Customized Diabetic Diet & Weight Control Planning",
      "Eye, Kidney, Nerve & Cardiac Complication Monitoring"
    ]
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    icon: "Activity",
    desc: "Specialized diagnostics and hormone therapies for thyroid, adrenal, pituitary gland conditions, and metabolic health.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Thyroid Function Testing & Goitre Treatment",
      "Growth Hormone & Pituitary Evaluation",
      "PCOS & Reproductive Hormone Management",
      "Adrenal Gland & Osteoporosis Therapies",
      "Hormonal Imbalance & Medical Obesity Care"
    ]
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Arthroscopy",
    icon: "Bone",
    desc: "Trauma care, joint replacements, arthroscopic keyhole surgeries, and complex fracture fixations.",
    image: getImg("images/ot_main.jpeg"),
    services: [
      "Trauma & Emergency Fracture Fixation (Plating & Nailing)",
      "Arthroscopic Knee & Shoulder Keyhole Surgery (Meniscus & Rotator Cuff Repair)",
      "Total Knee & Total Hip Joint Replacement Services",
      "Spine Care & Minimally Invasive Disc Herniation Management",
      "Sports Injury Rehabilitation & Osteoporosis Care"
    ]
  },
  {
    id: "neurology",
    name: "Neurology & Neurosurgery",
    icon: "Brain",
    desc: "Rapid stroke interventions, epilepsy management, headache clinics, and nerve-spine pain relief.",
    image: getImg("images/ot_surgery.jpeg"),
    services: [
      "Emergency Stroke Evaluation (CT/MRI & Thrombolysis)",
      "Epilepsy & Seizure Management with EEG Monitoring",
      "Headache & Migraine Specialist Clinic",
      "Electromyography (EMG/NCV) for Neuro-Muscular Disorders",
      "Sciatica & Slip Disc Spine Intervention"
    ]
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynaecology",
    icon: "HeartHandshake",
    desc: "Maternal-fetal monitoring, high-risk pregnancy care, painless birthing, and laparoscopic surgeries.",
    image: getImg("images/ot_main.jpeg"),
    services: [
      "Comprehensive Pregnancy Scans & Antenatal Care",
      "Normal Birthing & Emergency C-Section Facilities",
      "Fertility Evaluation, Ovulation Induction & IUI",
      "Laparoscopic & Hysteroscopic Gynaecologic Surgery",
      "PCOS, Thyroid & Menopause Management Clinics"
    ]
  },
  {
    id: "pulmonology",
    name: "Pulmonology & Respiratory",
    icon: "Wind",
    desc: "Asthma, COPD, pneumonia, post-TB lung recovery, and oxygen/ventilation therapies.",
    image: getImg("images/icu_ventilator.jpeg"),
    services: [
      "Pulmonary Function Testing (PFT) & Asthma Control",
      "Pneumonia & Severe Respiratory Infection ICU Management",
      "Non-Invasive Ventilation (NIV) & Oxygen Therapy",
      "Tuberculosis & Post-TB Lung Rehabilitation",
      "Allergy Testing & Respiratory Immunotherapy"
    ]
  },
  {
    id: "dermatology",
    name: "Dermatology & Cosmetology",
    icon: "Sparkles",
    desc: "Clinical skin treatment, cosmetic rejuvenation, hair loss PRP, and dermatologic surgeries.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Medical Treatment for Acne, Eczema, Psoriasis & Vitiligo",
      "Cosmetic Chemical Peels, Laser Therapy & Anti-Aging",
      "Surgical Removal of Moles, Cysts, Warts & Skin Biopsies",
      "Hair Loss PRP Therapy & Scalp Disorder Treatment",
      "Allergy Patch Testing & Hives Management"
    ]
  },
  {
    id: "surgery",
    name: "General & Laparoscopic Surgery",
    icon: "Scissors",
    desc: "Minimally invasive keyhole surgeries for hernia, appendix, gallbladder, thyroid, and breast lump care.",
    image: getImg("images/ot_main.jpeg"),
    services: [
      "Laparoscopic Hernia, Appendectomy & Gallbladder Surgery",
      "Precision Endocrine & Thyroid Gland Resection",
      "Breast Lump Excision & Reconstructive Surgery",
      "Gastrointestinal Obstruction & Emergency Trauma Surgery",
      "Post-operative Recovery & Holistic Surgical Counseling"
    ]
  },
  {
    id: "urology",
    name: "Urology & Andrology",
    icon: "ShieldAlert",
    desc: "Laser stone removal (lithotripsy), prostate care, male fertility, and pediatric urology.",
    image: getImg("images/ot_surgery.jpeg"),
    services: [
      "Kidney Stone Lithotripsy & Ureteroscopy (URS/RIRC)",
      "Prostate Enlargement (BPH) & Bladder Care",
      "Male Fertility & Erectile Dysfunction Therapies",
      "Pediatric Urinary Tract Congenital Anomaly Surgery",
      "Andrological Reconstructive Surgeries"
    ]
  },
  {
    id: "oncology",
    name: "Surgical Oncology",
    icon: "Crosshair",
    desc: "Precision cancer diagnosis, minimally invasive tumor resection, and multidisciplinary oncology care.",
    image: getImg("images/ot_surgery.jpeg"),
    services: [
      "Advanced Staging & Tumor Biopsy Diagnostics",
      "Robotic & Laparoscopic Tumor Resection",
      "Breast, Soft Tissue & Sarcoma Surgical Management",
      "Gastrointestinal (Stomach, Liver, Colon) Cancer Surgeries",
      "Head, Neck & Thoracic Oncology Resections"
    ]
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    icon: "Baby",
    desc: "Newborn care, NICU facilities, pediatric growth tracking, vaccinations, and emergency critical care.",
    image: getImg("images/icu_beds.jpeg"),
    services: [
      "Newborn Screening & NICU Critical Care Support",
      "Childhood Vaccination & Immunization Schedules",
      "Pediatric Infectious Disease & Fever Management",
      "Child Asthma, Allergy & Diabetes Care",
      "Developmental & Behavioral Evaluation (ADHD/Autism)"
    ]
  },
  {
    id: "dental",
    name: "Dental & Maxillofacial",
    icon: "Smile",
    desc: "Root canal therapy, crowns, gum care, wisdom tooth extractions, and facial trauma restoration.",
    image: getImg("images/dental_care.png"),
    services: [
      "Preventive Oral Cleaning, Scaling & Cavity Protection",
      "Restorative Tooth-Colored Fillings, Crowns & Inlays",
      "Painless Endodontic Root Canal Therapy",
      "Periodontal Gum Disease Scaling & Root Planing",
      "Oral Maxillofacial Surgery & Wisdom Tooth Extraction"
    ]
  },
  {
    id: "ct-scan",
    name: "CT Scan & Advanced Imaging",
    icon: "Scan",
    desc: "Round-the-clock 128-slice CT scan, multi-detector spiral angiography, brain, chest & emergency trauma cross-sectional imaging.",
    image: getImg("images/ct_scan_simple.jpg"),
    services: [
      "24/7 Emergency CT Brain & Head Injury Evaluation",
      "High-Speed High-Resolution Whole Body & Abdominal CT",
      "3D CT Angiography & Vascular Scan",
      "Chest CT Scan for Lung Infection & Pulmonary Embolism",
      "Spine & Musculoskeletal CT Scans with Instant Digital Reports"
    ]
  },

  {
    id: "emergency-care",
    name: "Emergency & Critical Care Medicine",
    icon: "ShieldAlert",
    desc: "24/7 rapid trauma response, emergency resuscitation, ICU triage, and critical patient stabilization.",
    image: getImg("images/emergency_ward_new.jpg"),
    services: [
      "24/7 Emergency Casualty & Trauma Resuscitation",
      "ICU Critical Care & Advanced Vital Monitoring",
      "Cardiac, Stroke & Acute Poisoning Emergency Protocols",
      "Continuous Oxygen & Mechanical Ventilation Support",
      "Rapid Ambulance Dispatch & Triage Response"
    ]
  },
  {
    id: "anesthesiology",
    name: "Anesthesiology & Pain Management",
    icon: "Activity",
    desc: "Pre-operative anesthesia planning, perioperative monitoring, and acute & chronic pain management.",
    image: getImg("images/ot_main.jpeg"),
    services: [
      "General Anesthesia & Precision Intra-Operative Monitoring",
      "Spinal, Epidural & Regional Nerve Block Anesthesia",
      "Post-Operative Acute Pain Relief Management",
      "Painless Labor Epidural Services",
      "Chronic Musculoskeletal & Nerve Pain Interventions"
    ]
  },
  {
    id: "psychiatry",
    name: "Psychiatry & Mental Health",
    icon: "Brain",
    desc: "Clinical psychiatric assessment, counseling, stress & anxiety therapies, and behavioral health.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Clinical Psychiatric Evaluation & Consultation",
      "Stress, Anxiety & Depression Counseling Therapies",
      "Insomnia & Sleep Disorder Management",
      "De-Addiction & Behavioral Therapy Programs",
      "Psychosomatic Disorder Integrated Care"
    ]
  },
  {
    id: "radiology",
    name: "Radiology & Diagnostic Imaging",
    icon: "Scan",
    desc: "128-slice CT scans, digital X-rays, ultrasound imaging, and diagnostic radiological reporting.",
    image: getImg("images/ct_scan_simple.jpg"),
    services: [
      "24/7 Emergency CT Scan & Cross-Sectional Imaging",
      "3D CT Angiography & Vascular Diagnostics",
      "High-Resolution Abdominal & Thoracic Scans",
      "Digital X-Ray & Ultrasound Imaging Reports",
      "Musculoskeletal & Neuro-Radiology Reporting"
    ]
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: "Stethoscope",
    desc: "Comprehensive care for digestive diseases, liver disorders, endoscopy, colonoscopy, and abdominal health.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Diagnostic & Therapeutic Upper GI Endoscopy",
      "Colonoscopy & Polypectomy Procedures",
      "Acid Reflux, GERD & Chronic Ulcer Management",
      "Liver Health Clinic (Fatty Liver, Hepatitis, Cirrhosis)",
      "Irritable Bowel Syndrome (IBS) & Inflammatory Bowel Disease (IBD) Care"
    ]
  }
];

export const doctors = [
  {
    id: "dr-ravisuthan",
    name: "Dr. K. Ravisuthan",
    degrees: "MBBS, MHSc (Diabetology)",
    specialty: "General Medicine & Diabetology",
    role: "Founder & Primary Consultant Diabetologist",
    departmentId: "diabetology",
    experience: "28+ Years",
    bio: "Dr. Ravisuthan is the visionary Founder of KRS Hospital, widely respected for his 28+ years of dedicated service, ethical medical leadership, and pioneering diabetology care in Edappadi.",
    highlights: [
      "Founder & Managing Director of KRS Hospital (Est. 1996)",
      "Primary Consultant in Diabetology & Chronic Disease Care",
      "Focus on Evidence-Based Medical Protocols & Prevention",
      "Renowned for Compassionate Patient-Centered Care"
    ],
    photo: getImg("images/founder 2.jpeg"),
    timing: "9:00 AM - 2:00 PM, 6:00 PM - 9:00 PM",
    regNo: "57783"
  },
  {
    id: "dr-sharji-immam",
    name: "Dr. S. Mohamed Sharji Immam",
    degrees: "MBBS, MS (Ortho)",
    specialty: "Orthopedic Surgeon",
    role: "Consultant Orthopedic Surgeon",
    departmentId: "orthopedics",
    experience: "10+ Years",
    bio: "Consultant Orthopedic Surgeon specializing in bone and joint trauma, complex fracture fixations, and joint care.",
    highlights: [
      "Emergency Fracture Fixation & Trauma Care",
      "Joint Pain & Arthritis Management",
      "General Orthopedic Consultations"
    ],
    photo: null,
    timing: "2:00 PM - 9:00 PM",
    regNo: "82528"
  },
  {
    id: "dr-vivek",
    name: "Dr. Vivek Muthukrishnan",
    degrees: "MBBS, MEM",
    specialty: "General Medicine & Emergency",
    role: "Senior Emergency Physician",
    departmentId: "emergency-care",
    experience: "10+ Years",
    bio: "Emergency medicine and critical care specialist known for sharp diagnostic judgement and swift resuscitation in acute emergency moments.",
    highlights: [
      "24/7 Emergency & Critical Care Resuscitation",
      "Acute Trauma & Cardiac Stabilization",
      "ICU Triage & Emergency Medical Guidance"
    ],
    photo: null,
    timing: "4:00 PM - 10:00 PM",
    regNo: "113658"
  },
  {
    id: "dr-govindharaju",
    name: "Dr. Govindharaju",
    degrees: "MBBS, MD",
    specialty: "General Medicine",
    role: "Consultant Physician",
    departmentId: "gen-med",
    experience: "15+ Years",
    bio: "Senior general physician with extensive clinical diagnostic experience in outpatient consultation and complex inpatient medical care.",
    highlights: [
      "General Consultation & Diagnosis",
      "Inpatient Medical Management",
      "Chronic Disease Control Protocols"
    ],
    photo: null,
    timing: "6:00 PM - 9:00 PM",
    regNo: "120267"
  },
  {
    id: "dr-balasubramaniyam",
    name: "Dr. Balasubramaniyam",
    degrees: "MBBS, MS, MCh",
    specialty: "Neurosurgeon",
    role: "Consultant Neurosurgeon",
    departmentId: "neurology",
    experience: "15+ Years",
    bio: "Renowned neurology surgeon dedicated to providing expert surgical and non-surgical care for patients with brain, spine, and nervous system disorders.",
    highlights: [
      "Stroke Evaluation & Thrombolysis",
      "Epilepsy & Seizure Protocols",
      "Spine & Sciatica Image-Guided Injections"
    ],
    photo: null,
    timing: "Saturday: 10:00 AM - 2:00 PM",
    regNo: "71446"
  },
  {
    id: "dr-srija",
    name: "Dr. Srija",
    degrees: "MBBS, MS (OG)",
    specialty: "Obstetrics & Gynaecology",
    role: "Consultant Gynecologist",
    departmentId: "obgyn",
    experience: "11+ Years",
    bio: "Compassionate obstetrician and gynecologist dedicated to women's health. She specializes in comprehensive care for pregnancy and childbirth.",
    highlights: [
      "High-Risk Pregnancy & Delivery",
      "Laparoscopic Cyst & Fibroid Surgeries",
      "Fertility Evaluation & PCOS Management"
    ],
    photo: null,
    timing: "4:00 PM - 9:00 PM",
    regNo: "132876"
  },
  {
    id: "dr-vinoth-kumar",
    name: "Dr. Vinoth Kumar",
    degrees: "MBBS, MD",
    specialty: "Pulmonology",
    role: "Consultant Pulmonologist",
    departmentId: "pulmonology",
    experience: "10+ Years",
    bio: "Visionary pulmonologist dedicated to treating complex chest, asthma, COPD, and respiratory conditions.",
    highlights: [
      "Asthma & COPD Pulmonary Care",
      "Non-Invasive Oxygen & NIV Ventilation",
      "Allergy & Post-TB Lung Rehabilitation"
    ],
    photo: null,
    timing: "Wednesday: 2:00 PM - 6:00 PM",
    regNo: "137931"
  },
  {
    id: "dr-balasubramani",
    name: "Dr. Balasubramani",
    degrees: "MBBS, DA, MD",
    specialty: "Psychiatry",
    role: "Consultant Psychiatrist",
    departmentId: "psychiatry",
    experience: "16+ Years",
    bio: "Experienced psychiatrist specializing in clinical counseling, mental health assessment, anxiety, depression, and stress management therapies.",
    highlights: [
      "Psychiatry & Mental Health Consultation",
      "Stress, Anxiety & Depression Counseling",
      "De-Addiction & Behavioral Therapies"
    ],
    photo: null,
    timing: "Sunday: 10:00 AM - 2:00 PM",
    regNo: "58426"
  },
  {
    id: "dr-ramkumar",
    name: "Dr. Ramkumar",
    degrees: "MBBS, MS (General Surgery)",
    specialty: "General & Laparoscopic Surgeon",
    role: "Consultant General & Laparoscopic Surgeon",
    departmentId: "surgery",
    experience: "10+ Years",
    bio: "Experienced surgical specialist performing general surgeries and laparoscopic keyhole procedures for hernia, appendix, gallbladder, and thyroid care.",
    highlights: [
      "Laparoscopic Keyhole Surgery",
      "Hernia & Appendix Repair",
      "General Endocrine & Thyroid Resection"
    ],
    photo: null,
    timing: "On Call",
    regNo: "111631"
  },
  {
    id: "dr-saravanakumar",
    name: "Dr. Saravanakumar",
    degrees: "MBBS, MS (OG)",
    specialty: "Obstetrics & Gynaecology Surgeon",
    role: "Consultant OBGYN Surgeon",
    departmentId: "obgyn",
    experience: "12+ Years",
    bio: "Consultant OBGYN Surgeon specializing in pregnancy, high-risk birthing, and laparoscopic gynecologic procedures.",
    highlights: [
      "Laparoscopic Gynecologic Surgery",
      "High-Risk Obstetrics & Emergency Deliveries",
      "General Gynaecological Care"
    ],
    photo: null,
    timing: "On Call"
  },
  {
    id: "dr-rathish-rajendran",
    name: "Dr. Rathish Rajendran",
    degrees: "MBBS, MS, MCh",
    specialty: "Urology & Andrology",
    role: "Consultant Urologist & Andrologist",
    departmentId: "urology",
    experience: "11+ Years",
    bio: "Urology and Andrology consultant specializing in laser kidney stone removal, prostate treatment, and male health.",
    highlights: [
      "Laser Kidney Stone Removal (Lithotripsy)",
      "Prostate Management (BPH)",
      "Male Infertility & Andrological Care"
    ],
    photo: null,
    timing: "On Call",
    regNo: "88289"
  },
  {
    id: "dr-manivannan",
    name: "Dr. Manivannan",
    degrees: "MBBS, MD, DA",
    specialty: "Anaesthesiology",
    role: "Senior Anesthesiology Consultant",
    departmentId: "anesthesiology",
    experience: "15+ Years",
    bio: "Meticulous anesthesiologist delivering safe, seamless anesthesia support throughout pre-operative, intra-operative, and acute pain management phases.",
    highlights: [
      "General Anesthesia & Vital Monitoring",
      "Epidural & Spinal Regional Nerve Blocks",
      "Acute & Chronic Pain Management Support"
    ],
    photo: null,
    timing: "On Call",
    regNo: "94881"
  },
  {
    id: "dr-muthumani",
    name: "Dr. Muthumani",
    degrees: "MBBS, DNB",
    specialty: "Anaesthesiology",
    role: "Consultant Anesthetist",
    departmentId: "anesthesiology",
    experience: "12+ Years",
    bio: "Skilled anesthetist dedicated to patient safety and tailored anesthesia planning, delivering effective acute post-operative pain relief.",
    highlights: [
      "Post-Operative Acute Pain Relief",
      "Childbirth Epidural Pain Management",
      "Conscious Sedation for Procedures"
    ],
    photo: null,
    timing: "On Call",
    regNo: "131706"
  },
  {
    id: "dr-arunathiselvam",
    name: "Dr. Arunathiselvam",
    degrees: "MBBS, MS, MCh",
    specialty: "Surgical Oncology",
    role: "Chief Cancer Surgeon",
    departmentId: "oncology",
    experience: "13+ Years",
    bio: "Committed surgical oncologist focusing on evidence-based tumor resections, organ-preserving procedures, and multi-disciplinary care.",
    highlights: [
      "Robotic & Laparoscopic Tumor Surgery",
      "Breast & Soft Tissue Sarcoma Resection",
      "Gastrointestinal & Thoracic Oncology"
    ],
    photo: null,
    timing: "On Call"
  },
  {
    id: "dr-saranya",
    name: "Dr. Saranya",
    degrees: "MBBS, DCH",
    specialty: "Pediatrics",
    role: "Consultant Pediatrician",
    departmentId: "pediatrics",
    experience: "10+ Years",
    bio: "Experienced pediatrician nurturing the health of infants and children through NICU support, vaccinations, and growth tracking.",
    highlights: [
      "Newborn Screening & NICU Care",
      "Pediatric Infection & Asthma Control",
      "Childhood Immunizations & Growth Tracking"
    ],
    photo: null,
    timing: "6:00 PM - 9:00 PM",
    regNo: "111716"
  },
  {
    id: "dr-cibivishnu",
    name: "Dr. Cibivishnu Ilavarasu",
    degrees: "BDS, MDS",
    specialty: "Dental Medicine",
    role: "Chief Dental Specialist",
    departmentId: "dental",
    experience: "9+ Years",
    bio: "Dental specialist combining advanced clinical therapy with smile restoration, preventive dentistry, root canals, and maxillofacial surgery.",
    highlights: [
      "Painless Root Canal Treatments",
      "Cosmetic Fillings & Crowns",
      "Wisdom Tooth & Facial Trauma Extractions"
    ],
    photo: null,
    timing: "Wednesday: 10:00 AM - 2:00 PM",
    regNo: "27513"
  },
  {
    id: "dr-dhanushya",
    name: "Dr. Dhanushya",
    degrees: "BDS, MDS (Dental Therapist)",
    specialty: "Dental Medicine",
    role: "Consultant Dental Specialist",
    departmentId: "dental",
    experience: "5+ Years",
    bio: "Consultant dental therapist specializing in advanced oral therapies, preventive dental care, root canals, and aesthetic smile restoration.",
    highlights: [
      "Advanced Oral Therapy & Smile Care",
      "Aesthetic Fillings & Restorative Crowns",
      "Preventive & Painless Dental Treatments"
    ],
    photo: null,
    timing: "On Call"
  },
  {
    id: "dr-shreeram",
    name: "Dr. Shreeram",
    degrees: "MS (Ortho), DNB, MNAMS, RIAS",
    specialty: "Arthroscopic & Orthopedic Surgeon",
    role: "Senior Arthroscopy Surgeon",
    departmentId: "orthopedics",
    experience: "14+ Years",
    bio: "Renowned orthopedic and arthroscopic surgeon committed to helping patients reclaim active lifestyles using minimally invasive procedures.",
    highlights: [
      "Keyhole Arthroscopic Knee & Shoulder Repair",
      "Total Knee & Hip Replacements",
      "Sports Injury Management & Athlete Rehabilitation"
    ],
    photo: null,
    timing: "On Call"
  },
  {
    id: "dr-premkumar",
    name: "Dr. Premkumar",
    degrees: "MBBS, DM (Endocrinology)",
    specialty: "Endocrinology",
    role: "Consultant Endocrinologist",
    departmentId: "endocrinology",
    experience: "12+ Years",
    bio: "Specialist in managing complex hormonal, metabolic, diabetes, thyroid, adrenal, and osteoporosis conditions through evidence-based personalized therapies.",
    highlights: [
      "Thyroid & Adrenal Gland Therapies",
      "Metabolic Syndrome & Medical Obesity Care",
      "Bone Density Osteoporosis Prevention"
    ],
    photo: null,
    timing: "Sunday: 10:00 AM - 2:00 PM",
    regNo: "73299"
  },
  {
    id: "dr-sivasubramaniyam",
    name: "Dr. Sivasubramaniyam",
    degrees: "MBBS, MD, DM (Gastroenterology)",
    specialty: "Gastroenterology",
    role: "Consultant Gastroenterologist",
    departmentId: "gastroenterology",
    experience: "14+ Years",
    bio: "Gastroenterology specialist dedicated to diagnosing and treating digestive system, liver, gallbladder, pancreatic, and intestinal disorders.",
    highlights: [
      "Endoscopic Reflux & Ulcer Diagnosis",
      "Fatty Liver & Hepatitis Management",
      "Colonoscopy & ERCP Gallstone Procedures"
    ],
    photo: null,
    timing: "Sunday: 10:00 AM - 2:00 PM",
    regNo: "58106"
  },
  {
    id: "dr-siddhesh",
    name: "Dr. Siddhesh",
    degrees: "MBBS, RD",
    specialty: "Radiology",
    role: "Consultant Radiologist",
    departmentId: "radiology",
    experience: "11+ Years",
    bio: "Radiology and diagnostic imaging specialist, analyzing 128-slice CT scans, X-rays, 3D spiral angiographies, and ultrasound imaging for precise medical diagnoses.",
    highlights: [
      "24/7 CT Scan & Emergency Cross-Sectional Diagnostics",
      "Multi-Detector 3D Spiral Angiography",
      "Precision Diagnostic Ultrasound & Radiological Reports"
    ],
    photo: null,
    timing: "On Call",
    regNo: "95327"
  }
];

export const facilities = [
  {
    title: "24/7 Emergency Casualty & Trauma Care",
    desc: "Fully equipped rapid response trauma bay with on-duty emergency physicians, life support, and ambulance dispatch.",
    icon: "Ambulance",
    badge: "Always Open",
    image: getImg("images/emergency_ward_new.jpg")
  },
  {
    title: "Dedicated Intensive Care Units (ICU, NICU, HDU)",
    desc: "State-of-the-art multi-bed ICUs with continuous multi-para monitoring, ventilator support, and 24/7 critical care specialists.",
    icon: "HeartPulse",
    badge: "Critical Care",
    image: getImg("images/emergency_icu_beds.jpg")
  },
  {
    title: "Advanced Operation Theatres",
    desc: "Sterile laminar airflow surgical suites equipped for laparoscopic, arthroscopic, neuro, and orthopedic procedures.",
    icon: "Scissors",
    badge: "Laminar Flow",
    image: getImg("images/ot_main.jpeg")
  },
  {
    title: "24/7 Modular Lab",
    desc: "In-house diagnostic laboratory operating round the clock for blood work, hormone panels, and emergency testing.",
    icon: "FlaskConical",
    badge: "Lab Helpline: 99444 49559",
    image: getImg("images/modular_lab_simple.webp")
  },
  {
    title: "24/7 Pharmacy & Medication Services",
    desc: "Fully stocked in-house pharmacy providing genuine prescription medicines, critical care drugs, and surgical supplies round the clock.",
    icon: "Pill",
    badge: "24/7 In-House",
    image: getImg("images/pharmacy.jpg")
  },
  {
    title: "Patient Lounge & Inpatient Suites",
    desc: "Comfortable air-conditioned private rooms, semi-private wards, and visitor seating with 24/7 nursing assistance.",
    icon: "Bed",
    badge: "Air-Conditioned",
    image: getImg("images/reception_lounge_new.jpg")
  },
  {
    title: "Nursing Station & Outpatient Counters",
    desc: "Friendly reception desk for quick outpatient registration and hospital admissions.",
    icon: "Activity",
    badge: "OPD Guidance",
    image: getImg("images/nursing_station_new.jpg")
  },
  {
    title: "Digital Records & Smart Healthcare",
    desc: "Instant digital health record tracking, seamless discharge summaries, and fast billing transparency.",
    icon: "Cpu",
    badge: "Smart Tech",
    image: getImg("images/reception_desk.jpeg")
  },
  {
    title: "24/7 High-Speed CT Scan Unit",
    desc: "128-slice precision CT scanner operating round the clock for trauma, brain, chest, and emergency abdominal diagnosis.",
    icon: "Scan",
    badge: "24/7 Active",
    image: getImg("images/ct_scan_simple.jpg")
  },

  {
    title: "Modern Dental & Maxillofacial Suite",
    desc: "Equipped with digital oral X-ray, painless root canal treatment technology, and cosmetic restoration facilities.",
    icon: "Smile",
    badge: "Specialized Suite",
    image: getImg("images/dental_care.png")
  }
];

export const hospitalGallery = [
  {
    title: "KRS Main Hospital Building (Front Entrance)",
    category: "Campus & Building",
    image: getImg("images/building.jpeg"),
    desc: "Multi-storey modern hospital building located on Salem Main Road, Edappadi."
  },

  {
    title: "KRS Hospital Exterior Campus View",
    category: "Campus & Building",
    image: getImg("images/building_wide.jpeg"),
    desc: "Wide exterior view of KRS Multispeciality Hospital building complex in Edappadi."
  },
  {
    title: "KRS Hospital Lobby Reception Area",
    category: "Campus & Building",
    image: getImg("images/hospital_lobby.jpeg"),
    desc: "Spacious lobby and reception area inside KRS Multispeciality Hospital."
  },
  {
    title: "128-Slice CT Scan Suite",
    category: "Diagnostics & Scans",
    image: getImg("images/ct_scan_simple.jpg"),
    desc: "State-of-the-art 128-slice CT scanner for rapid 24/7 emergency & diagnostic imaging."
  },
  {
    title: "24/7 Modular Laboratory",
    category: "Diagnostics & Scans",
    image: getImg("images/modular_lab_simple.webp"),
    desc: "Automated blood chemistry analyzers, clinical biochemistry, and 24/7 emergency lab diagnostics."
  },

  {
    title: "Modern Dental Care Operatory",
    category: "Dental Care",
    image: getImg("images/dental_care.png"),
    desc: "Equipped dental suite for painless root canals, crowns, and oral maxillofacial surgeries."
  },
  {
    title: "Modular Operation Theatre",
    category: "Surgical Suite",
    image: getImg("images/ot_main.jpeg"),
    desc: "High-tech modular OT equipped with advanced surgical lights and anesthesia workstations."
  },
  {
    title: "Intensive Care Unit (ICU)",
    category: "Critical Care",
    image: getImg("images/icu_beds.jpeg"),
    desc: "Multi-bed ICU suite with continuous cardiac monitors and central oxygen pipelines."
  },
  {
    title: "Advanced Ventilator Console",
    category: "Critical Care",
    image: getImg("images/icu_ventilator.jpeg"),
    desc: "Life support and mechanical ventilation equipment for emergency respiratory care."
  },
  {
    title: "24/7 In-House Pharmacy & Medical Store",
    category: "Pharmacy",
    image: getImg("images/pharmacy_counter.jpg"),
    desc: "Fully stocked pharmacy counter for quick prescription dispensing and emergency medicines."
  },
  {
    title: "Patient Lounge & Waiting Hall",
    category: "Facilities",
    image: getImg("images/reception_lounge.jpeg"),
    desc: "Comfortable marble-floored waiting lounge for patient families and visitors."
  },
  {
    title: "Front Desk & Registration",
    category: "Facilities",
    image: getImg("images/reception_desk.jpeg"),
    desc: "Friendly reception desk for quick outpatient registration and hospital admissions."
  },
  {
    title: "New Emergency Ward & Trauma Care",
    category: "Trauma Unit",
    image: getImg("images/emergency_ward_new.jpg"),
    desc: "Direct emergency casualty ward and triage facility."
  },
  {
    title: "24/7 Emergency ICU Beds",
    category: "Trauma Unit",
    image: getImg("images/emergency_icu_beds.jpg"),
    desc: "Continuous multi-para monitoring and critical care beds."
  },
  {
    title: "24/7 In-House Pharmacy & Medical Store",
    category: "Pharmacy",
    image: getImg("images/pharmacy.jpg"),
    desc: "Fully stocked medical store counter for genuine prescription medicines & surgical supplies."
  },
  {
    title: "Patient Reception & Waiting Lounge",
    category: "Campus & Building",
    image: getImg("images/reception_lounge_new.jpg"),
    desc: "Spacious reception lounge and outpatient waiting seating."
  },
  {
    title: "Nursing Counter & OPD Registration",
    category: "Campus & Building",
    image: getImg("images/nursing_station_new.jpg"),
    desc: "OPD registration desk and nursing assistance."
  },
  {
    title: "Emergency Stretcher Ramp Entrance",
    category: "Trauma Unit",
    image: getImg("images/emergency_ramp_new.jpg"),
    desc: "Direct stretcher and wheelchair entrance for emergency casualty admissions."
  }
];

export const whyChooseUs = [
  {
    title: "15+ Departments Under One Roof",
    desc: "Comprehensive multispecialty network ensuring you never have to travel far for specialized healthcare.",
    icon: "Building2"
  },
  {
    title: "Nearly 3 Decades of Trusted Excellence",
    desc: "Founded in 1996 by Dr. K. Ravisuthan, serving generations of families in Edappadi with unwavering integrity.",
    icon: "Award"
  },
  {
    title: "World-Class Care at Affordable Costs",
    desc: "High-grade medical treatment without compromising on standards or burdening families financially.",
    icon: "BadgePercent"
  },
  {
    title: "Patient-First Healing Environment",
    desc: "Transparent communication, empathetic doctors, and clear guidance at every step of your recovery.",
    icon: "Heart"
  }
];

export const faqs = [
  {
    question: "What are the contact numbers for KRS Hospital Edappadi?",
    answer: "Our Main Landline is 04283 222266, Hospital Mobile is 6380898608, 24/7 Emergency Hotline is +91 94432 55555, and 24/7 Diagnostic Lab Helpline is 9944449559."
  },
  {
    question: "How can I contact the 24/7 Diagnostic Lab directly?",
    answer: "You can reach our 24/7 Lab directly at +91 99444 49559 for lab report status, home collection inquiries, and pathology test details."
  },
  {
    question: "Can I book an appointment with a specialist doctor online?",
    answer: "Yes! You can use our interactive booking tool on this website to select your department, choose your specialist doctor, pick a date/time slot, and receive instant confirmation."
  },
  {
    question: "What specialties are available at KRS Hospital?",
    answer: "KRS Hospital provides 15+ specialties including General Medicine, Diabetology, Orthopedics & Arthroscopy, Neurology, Obstetrics & Gynaecology, Pulmonology, Dermatology, General/Laparoscopic Surgery, Urology, Surgical Oncology, Pediatrics, Dental, Endocrinology, and Gastroenterology."
  },
  {
    question: "What is the official email address and Facebook page of KRS Hospital?",
    answer: "Our official email address is krsmultispecialityh@gmail.com and our Facebook page is https://www.facebook.com/profile.php?id=61583509866582."
  }
];
