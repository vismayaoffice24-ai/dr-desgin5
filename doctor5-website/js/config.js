/**
 * Dr. Aishwarya Lal - Consultant Nephrologist & Kidney Specialist
 * Shared Configuration & Comprehensive Medical Information
 */

const CONFIG = {
  siteUrl: "",

  doctor: {
    name: "Dr. Aishwarya Lal",
    formalTitle: "Dr. Aishwarya Lal, MBBS, MD, DM (Nephrology)",
    designation: "Consultant Nephrologist & Kidney Specialist",
    shortBio: "Dr. Aishwarya Lal is a senior consultant nephrologist with over 15 years of dedicated experience in preserving kidney function, managing dialysis, treating kidney stones, and providing post-transplant follow-up care with compassionate, plain-language patient counseling.",
    philosophy: "Protecting your kidneys, one clear step at a time. Kidney care, explained clearly.",
    quote: "She explained my reports patiently and I finally understood my kidney condition.",
    qualifications: "MBBS, MD (General Medicine), DM (Nephrology)",
    experience: "15+ years",
    experienceYears: 15,
    patientsCount: "10,000+",
    memberships: "ISN (International Society of Nephrology), ISNSC (Indian Society of Nephrology - Southern Chapter), ASN (American Society of Nephrology)",
    membershipsList: ["ISN - International Society of Nephrology", "ISNSC - Indian Society of Nephrology Southern Chapter", "ASN - American Society of Nephrology"],
    awards: [
      { title: "Excellence in Nephrology Practice", org: "Clinical Nephrology Excellence Forum", desc: "Recognized for exemplary patient-centric renal care and preventive kidney health advocacy." },
      { title: "Clinical Contribution Award", org: "Society of Renal Physicians", desc: "Honored for outstanding contributions to community screening and early diabetic kidney disease intervention." },
      { title: "Distinguished Medical Service Citation", org: "Regional Medical Conclave", desc: "Commended for dedicated chronic dialysis management and donor-recipient transplant guidance." }
    ],
    education: [
      { degree: "DM (Nephrology)", institution: "Apex Medical Institute of Nephrology & Transplantation", desc: "Super-specialty residency in clinical nephrology, hemodialysis, peritoneal dialysis, and renal transplantation." },
      { degree: "MD (General Medicine)", institution: "Government Medical College", desc: "Postgraduate residency in internal medicine, critical care, and systemic disease management." },
      { degree: "MBBS", institution: "Government Medical College", desc: "Undergraduate medical training with honors in internal medicine and physiology." }
    ],
    clinic: {
      name: "Dr. Aishwarya Lal Kidney Care Clinic",
      suite: "Advanced Nephrology & Dialysis Care Suite",
      address: "Metro Healthcare Hub, MG Road, Ernakulam, Kochi, Kerala 682016, India",
      city: "Kochi",
      state: "Kerala",
      pincode: "682016",
      phone: "+91 97458 66333",
      tel: "+919745866333",
      whatsapp: "+91 97458 66333",
      wa: "919745866333",
      email: "vismaya@stackertec.com",
      timings: "Mon to Sat: 9:30 AM – 8:30 PM | Sun: 9:00 AM – 1:00 PM",
      timingsWeekdays: "Monday to Saturday: 9:30 AM – 8:30 PM",
      timingsSunday: "Sunday: 9:00 AM – 1:00 PM",
      mapLink: "https://maps.google.com/?q=MG+Road+Kochi+Kerala",
      mapEmbedUrl: "https://www.google.com/maps?q=MG+Road+Kochi+Kerala&output=embed"
    }
  },

  services: [
    {
      id: "kidney-disease-management",
      slug: "service-kidney-disease-management.html",
      title: "Kidney Disease Clinic",
      shortTitle: "CKD Clinic",
      icon: "🩺",
      tagline: "Comprehensive staging, slowdown therapies, and lifestyle planning for chronic kidney disease.",
      summary: "Early diagnosis, accurate staging (Stages 1 through 5), and multi-target therapies designed to delay progression, control proteinuria, and maintain overall wellness.",
      points: [
        "Accurate GFR staging and periodic renal panel tracking",
        "Targeted blood pressure and urine protein reduction",
        "Personalized low-sodium and renal-friendly diet counseling",
        "Safe medication reconciliation avoiding nephrotoxic drugs"
      ]
    },
    {
      id: "dialysis-care",
      slug: "service-dialysis-care.html",
      title: "Dialysis Care & Planning",
      shortTitle: "Dialysis Care",
      icon: "💧",
      tagline: "Expert guidance for hemodialysis, peritoneal dialysis, vascular access, and quality-of-life support.",
      summary: "Holistic dialysis management including timely AV fistula planning, home peritoneal dialysis training, adequacy assessments, and anemia management.",
      points: [
        "Vascular access planning (AV Fistula & Graft preservation)",
        "Hemodialysis prescription and adequacy clearance audits",
        "Continuous Ambulatory Peritoneal Dialysis (CAPD) guidance",
        "Management of dialysis-related bone and mineral disorders"
      ]
    },
    {
      id: "kidney-stones",
      slug: "service-kidney-stones.html",
      title: "Kidney Stone Management",
      shortTitle: "Kidney Stones",
      icon: "💎",
      tagline: "Metabolic evaluation, recurrence prevention, and collaborative urological care.",
      summary: "In-depth 24-hour urine metabolic evaluation, dietary stone risk analysis, medical expulsive therapy, and coordinated care to prevent future painful stone episodes.",
      points: [
        "Comprehensive 24-hour urine metabolic profile evaluation",
        "Tailored hydration and dietary oxalate/uric acid guidelines",
        "Medical dissolution protocols for select stone varieties",
        "Emergency pain management and urology collaboration"
      ]
    },
    {
      id: "transplant-follow-up",
      slug: "service-transplant-follow-up.html",
      title: "Transplant Follow-Up Care",
      shortTitle: "Transplant Care",
      icon: "🌱",
      tagline: "Pre-transplant recipient evaluation and lifelong post-transplant kidney protection.",
      summary: "Careful monitoring of immunosuppressive drug levels, early detection of graft rejection, infection surveillance, and lifelong graft preservation.",
      points: [
        "Pre-transplant medical clearance & donor-recipient workup",
        "Immunosuppressant drug level titration (Tacrolimus/Cyclosporine)",
        "Early non-invasive surveillance for graft rejection",
        "Post-transplant diabetes, cardiovascular and infection vigilance"
      ]
    },
    {
      id: "diabetic-kidney-care",
      slug: "service-diabetic-kidney-care.html",
      title: "Diabetic Kidney Care",
      shortTitle: "Diabetic Kidneys",
      icon: "🩸",
      tagline: "Proactive screening and renal protection for patients living with diabetes.",
      summary: "Screening for microalbuminuria, modern renal-protective glucose management (SGLT2 inhibitors, GLP-1 RAs), and blood pressure control to halt diabetic nephropathy.",
      points: [
        "Annual urine albumin-to-creatinine ratio (ACR) screening",
        "Modern kidney-protective antidiabetic therapies",
        "Strict glycemic and lipid targets for microvascular safety",
        "Prevention of contrast-induced acute kidney injuries"
      ]
    },
    {
      id: "hypertension-clinic",
      slug: "service-hypertension-clinic.html",
      title: "Hypertension & Kidney Clinic",
      shortTitle: "Hypertension Clinic",
      icon: "❤️",
      tagline: "Specialized care for kidney-related and difficult-to-control high blood pressure.",
      summary: "Evaluating secondary causes of hypertension like renal artery stenosis, managing resistant blood pressure, and preventing hypertensive kidney damage.",
      points: [
        "Screening for secondary and renovascular hypertension",
        "Multi-drug optimization for resistant blood pressure",
        "24-hour ambulatory blood pressure monitoring (ABPM) review",
        "Salt-sensitivity assessment and lifestyle coaching"
      ]
    },
    {
      id: "proteinuria-urine-abnormalities",
      slug: "service-proteinuria-urine-abnormalities.html",
      title: "Urine & Protein Leak Evaluation",
      shortTitle: "Proteinuria & Urine",
      icon: "🧪",
      tagline: "Thorough investigation of foamy urine, blood in urine, and nephrotic syndrome.",
      summary: "Accurate quantification of urinary protein, hematuria microscopic analysis, autoimmune glomerulonephritis evaluation, and ultrasound-guided renal biopsy counseling.",
      points: [
        "Differential diagnosis of microscopic & macroscopic hematuria",
        "Nephrotic syndrome workup (edema, hypoalbuminemia)",
        "Glomerulonephritis assessment & immunosuppressive planning",
        "Pre- and post-procedure counseling for kidney biopsies"
      ]
    },
    {
      id: "preventive-kidney-evaluation",
      slug: "service-preventive-kidney-evaluation.html",
      title: "Preventive Kidney Health & Teleconsultation",
      shortTitle: "Preventive & Online",
      icon: "💻",
      tagline: "Second opinions, lab report reviews, and annual preventative kidney assessments.",
      summary: "Detailed review of blood creatinine, eGFR, and urine tests from the comfort of home, offering actionable clarity and reassurance.",
      points: [
        "Detailed review of blood creatinine, urea, and eGFR reports",
        "Personalized risk assessment for individuals with family history",
        "Safe painkiller and OTC supplement guidance",
        "Convenient WhatsApp-assisted video and remote consultations"
      ]
    }
  ],

  conditions: [
    {
      id: "chronic-kidney-disease",
      slug: "condition-chronic-kidney-disease.html",
      title: "Chronic Kidney Disease (CKD)",
      icon: "🩺",
      tagline: "Gradual, long-term decline in renal filtration capacity.",
      overview: "Chronic Kidney Disease occurs when kidneys are damaged over months or years, losing their ability to filter toxins and balance fluids effectively.",
      symptoms: [
        "Unexplained fatigue, weakness, and difficulty concentrating",
        "Swelling in feet, ankles, legs, or puffiness around eyes (edema)",
        "Foamy urine or changes in frequency (especially waking at night)",
        "Loss of appetite, metallic taste in mouth, or morning nausea"
      ],
      causes: [
        "Long-standing, uncontrolled diabetes mellitus (leading cause)",
        "Chronic high blood pressure damaging renal arterioles",
        "Glomerulonephritis (inflammation of kidney filtering units)",
        "Polycystic kidney disease and recurrent untreated infections"
      ],
      whenToVisit: "Consult Dr. Aishwarya Lal immediately if routine blood tests show elevated serum creatinine, reduced eGFR (<60 mL/min/1.73m²), or persistent protein in urine tests."
    },
    {
      id: "kidney-stones",
      slug: "condition-kidney-stones.html",
      title: "Kidney Stones (Nephrolithiasis)",
      icon: "💎",
      tagline: "Hard mineral crystalline deposits forming in the renal calyces and ureters.",
      overview: "Kidney stones form when urine contains more crystal-forming substances—such as calcium, oxalate, and uric acid—than fluid can dilute.",
      symptoms: [
        "Severe, sharp cramping pain in the back and flank radiating to lower groin",
        "Pain that comes in waves and fluctuates in intensity",
        "Pink, red, or brownish discoloration in urine (hematuria)",
        "Burning sensation during urination, cloudy or foul-smelling urine",
        "Persistent nausea, vomiting, fever, or chills if infection is present"
      ],
      causes: [
        "Inadequate daily hydration in warm climates",
        "High dietary intake of sodium, animal protein, or oxalate-rich foods",
        "Metabolic imbalances (hypercalciuria, hyperuricosuria, low citrate)",
        "Family history or structural urinary tract abnormalities"
      ],
      whenToVisit: "Seek urgent medical attention if pain is unmanageable, accompanied by fever or vomiting, or if urination is completely obstructed."
    },
    {
      id: "diabetic-kidney-disease",
      slug: "condition-diabetic-kidney-disease.html",
      title: "Diabetic Kidney Disease",
      icon: "🩸",
      tagline: "Microvascular damage to kidney glomeruli caused by chronic hyperglycemia.",
      overview: "Also known as diabetic nephropathy, this condition affects up to 40% of people with diabetes, beginning silently as microscopic protein leak.",
      symptoms: [
        "Early stages produce no noticeable symptoms (silent phase)",
        "Frothy or bubbly urine indicating albumin loss",
        "Gradually worsening foot and ankle swelling",
        "Rising blood pressure that requires increasing medications"
      ],
      causes: [
        "Prolonged elevated blood glucose levels damaging delicate filters",
        "Co-existing elevated blood pressure exacerbating filtration stress",
        "Genetic predisposition and duration of diabetes over 5 to 10 years"
      ],
      whenToVisit: "Every diabetic patient requires an annual urine microalbumin test and creatinine check. Schedule a consultation if your urine shows protein or creatinine is rising."
    },
    {
      id: "nephrotic-syndrome",
      slug: "condition-nephrotic-syndrome.html",
      title: "Nephrotic Syndrome & Proteinuria",
      icon: "🧪",
      tagline: "Severe leakage of albumin in urine resulting in significant bodily swelling.",
      overview: "Nephrotic syndrome is characterized by heavy proteinuria (>3.5 grams/day), low serum albumin, high cholesterol, and noticeable fluid retention.",
      symptoms: [
        "Severe swelling around eyes, especially noticeable in the morning",
        "Pitting edema in both lower legs, ankles, and feet",
        "Persistent foamy or frothy urine that requires multiple flushes",
        "Weight gain from fluid retention and abdominal distension (ascites)"
      ],
      causes: [
        "Minimal change disease, Focal Segmental Glomerulosclerosis (FSGS)",
        "Membranous nephropathy and IgA nephropathy",
        "Systemic lupus erythematosus (lupus nephritis)",
        "Secondary drug reactions or amyloidosis"
      ],
      whenToVisit: "Urgent evaluation is essential if sudden facial puffiness or leg swelling develops along with frothy urine."
    },
    {
      id: "acute-kidney-injury",
      slug: "condition-acute-kidney-injury.html",
      title: "Acute Kidney Injury (AKI)",
      icon: "⚡",
      tagline: "Sudden, rapid decline in kidney filtration over hours or days.",
      overview: "Unlike CKD, acute kidney injury is a sudden drop in kidney function. With prompt nephrology intervention, AKI can often be reversed before permanent scarring sets in.",
      symptoms: [
        "Significantly decreased urine output (oliguria)",
        "Rapid fluid accumulation leading to shortness of breath",
        "Confusion, lethargy, drowsiness, or unexplained nausea",
        "Sudden spike in creatinine on routine blood tests during illness"
      ],
      causes: [
        "Severe dehydration, heat stroke, or massive gastrointestinal fluid loss",
        "Severe infections, sepsis, or critical medical emergencies",
        "Nephrotoxic drugs, inappropriate painkiller use (NSAIDs), or IV contrast",
        "Sudden obstruction of urine flow from enlarged prostate or stones"
      ],
      whenToVisit: "This is a medical emergency requiring immediate hospitalization and nephrological stabilization."
    },
    {
      id: "high-blood-pressure-and-kidneys",
      slug: "condition-high-blood-pressure-and-kidneys.html",
      title: "High Blood Pressure & Kidneys",
      icon: "❤️",
      tagline: "The interconnected cycle where damaged kidneys raise BP, and high BP damages kidneys.",
      overview: "The kidneys play a crucial role in blood pressure regulation. High blood pressure narrows and hardens kidney blood vessels, reducing blood flow and filtering ability.",
      symptoms: [
        "Often symptomless until organ strain occurs ('silent killer')",
        "Morning headaches, blurred vision, or dizziness",
        "Swelling in the feet or shortness of breath on exertion",
        "Blood pressure that remains uncontrolled despite taking 3 or more medicines"
      ],
      causes: [
        "Essential hypertension causing nephrosclerosis over years",
        "Renovascular hypertension (narrowing of the renal arteries)",
        "Primary kidney disease causing fluid and sodium retention",
        "Excessive dietary salt intake and sedentary lifestyle"
      ],
      whenToVisit: "See Dr. Aishwarya Lal if your blood pressure is difficult to control, your doctor detects protein in your urine, or creatinine starts creeping up."
    },
    {
      id: "kidney-transplant-care",
      slug: "condition-kidney-transplant-care.html",
      title: "Kidney Transplant Care & Follow-Up",
      icon: "🌱",
      tagline: "Specialized monitoring for kidney transplant recipients to protect graft longevity.",
      overview: "Receiving a kidney transplant is life-changing, but maintaining graft health requires vigilant monitoring of immunosuppressive medications and graft function.",
      symptoms: [
        "Warning signs of rejection: rising creatinine, sudden fever, tenderness over graft site",
        "Decreased urine output or sudden weight gain",
        "Signs of opportunistic infections: fever, persistent cough, or burning urination"
      ],
      causes: [
        "Organ rejection (cellular or antibody-mediated)",
        "Calcineurin inhibitor toxicity from improper medication levels",
        "Infections (CMV, BK virus, fungal, urinary)",
        "Recurrence of primary kidney disease in the transplanted organ"
      ],
      whenToVisit: "All transplant recipients require scheduled lifelong monitoring. Contact immediately if creatinine rises or signs of infection appear."
    }
  ],

  faqs: [
    {
      q: "When should I see a kidney specialist (nephrologist)?",
      a: "You should consult a nephrologist if you have elevated serum creatinine, protein or blood in your urine, persistent swelling in your feet or face, uncontrolled high blood pressure, long-standing diabetes, recurrent kidney stones, or a family history of kidney disease."
    },
    {
      q: "What should I bring to my first consultation with Dr. Aishwarya Lal?",
      a: "Please bring all recent blood and urine test reports (especially serum creatinine, urea, electrolytes, complete blood count, and urine routine/microalbumin), previous ultrasound or CT scans, discharge summaries from any hospital visits, and an accurate list of all current prescription medicines and supplements."
    },
    {
      q: "Does a high creatinine level always mean permanent kidney failure?",
      a: "No. A rise in creatinine can be acute and reversible—such as from temporary dehydration, severe infection, or certain medications. Even in chronic kidney disease, early intervention, dietary modification, and blood pressure control can stabilize creatinine and prevent or significantly delay progression."
    },
    {
      q: "Can kidney disease be reversed or cured?",
      a: "Acute kidney injury (AKI) can often be cured or reversed if diagnosed and treated promptly. For chronic kidney disease (CKD), while damaged nephrons cannot typically regenerate, timely nephrology care can slow down or arrest disease progression, allowing patients to live full, healthy lives without needing dialysis for decades."
    },
    {
      q: "How can I protect my kidneys in daily life?",
      a: "Key daily habits include: staying well hydrated with clean water, strictly controlling blood pressure (<130/80 mmHg) and blood sugar, moderating salt intake (<5g daily), avoiding unnecessary over-the-counter pain relievers (NSAIDs like ibuprofen or diclofenac), avoiding unverified herbal concoctions, quitting smoking, and getting annual kidney checks if you are over 40."
    },
    {
      q: "What is dialysis and when does a patient need it?",
      a: "Dialysis is an artificial filtering therapy that cleans blood and removes excess fluid when kidneys lose approximately 85% to 90% of their filtering function (Stage 5 CKD). It is life-sustaining and allows patients to feel energetic and healthy. There are two primary types: Hemodialysis (done at a clinic 2-3 times weekly) and Peritoneal Dialysis (performed at home via a soft abdominal catheter)."
    },
    {
      q: "Is an online or WhatsApp consultation suitable for kidney problems?",
      a: "Yes. Remote consultations are ideal for reviewing recent blood and urine reports, discussing second opinions, adjusting stable medication regimens, and receiving dietary and lifestyle advice. However, acute severe symptoms like breathless chest congestion, sudden inability to urinate, or high fevers require immediate in-person emergency care."
    }
  ],

  blogs: [
    {
      slug: "blog-early-signs-of-kidney-disease.html",
      title: "Early Signs of Kidney Disease You Shouldn't Ignore",
      date: "October 2026",
      readTime: "5 min read",
      category: "Early Detection",
      summary: "Kidneys can lose up to 70% of their filtering function before noticeable symptoms appear. Learn the subtle early clues like morning eye puffiness, foamy urine, and fatigue."
    },
    {
      slug: "blog-keeping-kidneys-healthy.html",
      title: "Keeping Your Kidneys Healthy: Everyday Habits That Truly Matter",
      date: "October 2026",
      readTime: "4 min read",
      category: "Prevention",
      summary: "A nephrologist's practical guide to hydration, salt moderation, avoiding nephrotoxic painkillers, and keeping your filtration units healthy for a lifetime."
    },
    {
      slug: "blog-diabetes-and-kidney-health.html",
      title: "Diabetes and Kidney Health: Protecting Your Filters",
      date: "October 2026",
      readTime: "6 min read",
      category: "Diabetic Care",
      summary: "Why diabetes is the leading cause of chronic kidney disease worldwide, how annual microalbumin screening catches trouble early, and modern kidney-protective medicines."
    },
    {
      slug: "blog-understanding-creatinine-test.html",
      title: "Understanding Your Serum Creatinine & eGFR Test Report",
      date: "October 2026",
      readTime: "5 min read",
      category: "Lab Reports",
      summary: "Demystifying serum creatinine, eGFR, and blood urea nitrogen. What the numbers actually mean, why creatinine fluctuates, and when you need a specialist review."
    },
    {
      slug: "blog-what-is-dialysis.html",
      title: "What is Dialysis? A Compassionate Guide for Patients & Families",
      date: "October 2026",
      readTime: "7 min read",
      category: "Dialysis Guide",
      summary: "Demystifying hemodialysis and peritoneal dialysis. How modern dialysis works, what to expect, and how it helps patients maintain an active and fulfilling life."
    },
    {
      slug: "blog-kidney-friendly-lifestyle.html",
      title: "Kidney-Friendly Diet: Salt, Potassium, Protein & Water Facts",
      date: "October 2026",
      readTime: "6 min read",
      category: "Diet & Nutrition",
      summary: "Clear, evidence-based nutritional guidelines for kidney health. Navigating salt restrictions, plant vs. animal proteins, and dispelling common hydration myths."
    }
  ]
};
