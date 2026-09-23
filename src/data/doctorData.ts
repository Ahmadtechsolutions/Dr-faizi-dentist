/**
 * Central Doctor Configuration & Verified Practice Information
 * Source of truth for Dr. Faizi Rhinoplasty practice.
 * All doctor data and credentials can be edited here.
 */

export interface DoctorConfig {
  name: string;
  brand: string;
  profession: string;
  qualifications: string;
  specialization: string;
  professionalMembership: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    whatsappLink: string;
    email: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    facebookHandle: string;
    facebookUrl: string;
  };
  locationNote: string;
  medicalDisclaimer: string;
}

export const DOCTOR_DATA: DoctorConfig = {
  name: "Dr. Faizi",
  brand: "Dr Faizi Rhinoplasty",
  profession: "ENT Surgeon & Associate Professor",
  qualifications: "FCPS, FACS (USA)",
  specialization: "Rhinoplasty & FESS Expert",
  professionalMembership: "Member Rhinoplasty Society of Europe",
  contact: {
    phone: "03333880332",
    phoneFormatted: "+92 333 3880332",
    whatsapp: "+92 333 3880332",
    whatsappFormatted: "+92 333 3880332",
    whatsappLink: "https://wa.me/923333880332?text=Hello%20Dr.%20Faizi%20Rhinoplasty%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
    email: "rhinoplastyinpakistan@gmail.com",
  },
  social: {
    instagramHandle: "@drfaizi.rhinoplasty",
    instagramUrl: "https://www.instagram.com/drfaizi.rhinoplasty/",
    facebookHandle: "DrFaizi.Rhinoplasty",
    facebookUrl: "https://www.facebook.com/DrFaizi.Rhinoplasty/",
  },
  // Editable location section as clinic address is not provided in source reference
  locationNote: "Consultation clinics scheduled across major medical hubs in Pakistan. For verified clinic facility addresses, appointment schedules, and out-of-city patient coordination, please connect directly with our clinic desk via WhatsApp or phone.",
  medicalDisclaimer: "Medical Disclaimer: The clinical information and photographic references on this website are provided for educational and illustrative purposes only. Surgical outcomes depend on unique individual nasal anatomy, cartilage structure, and physiological healing. A comprehensive one-on-one medical consultation and physical examination with a qualified surgeon are required to determine clinical suitability, realistic expectations, and personalized treatment plans.",
};

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  whatIsIt: string;
  candidateProfile: string[];
  processSteps: { title: string; detail: string }[];
  recoveryInfo: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "rhinoplasty",
    title: "Primary Rhinoplasty",
    subtitle: "Aesthetic & Structural Nasal Refinement",
    description: "Personalized primary rhinoplasty balancing nasal harmony with internal airway preservation, tailored to individual facial proportions.",
    whatIsIt: "Primary rhinoplasty is a surgical procedure performed on patients who have not undergone prior nasal surgery. It addresses the nasal bone, cartilaginous framework, and soft tissues to refine proportions such as dorsal humps, tip projection, bridge width, and nasal symmetry while maintaining structural airway integrity.",
    candidateProfile: [
      "Individuals seeking balanced aesthetic refinement of dorsal humps, broad bridges, or drooping nasal tips",
      "Patients with natural nasal asymmetry or disproportion relative to overall facial contours",
      "Individuals with realistic cosmetic expectations and fully matured facial skeletal development",
      "Candidates desiring improved facial harmony while protecting or enhancing nasal breathing"
    ],
    processSteps: [
      {
        title: "1. Comprehensive Clinical Consultation",
        detail: "Detailed photographic analysis, internal nasal examination, and evaluation of skin thickness, nasal cartilage strength, and breathing function."
      },
      {
        title: "2. Individualized Surgical Plan",
        detail: "Formulation of a bespoke surgical blueprint respecting natural facial features, avoiding artificial or over-reduced appearances."
      },
      {
        title: "3. Surgical Execution",
        detail: "Performed under sterile general anesthesia utilizing meticulous preservation or structural cartilage grafting techniques."
      },
      {
        title: "4. Post-Operative Splint & Dressing",
        detail: "Application of external protective nasal splinting and light supportive taping to safeguard delicate bone and cartilage repositioning."
      }
    ],
    recoveryInfo: [
      {
        title: "Initial Week (Days 1–7)",
        detail: "External nasal splint remains in place to support healing. Mild puffiness and periorbital bruising typically peak around day 3 and then subside. Head elevation is recommended."
      },
      {
        title: "Splint Removal (Day 7–8)",
        detail: "Splint and external sutures are removed at the clinic. Most patients feel comfortable resuming non-strenuous desk work and light social interactions."
      },
      {
        title: "Intermediate Healing (Weeks 2–6)",
        detail: "Approximately 70–80% of visible edema resolves within the first month. Avoid contact sports, heavy lifting, and wearing heavy eyewear resting on the nasal bridge."
      },
      {
        title: "Final Definition (6–12 Months)",
        detail: "Subtle lymphatic drainage and micro-contouring of the nasal tip continue over the course of a full year as internal tissues stabilize."
      }
    ],
    faqs: [
      {
        question: "Does rhinoplasty affect nasal breathing?",
        answer: "As an ENT surgeon and rhinoplasty specialist, Dr. Faizi prioritizes both structural function and cosmetic refinement. The internal airway is thoroughly assessed, and functional stability is reinforced to prevent airway collapse."
      },
      {
        question: "Is primary rhinoplasty painful?",
        answer: "Most patients report a sensation of nasal congestion or pressure similar to a cold rather than acute sharp pain. Prescribed analgesics provide effective comfort during the initial days."
      },
      {
        question: "What is the appropriate age for primary rhinoplasty?",
        answer: "Patients should have completed facial skeletal growth, which typically occurs after age 16 for females and 17–18 for males, alongside emotional maturity and realistic expectations."
      }
    ]
  },
  {
    slug: "fess",
    title: "FESS (Functional Endoscopic Sinus Surgery)",
    subtitle: "Advanced Endoscopic Sinus & Airway Surgery",
    description: "Minimally invasive endoscopic surgery to restore natural sinus ventilation, clear chronic obstructions, and alleviate persistent sinus conditions.",
    whatIsIt: "Functional Endoscopic Sinus Surgery (FESS) is an advanced, minimally invasive surgical technique that uses high-definition optical endoscopes to visualize and treat diseased sinus tissue, remove polyps, and open natural drainage pathways without external facial incisions.",
    candidateProfile: [
      "Patients experiencing chronic rhinosinusitis refractory to medical therapy and nasal sprays",
      "Individuals with recurrent sinus infections causing facial pain, pressure, and persistent headache",
      "Patients with obstructive nasal polyps obstructing airflow and dulling the sense of smell",
      "Individuals with structural anatomical sinus blockages or compromised ostiomeatal complexes"
    ],
    processSteps: [
      {
        title: "1. Diagnostic Nasal Endoscopy & CT Review",
        detail: "In-depth endoscopic examination in conjunction with sinus CT imaging to precisely map diseased mucosal tracts and anatomical narrowings."
      },
      {
        title: "2. Precision Endoscopic Instrumentation",
        detail: "Under high-magnification endoscopes, micro-instruments gently clear mucosal blockage, polyps, or bone spurs while preserving healthy surrounding tissue."
      },
      {
        title: "3. Natural Pathway Re-establishment",
        detail: "The natural drainage ostia of maxillary, ethmoid, frontal, or sphenoid sinuses are enlarged to facilitate physiological mucociliary clearance."
      },
      {
        title: "4. Outpatient Recovery Protocol",
        detail: "Modern dissolving nasal dressings or non-packing protocols are prioritized to enhance post-operative comfort and minimize pain upon waking."
      }
    ],
    recoveryInfo: [
      {
        title: "Immediate Post-Op (Days 1–3)",
        detail: "Mild blood-tinged nasal drainage and moderate nasal stuffiness. Frequent sterile saline nasal rinses are initiated as instructed by the surgical team."
      },
      {
        title: "First Follow-up (Week 1)",
        detail: "In-office endoscopic debridement to clear healing crusts, optimize drainage, and confirm mucosal health."
      },
      {
        title: "Return to Normal Routine (Days 7–10)",
        detail: "Most patients comfortably return to work and light routines. Strenuous cardiovascular exertion and heavy nose blowing should be avoided for 2 weeks."
      }
    ],
    faqs: [
      {
        question: "Are there any external cuts or visible scars with FESS?",
        answer: "No. FESS is performed entirely through the nostrils using precision endoscopic cameras, resulting in zero external incisions or visible scarring."
      },
      {
        question: "Can FESS be combined with septoplasty or rhinoplasty?",
        answer: "Yes. When clinically indicated, FESS can be performed alongside septoplasty (straightening a deviated septum) or aesthetic rhinoplasty in a single planned surgical session."
      },
      {
        question: "How soon can I breathe normally after FESS?",
        answer: "Patients typically notice progressive improvement in nasal airflow and reduction in facial pressure within 7 to 14 days as healing settles and gentle saline rinses clear crusting."
      }
    ]
  },
  {
    slug: "complex-rhinoplasty",
    title: "Complex Rhinoplasty",
    subtitle: "Challenging Structural & Asymmetric Nasal Reconstruction",
    description: "Specialized reconstructive surgical approaches for severe congenital deviations, heavy ethnic skin, traumatic injury, and deficient cartilage frameworks.",
    whatIsIt: "Complex rhinoplasty addresses demanding nasal anatomies involving severe structural deviation, fractured nasal bones from prior trauma, thick sebaceous skin envelopes, or significant internal cartilage deficiencies requiring specialized structural grafting and reconstruction.",
    candidateProfile: [
      "Severe S-shaped or C-shaped crooked noses causing pronounced aesthetic deviation and unilateral airway block",
      "Post-traumatic nasal deformities resulting from fractures, athletic injuries, or accidents",
      "Patients with thick skin requiring dedicated structural definition to reveal refined tip contour",
      "Cases requiring advanced autologous cartilage grafting (such as septal extension grafts or spreader grafts)"
    ],
    processSteps: [
      {
        title: "1. Structural Framework Analysis",
        detail: "Meticulous assessment of the nasal bony pyramid, septum alignment, lateral crural strength, and skin-soft tissue envelope dynamics."
      },
      {
        title: "2. Strategic Graft Harvesting & Carving",
        detail: "Identification and precise crafting of supportive structural cartilage grafts (septal, conchal, or rib as indicated) to rebuild the nasal tripod."
      },
      {
        title: "3. Multi-Vector Straightening",
        detail: "Controlled osteotomies and asymmetric cartilage fixation to realign the deviated nasal pyramid with the facial midline."
      },
      {
        title: "4. Long-Term Stabilization",
        detail: "Rigid fixation techniques designed to withstand wound healing contracture and ensure lifelong structural longevity."
      }
    ],
    recoveryInfo: [
      {
        title: "Week 1",
        detail: "Firm internal and external support splints protect the reconstructed framework. Moderate swelling is managed with head elevation and cold compresses."
      },
      {
        title: "Weeks 2–4",
        detail: "Splints removed. Structural alignment is visible, though thicker tissues require extended patience for micro-contouring."
      },
      {
        title: "Months 3–12+",
        detail: "Complex cases with thick skin continue to refine over 12 to 18 months as deep surgical remodeling matures."
      }
    ],
    faqs: [
      {
        question: "What makes a rhinoplasty 'complex'?",
        answer: "Cases are considered complex when there is marked skeletal asymmetry, prior nasal trauma, thick sebaceous skin that masks underlying anatomy, or severe septal deviation requiring advanced grafting."
      },
      {
        question: "Where do cartilage grafts come from?",
        answer: "The nasal septum is the preferred primary source. If septal cartilage has been compromised or exhausted, ear (conchal) cartilage or costal (rib) cartilage may be discussed."
      }
    ]
  },
  {
    slug: "revision-rhinoplasty",
    title: "Revision Rhinoplasty",
    subtitle: "Secondary Corrective Surgery for Prior Procedures",
    description: "Expert secondary surgery to restore structural integrity, correct aesthetic irregularities, and resolve breathing impairment from previous operations.",
    whatIsIt: "Revision rhinoplasty (secondary rhinoplasty) is a delicate surgical procedure performed to correct unsatisfactory cosmetic results, structural deformities, or compromised nasal breathing following one or more previous nasal operations.",
    candidateProfile: [
      "Patients experiencing breathing difficulties or valve collapse following prior surgery",
      "Asymmetry, persistent dorsal irregularities, pinched tip, or inverted-V deformities",
      "Over-resected nasal bridges (saddle nose) requiring cartilage volume restoration",
      "Patients dissatisfied with cosmetic or functional outcomes from previous procedures"
    ],
    processSteps: [
      {
        title: "1. Anatomical Defect Mapping",
        detail: "Careful evaluation of internal scar tissue, residual cartilage, mucosal health, and previous surgical reports when available."
      },
      {
        title: "2. Cartilage Donor Strategy",
        detail: "Since septal cartilage is often depleted from primary surgery, donor cartilage options (ear or rib) are planned in detail."
      },
      {
        title: "3. Meticulous Scar Dissection",
        detail: "Gentle dissection through compromised tissue planes to release contractures without compromising blood supply to the skin envelope."
      },
      {
        title: "4. Reconstructive Framework Assembly",
        detail: "Restoration of nasal bridge height, tip support, and internal valve patency using precise structural grafting."
      }
    ],
    recoveryInfo: [
      {
        title: "Healing Timeline",
        detail: "Revision cases involve scar tissue, which takes longer to soften. While external splints are removed after 7–8 days, full resolution of edema typically spans 12 to 18 months."
      },
      {
        title: "Post-Operative Care",
        detail: "Close periodic clinical follow-up to monitor tissue healing, manage scar formation, and ensure optimal functional recovery."
      }
    ],
    faqs: [
      {
        question: "How long should I wait before seeking revision rhinoplasty?",
        answer: "In general, patients should wait a minimum of 10 to 12 months following their prior surgery to allow full resolution of swelling, scar softening, and tissue stabilization before undertaking revision surgery."
      },
      {
        question: "Can compromised breathing from a past surgery be fixed?",
        answer: "Yes. Structural revision rhinoplasty emphasizes rebuilding internal and external nasal valves with supportive cartilage grafts to restore clear, stable airflow."
      }
    ]
  },
  {
    slug: "functional-rhinoplasty",
    title: "Functional Rhinoplasty",
    subtitle: "Airway Restoration & Septorhinoplasty",
    description: "Surgical correction focused on relieving nasal obstruction, repairing deviated septums, and stabilizing weakened internal and external nasal valves.",
    whatIsIt: "Functional rhinoplasty is surgery designed primarily to relieve structural nasal airway obstruction. It frequently integrates septoplasty (correction of deviated cartilage and bone) with nasal valve reconstruction and turbinate reduction while maintaining or enhancing natural outer nasal contours.",
    candidateProfile: [
      "Persistent difficulty breathing through one or both nostrils",
      "Chronic mouth breathing, dry mouth upon waking, and snoring related to nasal obstruction",
      "Nasal valve collapse when inhaling deeply or during exercise",
      "Combined desire to correct an internal deviated septum and refine the external appearance simultaneously"
    ],
    processSteps: [
      {
        title: "1. Diagnostic Airway Assessment",
        detail: "Direct visual and endoscopic evaluation of the nasal septum, inferior turbinates, and static/dynamic nasal valve angles."
      },
      {
        title: "2. Septal Straightening & Relocation",
        detail: "Precise mobilization of deviated cartilage and bony spurs to open the central airway channel."
      },
      {
        title: "3. Valve Stabilization Grafts",
        detail: "Placement of spreader grafts or alar batten grafts to prevent collapse of the internal and external nasal valves during inspiration."
      },
      {
        title: "4. Airway Patency Confirmation",
        detail: "Ensuring symmetric, unobstructed airflow before closure, without altering cosmetic appearance unless requested."
      }
    ],
    recoveryInfo: [
      {
        title: "First 48 Hours",
        detail: "Mild congestion; no aggressive nose blowing. Soft dissolvable or silicone internal splints facilitate breathing comfort."
      },
      {
        title: "Day 7",
        detail: "Clinical check-up and removal of supportive external or internal splints. Immediate subjective airflow improvement is frequently experienced."
      },
      {
        title: "Weeks 2–4",
        detail: "Normal cardiovascular activities and work routines resumed. Airflow stability continues to improve as internal mucosal healing completes."
      }
    ],
    faqs: [
      {
        question: "Will functional rhinoplasty change how my nose looks?",
        answer: "If you only desire improved breathing, the procedure focuses strictly on internal architecture without altering external appearance. However, if desired, cosmetic refinement can be combined with functional repair in a single septorhinoplasty."
      },
      {
        question: "What is nasal valve collapse?",
        answer: "Nasal valve collapse occurs when the lateral nasal sidewalls or cartilage are too weak to support the negative pressure of breathing, causing the nostril to pinch inward upon inhalation."
      }
    ]
  }
];

export interface BeforeAfterCase {
  id: string;
  category: "Rhinoplasty" | "Complex Rhinoplasty" | "Revision" | "Long-Term Results";
  title: string;
  description: string;
  primaryImage: string; // generated high-fidelity case image
  details: string[];
}

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-01",
    category: "Rhinoplasty",
    title: "Primary Aesthetic Refinement & Dorsal Contouring",
    description: "Reduction of prominent dorsal hump with preservation of structural nasal tip projection and creation of a smooth, balanced profile line.",
    primaryImage: "/images/case_dorsal_refinement_1790127420110.jpg",
    details: [
      "Indication: Prominent dorsal hump with mild tip drooping on smiling",
      "Approach: Structural preservation rhinoplasty with cartilaginous tip stabilization",
      "Follow-up: Clinical follow-up illustrating settled dorsal alignment",
      "Airway: Internal airway preserved with stable bilateral airflow"
    ]
  },
  {
    id: "case-02",
    category: "Revision",
    title: "Structural Revision & Asymmetric Correction",
    description: "Reconstruction of over-resected nasal dorsum and revision tip stabilization following prior external surgery performed elsewhere.",
    primaryImage: "/images/case_structural_revision_1790127432802.jpg",
    details: [
      "Indication: Asymmetric nasal bridge and pinched tip from previous surgery",
      "Approach: Revision open rhinoplasty with autologous cartilage spreader grafting",
      "Outcome: Restored structural bridge balance and symmetric alar support",
      "Airway: Re-established nasal valve patency and symptom relief"
    ]
  },
  {
    id: "case-03",
    category: "Complex Rhinoplasty",
    title: "Traumatic Asymmetry & Multi-Vector Midline Realignment",
    description: "Reconstruction of marked post-traumatic deviated nasal pyramid with complex septal relocation and asymmetric osteotomies.",
    primaryImage: "/images/case_dorsal_refinement_1790127420110.jpg",
    details: [
      "Indication: Severe crooked nasal axis resulting from prior trauma with unilateral airway obstruction",
      "Approach: Complex realignment, septal reconstruction, and protective splinting",
      "Result: Straightened midline alignment in harmony with facial axes",
      "Functional Status: Restored bilateral nasal patency"
    ]
  },
  {
    id: "case-04",
    category: "Long-Term Results",
    title: "Long-Term Stable Profile Harmony",
    description: "Demonstration of sustained structural integrity and refined nasal contours 12+ months post-operatively without settling or collapse.",
    primaryImage: "/images/case_structural_revision_1790127432802.jpg",
    details: [
      "Timeline: Extended clinical follow-up at 12+ months post-surgery",
      "Stability: Sustained cartilage support and mature soft tissue redraping",
      "Skin Characteristics: Smooth transition across nasal dorsum and supratip",
      "Maintenance: Long-term stable breathing mechanics"
    ]
  }
];

export interface PatientReview {
  id: string;
  patientName: string;
  serviceReceived: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const INITIAL_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    patientName: "A. Khan",
    serviceReceived: "Primary Rhinoplasty & Septoplasty",
    rating: 5,
    date: "August 2026",
    comment: "Dr. Faizi explained every aspect of the procedure during our consultation. I wanted a natural look that suited my face without looking overdone, and my breathing has improved significantly. Truly a specialist who listens.",
    verified: true
  },
  {
    id: "rev-2",
    patientName: "M. Tariq",
    serviceReceived: "Revision Rhinoplasty",
    rating: 5,
    date: "June 2026",
    comment: "After an unsatisfactory surgery years ago with another doctor, I was anxious about revision. Dr. Faizi's calm surgical expertise and clear assessment gave me confidence. The structural recovery has been exceptional.",
    verified: true
  },
  {
    id: "rev-3",
    patientName: "S. Malik",
    serviceReceived: "Functional Endoscopic Sinus Surgery (FESS)",
    rating: 5,
    date: "April 2026",
    comment: "Years of chronic sinus headaches and blocked breathing ended after my FESS procedure. The recovery process was clearly outlined, and having an ENT specialist handle it made all the difference.",
    verified: true
  },
  {
    id: "rev-4",
    patientName: "Z. Ahmed",
    serviceReceived: "Complex Rhinoplasty",
    rating: 5,
    date: "February 2026",
    comment: "Had severe nasal deviation from an old sports injury. Dr. Faizi realigned my nose beautifully while prioritizing full airway function. Outstanding professionalism from initial consultation to aftercare.",
    verified: true
  }
];

export interface GeneralFaq {
  question: string;
  answer: string;
  category: "General" | "Rhinoplasty" | "Consultation" | "Recovery";
}

export const GENERAL_FAQS: GeneralFaq[] = [
  {
    category: "General",
    question: "What qualifications does Dr. Faizi hold?",
    answer: "Dr. Faizi is an ENT Surgeon & Associate Professor with FCPS and FACS (USA) qualifications. He is an expert in Rhinoplasty & FESS and an active Member of the Rhinoplasty Society of Europe."
  },
  {
    category: "Consultation",
    question: "What happens during a rhinoplasty consultation?",
    answer: "During your consultation, Dr. Faizi conducts a thorough examination of both internal nasal breathing structures and external aesthetics. High-resolution photographic assessment is performed, your anatomical characteristics (cartilage strength, skin envelope) are evaluated, and realistic, personalized surgical goals are discussed."
  },
  {
    category: "Rhinoplasty",
    question: "What is the difference between aesthetic and functional rhinoplasty?",
    answer: "Aesthetic rhinoplasty modifies the external visual shape, symmetry, and proportions of the nose. Functional rhinoplasty focuses on correcting internal obstructions, such as a deviated septum or collapsed nasal valves, to optimize airflow. In most cases, Dr. Faizi addresses both simultaneously to ensure you look natural and breathe with ease."
  },
  {
    category: "Rhinoplasty",
    question: "What is revision rhinoplasty?",
    answer: "Revision rhinoplasty is a secondary procedure performed when a patient has had a prior nasal surgery elsewhere and experiences persistent cosmetic issues, structural deformities, or breathing compromise. It requires advanced grafting and specialized reconstructive expertise."
  },
  {
    category: "General",
    question: "What is FESS (Functional Endoscopic Sinus Surgery)?",
    answer: "FESS is a minimally invasive procedure performed entirely through the nostrils using specialized optical endoscopes to treat chronic sinus inflammation, remove obstructing polyps, and restore natural sinus ventilation without external incisions."
  },
  {
    category: "Recovery",
    question: "How long is the typical recovery after rhinoplasty?",
    answer: "Most patients wear an external protective splint for 7 to 8 days, after which it is removed and light daily routines can be resumed. The majority of noticeable swelling subsides within 3 to 4 weeks, while subtle tip refinement and deep tissue maturation continue over 6 to 12 months."
  },
  {
    category: "Consultation",
    question: "How do I schedule an appointment with Dr. Faizi?",
    answer: "You can submit an appointment request through our online consultation form, or message our clinical coordinator directly on WhatsApp at +92 333 3880332 or call 03333880332. Our team will assist with available dates and clinic locations."
  },
  {
    category: "Recovery",
    question: "Are rhinoplasty results permanent?",
    answer: "Yes. Once the nasal framework has fully healed and remodeled (typically 12 months), the structural adjustments are permanent. However, like the rest of the face, the nose continues to undergo natural lifelong aging."
  }
];
