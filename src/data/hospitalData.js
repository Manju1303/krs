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
    getImg("images/building_front.jpeg"),
    getImg("images/building_wide.jpeg"),
    getImg("images/hospital_lobby.jpeg"),
    getImg("images/reception_lounge.jpeg")
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
    image: getImg("images/ct_scan.png"),
    services: [
      "24/7 Emergency CT Brain & Head Injury Evaluation",
      "High-Speed High-Resolution Whole Body & Abdominal CT",
      "3D CT Angiography & Vascular Scan",
      "Chest CT Scan for Lung Infection & Pulmonary Embolism",
      "Spine & Musculoskeletal CT Scans with Instant Digital Reports"
    ]
  },
  {
    id: "scan-radiology",
    name: "Ultrasound & Diagnostic Scan",
    icon: "CircleDot",
    desc: "4D obstetric pregnancy scanning, abdominal & pelvic Doppler scans, thyroid, musculoskeletal & soft tissue ultrasound diagnostics.",
    image: getImg("images/ultrasound_scan.png"),
    services: [
      "4D Fetal Anomaly & Pregnancy Growth Monitoring Scans",
      "Abdomen & Pelvis High-Resolution Ultrasound Diagnostics",
      "Color Doppler Vascular Flow & Arterial/Venous Study",
      "Thyroid, Neck, Breast & Soft Tissue Ultrasound",
      "Fast Emergency Bedside Scan (FAST) for Trauma Patients"
    ]
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    icon: "Scale",
    desc: "Hormonal evaluation for thyroid, pituitary, adrenal, metabolic syndrome, and osteoporosis.",
    image: getImg("images/nursing_station.jpeg"),
    services: [
      "Thyroid Disorder Hormone Testing & Management",
      "Complex Hormonal Imbalance Assessment",
      "Medical Weight Loss & Metabolic Syndrome Strategy",
      "Bone Density (DEXA) Osteoporosis Prevention",
      "Pituitary & Adrenal Gland Diagnostic Management"
    ]
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: "CircleDot",
    desc: "Endoscopy, liver disease management, ERCP gallstone care, and colonoscopy screenings.",
    image: getImg("images/ot_main.jpeg"),
    services: [
      "Upper GI Endoscopy for Acidity, Reflux & Ulcers",
      "Liver Disease Screening (Fatty Liver, Hepatitis, Cirrhosis)",
      "Gallstone & Pancreatitis Diagnostic ERCP",
      "Colonoscopy Screening for IBS, Polyps & Colitis",
      "Digestive Intolerance & Gut Health Counseling"
    ]
  }
];

export const doctors = [
  {
    id: "dr-ravisuthan",
    name: "Dr. K. Ravisuthan",
    degrees: "MBBS., MHSC (Diabetology)",
    specialty: "General Medicine | Diabetologist",
    role: "Founder & Chief Physician",
    departmentId: "gen-med",
    experience: "28+ Years",
    bio: "Dr. Ravisuthan is the visionary Founder of KRS Hospital, widely respected for his unwavering commitment to ethical medical practice, clinical excellence, and patient-first care. With extensive years of hands-on clinical experience, he has treated thousands of patients across routine and complex medical conditions.",
    highlights: [
      "Founder of KRS Hospital (Est. 1996)",
      "Specialist in Diabetology & Chronic Diseases",
      "Focus on Evidence-Based Medical Protocols",
      "Renowned for Patient-Centered Empathy"
    ]
  },
  {
    id: "dr-vivek",
    name: "Dr. Vivek Muthukrishnan",
    degrees: "MBBS., MCH",
    specialty: "General Medicine | Emergency Physician",
    role: "Senior Consultant",
    departmentId: "gen-med",
    experience: "10+ Years",
    bio: "Dr. Vivek Muthukrishnan is a new-age General Medicine and Emergency Physician known for his sharp clinical judgement and calm presence in critical moments. He blends medical science with swift, solution-focused emergency stabilization.",
    highlights: [
      "Emergency Medicine & Acute Trauma Care",
      "24/7 Critical Patient Stabilization",
      "Advanced Diagnostic & Lifestyle Guidance"
    ]
  },
  {
    id: "dr-sharji-imman",
    name: "Dr. S. Mohamed Sharji Imman",
    degrees: "MBBS., MS (Ortho)",
    specialty: "Orthopedic Surgeon",
    role: "Consultant Orthopedist",
    departmentId: "orthopedics",
    experience: "12+ Years",
    bio: "Highly competent Orthopedic Surgeon dedicated to providing comprehensive care for injuries and disorders of the bones, joints, spine, and musculoskeletal system. Known for precision surgical fixation and long-term joint rehabilitation.",
    highlights: [
      "Trauma & Complex Fracture Fixations",
      "Arthritic Joint Management",
      "Spine & Neck Pain Stabilization"
    ]
  },
  {
    id: "dr-shreeram",
    name: "Dr. Shreeram",
    degrees: "MBBS., MS (Ortho)., DNO., MNAMS., RIAS",
    specialty: "Arthroscopic & Orthopaedics Surgeon",
    role: "Senior Arthroscopy Surgeon",
    departmentId: "orthopedics",
    experience: "14+ Years",
    bio: "Renowned orthopedic and arthroscopic surgeon committed to helping patients reclaim their active lifestyles using minimally invasive keyhole procedures for knees, shoulders, hips, and joint replacements.",
    highlights: [
      "Keyhole Arthroscopic Knee & Shoulder Repair",
      "Total Knee & Hip Replacements",
      "Sports Injury Management & Athlete Rehabilitation"
    ]
  },
  {
    id: "dr-balasubramaniyam",
    name: "Dr. Balasubramaniyam",
    degrees: "MBBS., MS., MCH",
    specialty: "Neurology Surgeon",
    role: "Consultant Neurosurgeon",
    departmentId: "neurology",
    experience: "15+ Years",
    bio: "Renowned neurology surgeon dedicated to providing expert surgical and non-surgical care for patients with brain, spine, and nervous system disorders using high-precision techniques.",
    highlights: [
      "Stroke Evaluation & Thrombolysis",
      "Epilepsy & Seizure Protocols",
      "Spine & Sciatica Image-Guided Injections"
    ]
  },
  {
    id: "dr-srija",
    name: "Dr. Srija",
    degrees: "MBBS., MS (OG)",
    specialty: "Obstetrician & Gynaecologist",
    role: "Consultant Gynecologist",
    departmentId: "obgyn",
    experience: "11+ Years",
    bio: "Compassionate obstetrician and gynecologist dedicated to women's health. She specializes in comprehensive care for pregnancy, childbirth, and minimally invasive gynaecologic laparoscopy.",
    highlights: [
      "High-Risk Pregnancy & Delivery",
      "Laparoscopic Cyst & Fibroid Surgeries",
      "Fertility Evaluation & PCOS Management"
    ]
  },
  {
    id: "dr-saravanakumar",
    name: "Dr. Saravanakumar",
    degrees: "MBBS., MS (OG)",
    specialty: "Obstetrics Surgeon",
    role: "Senior Obstetric Surgeon",
    departmentId: "obgyn",
    experience: "13+ Years",
    bio: "Expert obstetric surgeon with extensive experience in managing complex, high-risk pregnancies, emergency cesarean deliveries, and operative post-partum interventions.",
    highlights: [
      "High-Risk C-Section & Fetal Distress Response",
      "Ectopic Pregnancy Laparoscopic Repair",
      "Post-Partum Surgical Care & Cervical Support"
    ]
  },
  {
    id: "dr-vinoth-kumar",
    name: "Dr. Vinoth Kumar",
    degrees: "MBBS., MD",
    specialty: "Pulmonologist",
    role: "Consultant Pulmonologist",
    departmentId: "pulmonology",
    experience: "10+ Years",
    bio: "Visionary pulmonologist dedicated to treating complex chest, asthma, COPD, and lung conditions using cutting-edge respiratory diagnostic tests and early intervention.",
    highlights: [
      "Asthma & COPD Pulmonary Care",
      "Non-Invasive Oxygen & NIV Ventilation",
      "Allergy & Post-TB Lung Rehabilitation"
    ]
  },
  {
    id: "dr-shunmathi-selvam",
    name: "Dr. Shunmathi Selvam",
    degrees: "MBBS., MD., DVL (Dermatology)",
    specialty: "Dermatologist & Cosmetologist",
    role: "Consultant Dermatologist",
    departmentId: "dermatology",
    experience: "9+ Years",
    bio: "Experienced dermatologist providing clinical care for skin, hair, and nail conditions. Specializes in medical dermatology, cosmetic anti-aging, PRP hair therapy, and minor skin surgeries.",
    highlights: [
      "Cosmetic Chemical Peels & Anti-Aging",
      "Hair PRP & Scalp Restoration",
      "Mole, Cyst & Skin Lesion Excisions"
    ]
  },
  {
    id: "dr-ramkumar",
    name: "Dr. Ramkumar",
    degrees: "MBBS., MS (General Surgery)",
    specialty: "General & Laparoscopic Surgeon",
    role: "Chief Laparoscopic Surgeon",
    departmentId: "surgery",
    experience: "14+ Years",
    bio: "Highly experienced general and laparoscopic surgeon specializing in minimally invasive procedures for quick recovery, minimal scarring, and enhanced surgical safety.",
    highlights: [
      "Laparoscopic Hernia & Appendix Removal",
      "Thyroid & Endocrine Surgery",
      "Breast Lump Excision & Reconstructive Care"
    ]
  },
  {
    id: "dr-rathish-rajendran",
    name: "Dr. Rathish Rajendran",
    degrees: "MBBS., MS., MCH",
    specialty: "Urologist | Andrologist",
    role: "Consultant Urologist",
    departmentId: "urology",
    experience: "12+ Years",
    bio: "Combines advanced urological expertise with a precision-focused approach to address the full spectrum of urinary stones, prostate issues, and male reproductive health.",
    highlights: [
      "Laser Kidney Stone Lithotripsy",
      "Prostate & Bladder Care",
      "Male Fertility & Microsurgical Reconstructions"
    ]
  },
  {
    id: "dr-praveen-sundhar",
    name: "Dr. Praveen Sundhar",
    degrees: "MBBS., MS., MCH",
    specialty: "Urologist",
    role: "Consultant Urologist",
    departmentId: "urology",
    experience: "11+ Years",
    bio: "Delivers accurate diagnosis, effective treatment, and minimally invasive options for kidney, bladder, and urinary tract disorders in both adult and pediatric cases.",
    highlights: [
      "Minimal Access Urological Procedures",
      "Pediatric Congenital Urinary Care",
      "Endoscopic Prostate Resection"
    ]
  },
  {
    id: "dr-manivannan",
    name: "Dr. Manivannan",
    degrees: "MBBS., MD., DA",
    specialty: "Anesthesiologist",
    role: "Senior Anesthesiology Consultant",
    departmentId: "gen-med",
    experience: "15+ Years",
    bio: "Meticulous anesthesiologist delivering safe, seamless anesthesia support throughout pre-operative, intra-operative, and critical post-operative surgical phases.",
    highlights: [
      "General Anesthesia & Vital Monitoring",
      "Epidural & Spinal Regional Nerve Blocks",
      "ICU Critical Care Sedation Support"
    ]
  },
  {
    id: "dr-muthumani",
    name: "Dr. Muthumani",
    degrees: "MBBS., DNB",
    specialty: "Anesthesiologist",
    role: "Consultant Anesthetist",
    departmentId: "gen-med",
    experience: "12+ Years",
    bio: "Skilled anesthetist dedicated to patient safety and tailored anesthesia planning, delivering effective acute post-operative pain relief and procedural sedation.",
    highlights: [
      "Post-Operative Acute Pain Relief",
      "Childbirth Epidural Pain Management",
      "Conscious Sedation for Endoscopy"
    ]
  },
  {
    id: "dr-arunathiselvam",
    name: "Dr. Arunathiselvam",
    degrees: "MBBS., MS., MCH",
    specialty: "Surgical Oncologist",
    role: "Chief Cancer Surgeon",
    departmentId: "oncology",
    experience: "13+ Years",
    bio: "Committed surgical oncologist with advanced MCh training in cancer surgery. Focuses on evidence-based tumor resections, organ-preserving procedures, and multi-disciplinary care.",
    highlights: [
      "Robotic & Laparoscopic Tumor Surgery",
      "Breast & Soft Tissue Sarcoma Resection",
      "Gastrointestinal & Thoracic Oncology"
    ]
  },
  {
    id: "dr-bharathi",
    name: "Dr. Bharathi",
    degrees: "MBBS., DCH",
    specialty: "Pediatrician",
    role: "Consultant Pediatrician",
    departmentId: "pediatrics",
    experience: "10+ Years",
    bio: "Warm and empathetic pediatrician nurturing the health of infants, children, and teens through vaccinations, NICU support, developmental checks, and emergency pediatric care.",
    highlights: [
      "Newborn Screening & NICU Care",
      "Pediatric Infection & Asthma Control",
      "Childhood Immunizations & Growth Tracking"
    ]
  },
  {
    id: "dr-cibivishnu",
    name: "Dr. Cibivishnu Ilavarasu",
    degrees: "BDS., MDS",
    specialty: "Dental Therapist & Surgeon",
    role: "Chief Dental Specialist",
    departmentId: "dental",
    experience: "9+ Years",
    bio: "Forward-thinking dental specialist combining advanced clinical therapy with smile restoration, preventive dentistry, root canals, and maxillofacial surgery.",
    highlights: [
      "Painless Root Canal Treatments",
      "Cosmetic Fillings & Crowns",
      "Wisdom Tooth & Trauma Extractions"
    ]
  },
  {
    id: "dr-premkumar",
    name: "Dr. Premkumar",
    degrees: "MBBS., MD., DM",
    specialty: "Endocrinologist",
    role: "Consultant Endocrinologist",
    departmentId: "endocrinology",
    experience: "12+ Years",
    bio: "DM Specialist in managing complex hormonal, metabolic, diabetes, thyroid, adrenal, and osteoporosis conditions through evidence-based personalized therapies.",
    highlights: [
      "Thyroid & Adrenal Gland Therapies",
      "Metabolic Syndrome & Medical Obesity Care",
      "Bone Density Osteoporosis Prevention"
    ]
  },
  {
    id: "dr-sivasubramaniyam",
    name: "Dr. Sivasubramaniyam",
    degrees: "MBBS., MD., DM",
    specialty: "Gastroenterologist",
    role: "Consultant Gastroenterologist",
    departmentId: "gastroenterology",
    experience: "14+ Years",
    bio: "DM Gastroenterology specialist dedicated to diagnosing and treating digestive system, liver, gallbladder, pancreatic, and intestinal disorders with endoscopic precision.",
    highlights: [
      "Endoscopic Reflux & Ulcer Diagnosis",
      "Fatty Liver & Hepatitis Management",
      "Colonoscopy & ERCP Gallstone Procedures"
    ]
  }
];

export const facilities = [
  {
    title: "24/7 Emergency & Trauma Unit",
    desc: "Fully equipped rapid response trauma bay with on-duty emergency physicians, life support, and ambulance dispatch.",
    icon: "Ambulance",
    badge: "24/7 Active",
    image: getImg("images/emergency_ramp.jpeg")
  },
  {
    title: "Dedicated Intensive Care Units (ICU, NICU, HDU)",
    desc: "State-of-the-art multi-bed ICUs with continuous multi-para monitoring, ventilator support, and 24/7 critical care specialists.",
    icon: "HeartPulse",
    badge: "Critical Care",
    image: getImg("images/icu_beds.jpeg")
  },
  {
    title: "Advanced Operation Theatres",
    desc: "Sterile laminar airflow surgical suites equipped for laparoscopic, arthroscopic, neuro, and orthopedic procedures.",
    icon: "Scissors",
    badge: "Laminar Flow",
    image: getImg("images/ot_main.jpeg")
  },
  {
    title: "24/7 Diagnostic Pathology Lab",
    desc: "In-house diagnostic laboratory operating round the clock for blood work, hormone panels, and emergency testing.",
    icon: "FlaskConical",
    badge: "Lab Helpline: 99444 49559",
    image: getImg("images/nursing_station.jpeg")
  },
  {
    title: "24/7 Pharmacy & Medication Services",
    desc: "Comprehensive hospital pharmacy stocking genuine lifesaving drugs, surgical supplies, and patient prescription support.",
    icon: "Pill",
    badge: "Always Open",
    image: getImg("images/pharmacy.jpeg")
  },
  {
    title: "Patient Lounge & Inpatient Suites",
    desc: "Spacious reception lounge, private AC suites, semi-private rooms, and deluxe general wards for comfort and safety.",
    icon: "Bed",
    badge: "Patient First",
    image: getImg("images/reception_lounge.jpeg")
  },
  {
    title: "Nursing Station & Outpatient Counters",
    desc: "Dedicated OPD counters and round-the-clock nursing care stations for quick registration and symptom evaluation.",
    icon: "Activity",
    badge: "High Precision",
    image: getImg("images/nursing_station.jpeg")
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
    image: getImg("images/ct_scan.png")
  },
  {
    title: "4D Ultrasound & Color Doppler Scan",
    desc: "Advanced diagnostic ultrasound for pregnancy fetal monitoring, abdominal evaluation, and vascular Doppler blood flow analysis.",
    icon: "CircleDot",
    badge: "HD Diagnostic",
    image: getImg("images/ultrasound_scan.png")
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
    title: "KRS Hospital Front Entrance",
    category: "Campus & Building",
    image: getImg("images/building_front.jpeg"),
    desc: "Front entrance view of KRS Multispeciality Hospital and Trauma Care Centre."
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
    image: getImg("images/ct_scan.png"),
    desc: "State-of-the-art 128-slice CT scanner for rapid 24/7 emergency & diagnostic imaging."
  },
  {
    title: "4D Ultrasound & Diagnostic Scan Room",
    category: "Diagnostics & Scans",
    image: getImg("images/ultrasound_scan.png"),
    desc: "High-precision 4D fetal ultrasound scan machine & color Doppler diagnostic suite."
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
    title: "24/7 In-House Pharmacy",
    category: "Pharmacy",
    image: getImg("images/pharmacy.jpeg"),
    desc: "Fully stocked 24-hour hospital pharmacy providing genuine medicines & surgical supplies."
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
    title: "Emergency & Stretcher Ramp",
    category: "Trauma Unit",
    image: getImg("images/emergency_ramp.jpeg"),
    desc: "Direct stretcher and wheelchair entrance for 24/7 emergency casualty admissions."
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
