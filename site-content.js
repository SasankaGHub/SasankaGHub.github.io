/*
  ================================================================
  EDIT THIS FILE TO UPDATE THE WEBSITE
  ================================================================

  After editing, save this file and upload/commit it to GitHub.
  The website automatically displays the new content—no rebuild is needed.

  Important:
  1. Keep quotation marks around text.
  2. Keep a comma between list items.
  3. To add an item, copy a complete {...} block and edit the copy.
  4. Image and PDF files belong in the assets folder.

  See EDITING-GUIDE.md for examples.
*/

window.SITE_CONTENT = {
  site: {
    name: "Sasanka Adikari",
    pageTitle: "Sasanka Adikari | Mathematics & Data Science",
    pageDescription:
      "Academic profile of Sasanka Adikari, Assistant Professor of Mathematics and Data Science at Clarkson University.",
    profileEyebrow: "Academic profile",
    role: "Assistant Professor of Mathematics",
    institution: "Department of Mathematics, Clarkson University, New York",
    institutionUrl: "https://www.clarkson.edu/",
    profilePhoto: "assets/sasanka-adikari-profile.png",
    cvFile: "assets/Sasanka-Adikari-CV.pdf",
    cvButtonText: "Download CV",
  },

  socialLinks: [
    {
      label: "Google Scholar",
      icon: "scholar",
      shortLabel: "G",
      href: "https://scholar.google.com/citations?user=sqSA7YEAAAAJ&hl=en&oi=ao",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      shortLabel: "in",
      href: "https://www.linkedin.com/in/sasanka-in/",
    },
    {
      label: "ORCID",
      icon: "orcid",
      shortLabel: "iD",
      href: "https://orcid.org/0000-0001-6006-1591",
    },
    {
      label: "GitHub",
      icon: "github",
      shortLabel: "GH",
      href: "https://github.com/SasankaGHub",
    },
    {
      label: "Facebook",
      icon: "facebook",
      shortLabel: "f",
      href: "https://www.facebook.com/Sasanka.AdikariTX",
    },
  ],

  about: {
    kicker: "About",
    heading: "Biography",
    paragraphs: [
      "Sasanka Adikari is an Assistant Professor of Mathematics and Data Science in the Department of Mathematics at Clarkson University in Potsdam, New York. His work connects statistical theory, computational methods, and real-world decision making.",
      "His research interests include discrete choice modeling, time-dependent best–worst choice behavior, copula-based dependence models, Bayesian methods, time-series forecasting, and statistical learning. He also develops applied analytical methods for public-health surveillance and justice-system data.",
      "Before joining Clarkson, he served as a Data Scientist with the Supreme Court of Pennsylvania, supporting statewide reporting and statistical analysis across Pennsylvania’s 67 counties. He values reproducible research, interdisciplinary collaboration, and translating complex methods into useful tools.",
    ],
    interestsHeading: "Interests",
    interests: [
      "Statistical modeling",
      "Data science",
      "Discrete choice experiments",
      "Time series & forecasting",
      "Bayesian methods",
      "Public-sector analytics",
    ],
    educationHeading: "Education",
    education: [
      { degree: "Ph.D. in Statistics", school: "Old Dominion University · 2023" },
      { degree: "M.S. in Statistics", school: "Sam Houston State University · 2018" },
      { degree: "M.S. in Financial Mathematics", school: "University of Colombo · 2014" },
      { degree: "B.Sc. in Statistics", school: "University of Kelaniya · 2010" },
    ],
  },

  research: {
    kicker: "Research",
    heading: "Methods built for decisions that change over time.",
    introduction:
      "My work develops statistical models that respect dependence, uncertainty, and temporal structure—then carries those models into applied settings where the results need to be interpretable and useful.",
    areas: [
      {
        number: "01",
        title: "Dynamic Choice & Behavioral Models",
        text: "Dependence-aware models for best–worst discrete choice experiments, time-dependent utility, copula methods, and evolving choice behavior.",
        tags: ["Discrete choice", "Copulas", "Best–worst scaling"],
      },
      {
        number: "02",
        title: "Time Series & Statistical Forecasting",
        text: "Forecasting, changepoint detection, count-data models, and uncertainty-aware methods for complex temporal and panel data.",
        tags: ["Forecasting", "Count data", "Changepoints"],
      },
      {
        number: "03",
        title: "Applied Data Science for Public Systems",
        text: "Reproducible statistical analysis for public health and justice systems, including surveillance, statewide reporting, spatial patterns, and decision support.",
        tags: ["Public health", "Court analytics", "Reproducibility"],
      },
    ],
  },

  publications: {
    kicker: "Selected work",
    heading: "Recent publications",
    scholarButtonText: "View all on Google Scholar",
    scholarUrl: "https://scholar.google.com/citations?user=sqSA7YEAAAAJ&hl=en&oi=ao",
    items: [
      {
        year: "2025",
        type: "Journal article",
        title:
          "Forecasting COVID-19 Cases, Hospital Admissions, and Deaths Based on Wastewater SARS-CoV-2 Surveillance Using Gaussian Copula Time Series Marginal Regression Model",
        authors: "H. A. Jeng, N. Diawara, N. Welch, et al., including S. Adikari",
        venue: "COVID, 5(2), Article 25",
        href: "https://doi.org/10.3390/covid5020025",
      },
      {
        year: "2024",
        type: "Journal article",
        title: "The Geometry of Dynamic Time-Dependent Best–Worst Choice Pairs",
        authors: "S. Adikari, N. Diawara, and H. Bar",
        venue: "Axioms, 13(9), Article 641",
        href: "https://doi.org/10.3390/axioms13090641",
      },
      {
        year: "2024",
        type: "Journal article",
        title:
          "Utility in Time Description in Priority Best-Worst Discrete Choice Models: An Empirical Evaluation Using Flynn’s Data",
        authors: "S. Adikari and N. Diawara",
        venue: "Stats, 7(1), 185–202",
        href: "https://doi.org/10.3390/stats7010012",
      },
      {
        year: "2023",
        type: "Journal article",
        title:
          "Application of Wastewater-Based Surveillance and Copula Time-Series Model for COVID-19 Forecasts",
        authors: "H. A. Jeng, R. Singh, N. Diawara, et al., including S. Adikari",
        venue: "Science of the Total Environment, 885, Article 163655",
        href: "https://doi.org/10.1016/j.scitotenv.2023.163655",
      },
      {
        year: "2023",
        type: "Journal article",
        title:
          "Poisson Regression Model with Application to Wastewater Surveillance Under a Threshold Linear Mixed Model for COVID-19 Sensitivity Rates",
        authors: "N. Diawara, H. A. Jeng, et al., including S. Adikari",
        venue: "American Journal of Biomedical Science & Research, 20(2), 130–143",
        href: "https://doi.org/10.34297/AJBSR.2023.20.002683",
      },
    ],
    dissertation: {
      label: "Doctoral dissertation · 2023",
      title:
        "Inference for Multiple Utility in Time-Dependent Choice Pairs Under Copula-Based Models",
      institution: "Old Dominion University",
      buttonText: "Read dissertation",
      href: "https://doi.org/10.25777/mtem-6473",
    },
  },

  experience: {
    kicker: "Experience",
    heading: "Professional experience in academia and industry.",
    introduction:
      "My work experience includes university teaching and research, together with applied data science and statistical analysis in a professional public-sector setting.",
    filters: ["All", "Academic", "Public service", "Teaching"],
    items: [
      {
        period: "2026 — Present",
        role: "Assistant Professor",
        organization: "Clarkson University",
        department: "Department of Mathematics",
        category: "Academic",
        logo: "assets/institutions/clarkson.png",
        href: "https://www.clarkson.edu/",
      },
      {
        period: "2023 — 2026",
        role: "Data Scientist",
        organization: "Supreme Court of Pennsylvania",
        department: "Research & Statistics",
        category: "Public service",
        logo: "assets/institutions/pa-supreme-court.png",
        href: "https://www.pacourts.us/",
      },
      {
        period: "2021 — 2023",
        role: "Graduate Research Assistant",
        organization: "Old Dominion University Research Foundation",
        department: "Research Foundation",
        category: "Academic",
        logo: "assets/institutions/odu-research-foundation.png",
        href: "https://www.odu.edu/odu-research-foundation",
      },
      {
        period: "2018 — 2021",
        role: "Graduate Teaching Assistant",
        organization: "Old Dominion University",
        department: "Department of Mathematics & Statistics",
        category: "Teaching",
        logo: "assets/institutions/old-dominion-university.png",
        href: "https://www.odu.edu/",
      },
      {
        period: "2016 — 2018",
        role: "Graduate Teaching Assistant",
        organization: "Sam Houston State University",
        department: "Department of Mathematics & Statistics",
        category: "Teaching",
        logo: "assets/institutions/sam-houston-state-university.png",
        href: "https://www.shsu.edu/",
      },
      {
        period: "2012 — 2016",
        role: "High School Teacher",
        organization: "Gateway College",
        department: "Mathematics & Statistics",
        category: "Teaching",
        logo: "assets/institutions/gateway-college.png",
        href: "https://www.gatewaycollege.lk/",
      },
      {
        period: "2010 — 2012",
        role: "Temporary Demonstrator",
        organization: "University of Kelaniya",
        department: "Department of Statistics & Computer Science",
        category: "Academic",
        logo: "assets/institutions/kelaniya.png",
        href: "https://www.kln.ac.lk/",
      },
    ],
  },

  teaching: {
    kicker: "Teaching",
    heading: "Teaching experience in Sri Lanka and the United States.",
    introduction:
      "I have taught mathematics, statistics, data analysis, and related courses at schools and universities in both countries.",
    items: [
      {
        period: "Fall 2026",
        institution: "Clarkson University",
        courses: "Probability and Statistics",
      },
      {
        period: "2018–2021",
        institution: "Old Dominion University",
        courses: "Elementary Statistics; Design of Experiments",
      },
      {
        period: "Fall 2017",
        institution: "Sam Houston State University",
        courses: "Elementary Statistics; SPSS",
      },
      {
        period: "2012–2016",
        institution: "Gateway International School",
        courses: "Advanced Calculus; Statistics; Algebra I and II",
      },
      {
        period: "2010–2012",
        institution: "University of Kelaniya",
        courses: "Minitab; Sampling Techniques; Regression Analysis; Operations Research",
      },
    ],
  },

  beyond: {
    kicker: "Beyond academia",
    heading: "Traveling far. Looking closely. Bringing stories home.",
    introduction:
      "Outside the classroom, I enjoy traveling, macro photography, and collecting souvenirs. Each pursuit is a way of noticing: the character of a place, the hidden structure of a flower, and the small objects that keep a journey’s story alive.",
    tagline: "Curiosity, captured and collected.",
    hobbies: [
      {
        icon: "plane",
        title: "Traveling",
        text: "Exploring new landscapes, cultures, and everyday moments with curiosity.",
      },
      {
        icon: "camera",
        title: "Macro photography",
        text: "Finding pattern, texture, color, and life in details that are easy to overlook.",
      },
      {
        icon: "gift",
        title: "Souvenir collecting",
        text: "Keeping small objects that preserve the memories and stories of each journey.",
      },
    ],
    galleryKicker: "Through my lens",
    galleryHeading: "Small details. Wide horizons.",
    galleryIntroduction:
      "A selection of nature, wildlife, and travel photographs, all captured by Sasanka Adikari.",
    photoCredit: "Photography © Sasanka Adikari",
    lightboxCredit: "Photograph by Sasanka Adikari",
    photos: [
      {
        src: "assets/photography/sunflower-emerging.webp",
        title: "Reaching for the light",
        category: "Botanical study",
        alt: "Close view of a yellow sunflower beginning to open",
      },
      {
        src: "assets/photography/rose-after-rain.webp",
        title: "After the rain",
        category: "Macro",
        alt: "Red rose covered with clear raindrops",
      },
      {
        src: "assets/photography/cavern-forms.webp",
        title: "Sculpted by time",
        category: "Travel",
        alt: "Illuminated stalactites and stalagmites inside a cavern",
      },
      {
        src: "assets/photography/squirrel-portrait.webp",
        title: "A quiet observer",
        category: "Wildlife",
        alt: "Squirrel perched on the edge of a blue park bench",
      },
      {
        src: "assets/photography/green-apples.webp",
        title: "Orchard study",
        category: "Nature",
        alt: "Cluster of green apples among sunlit leaves",
      },
      {
        src: "assets/photography/sunflower-bees.webp",
        title: "Pollinators at work",
        category: "Macro",
        alt: "Several bees gathering pollen on a pale yellow sunflower",
      },
      {
        src: "assets/photography/sunflower-detail.webp",
        title: "Sunflower geometry",
        category: "Macro",
        alt: "Detailed close view of the spiral pattern in a sunflower",
      },
      {
        src: "assets/photography/scarlet-details.webp",
        title: "Scarlet details",
        category: "Macro",
        alt: "Close view of bright red berries and their textured surfaces",
      },
      {
        src: "assets/photography/winter-stillness.webp",
        title: "Winter stillness",
        category: "Landscape",
        alt: "Snow-covered campus lawn framed by ice-coated trees",
      },
    ],
  },

  contact: {
    kicker: "Contact",
    heading: "Let’s discuss research, teaching, or collaboration.",
    introduction:
      "I welcome conversations about statistical methodology, data-science collaboration, student research, and applied projects.",
    email: "aadikari@clarkson.edu",
    affiliationLabel: "Affiliation",
    affiliationLines: ["Department of Mathematics", "Clarkson University"],
    locationLabel: "Location",
    locationLines: ["8 Clarkson Avenue", "Potsdam, NY 13699"],
    profilesLabel: "Profiles",
  },
};
