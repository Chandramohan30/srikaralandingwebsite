// Content sourced from the two Srikara Academy brochures:
// 1. Offline Campus Programs (IGNITE / ASCEND)
// 2. Full Stack + AI (Option 01 / 02 / 03, online-friendly track)

export const CONTACT = {
  phone: "98430 93936",
  phoneHref: "tel:+919843093936",
  website: "www.srikaraacademy.com",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Syllabus", href: "#syllabus" },
  { label: "Projects", href: "#projects" },
  { label: "Certification", href: "#certification" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Careers", href: "#careers" },
  { label: "FAQ", href: "#faq" },
];

// ---------------------------------------------------------------------------
// Course header (hero) — mirrors the "course name + book-a-demo" layout used
// on large bootcamp sites, with our own program's real facts.
// ---------------------------------------------------------------------------
export const COURSE = {
  badge: "Live Batches — limited seats · First 20 students get a discount",
  name: "Advanced Full Stack Development with AI",
  tagline: "13 Modules · 8 Course Combos · From HTML to a Deployed, AI-Tested Full Stack App",
  lead:
    "Go from zero coding experience to a placement-ready, AI-powered Full Stack Developer. Live, instructor-led classes — choose React or Next.js on the frontend, and Node/Express, Django or Spring Boot on the backend.",
  stats: [
    { label: "Modules", value: "13" },
    { label: "Course Combos", value: "8" },
    { label: "Capstone Projects", value: "7+" },
    { label: "Format", value: "Live Classes" },
    { label: "Platform", value: "CoHub Access" },
    { label: "Mode", value: "Offline & Live Online" },
  ],
};

// 8 sellable course combos, straight from the batch roadmap doc.
export const COURSE_COMBOS = [
  { name: "Frontend Combo 1 (React)", duration: "7 wk" },
  { name: "Frontend Combo 2 (React + Next.js)", duration: "10 wk" },
  { name: "React + Node/Express", duration: "12 wk" },
  { name: "React + Django", duration: "12 wk" },
  { name: "React + Spring Boot", duration: "12 wk" },
  { name: "Next.js + Node/Express", duration: "12 wk" },
  { name: "Next.js + Django", duration: "12 wk" },
  { name: "Next.js + Spring Boot", duration: "12 wk" },
];

export const TOOLS = [
  "HTML5", "CSS3", "Bootstrap", "JavaScript", "TypeScript", "React JS", "Next.js",
  "Node.js", "Express", "Python", "Django", "DRF", "Java", "Spring Boot",
  "SQL", "PostgreSQL", "Git & GitHub", "Postman", "Playwright", "AI Coding Tools",
];

export const PROGRAM_HIGHLIGHTS = [
  { title: "Live, Instructor-Led Classes", detail: "Real-time teaching with direct mentor access every session — not pre-recorded playback.", accent: "var(--cyan)" },
  { title: "AI-Native Coding", detail: "Build, debug and ship using AI coding assistants as your daily coding partner from week one.", accent: "var(--violet)" },
  { title: "Testing Built In", detail: "Manual testing and Playwright + AI automation testing are woven into every capstone.", accent: "var(--amber)" },
  { title: "7+ Real Capstone Projects", detail: "From an HTML blog to a full-stack, role-based, deployed application — a portfolio you can show recruiters.", accent: "var(--green)" },
  { title: "CoHub Platform Access", detail: "Every student gets access to CoHub, our own learning platform — class recordings, assignments and progress tracking.", accent: "var(--cyan)" },
  { title: "Placement Support", detail: "Resume & LinkedIn branding, mock interviews and career guidance built into the higher-tier combos.", accent: "var(--violet)" },
];

// ---------------------------------------------------------------------------
// Success Stories — "before / at Srikara / now" career-transformation cards,
// shown in a horizontally scrolling carousel.
// ---------------------------------------------------------------------------
export const SUCCESS_STORIES = [
  {
    name: "Jayaprasanna",
    before: "Quality Analyst",
    course: "Finance Course",
    now: "Accountant",
    company: "EI Trading",
    ctc: "₹3.8 LPA",
  },
  {
    name: "Pooja R",
    before: "BCA Graduate",
    course: "Finance Course",
    now: "Finance Trainer",
    company: "SuperLabs",
    ctc: "₹4.0 LPA",
  },
  {
    name: "Joy Praveena",
    before: "Homemaker",
    course: "Tally & GST",
    now: "Accountant",
    company: "Lekha Ads",
    ctc: "₹4.5 LPA",
  },
  {
    name: "Madhumitha",
    before: "Fresher, MSc (Arts & Science)",
    course: "Tally & GST",
    now: "Accountant",
    company: "Anjana & Co",
    ctc: "₹4.0 LPA",
  },
  {
    name: "Raksana",
    before: "Online Support Associate",
    course: "Tally & GST",
    now: "Accountant",
    company: "Astral",
    ctc: "₹3.5 LPA",
  },
  {
    name: "Bharath",
    before: "9 Years Gap After Graduation",
    course: "Full Stack",
    now: "Full Stack Developer",
    company: "SLN IT Solutions",
    ctc: "₹5.5 LPA",
  },
];

// ---------------------------------------------------------------------------
// Trainers — shown as a horizontally auto-scrolling row of cards.
// ---------------------------------------------------------------------------
export const TRAINERS = [
  { name: "Muthukumar C", role: "Founder & CEO", company: "Srikara Academy", photo: "muthukumar" },
  { name: "Vidya M",role:"Placement Officer",company:"Srikara Academy",photo:"vidya"},
  { name: "Sadhana R", role: "Industrial IT Expert & IT Head", company: "Srikara Academy", photo: "sadhana" },
  { name: "Kumutha", role: "Industrial Expert, IT Head", company: "Srikara Academy", photo: "kumutha" },
  { name: "Chandramohan K", role: "Senior Software Developer cum Trainer", company: "Srikara Academy", photo: "chandramohan" },
  { name: "Vaishnavi S", role: "Junior Software Developer cum Trainer", company: "Srikara Academy", photo: "vaishnavi" },
];

// ---------------------------------------------------------------------------
// Certification — mirrors the "Certification" section shown on large
// bootcamp course pages: a short pitch + the credentials students walk
// away with.
// ---------------------------------------------------------------------------
export const CERTIFICATIONS = [
  { name: "Srikara Academy Certificate", detail: "Full Stack Development with AI — awarded on capstone completion" },
  { name: "Combo Completion Certificate", detail: "IGNITE or ASCEND track certificate, stack-specific" },
  { name: "Capstone Project Certificate", detail: "For every deployed, portfolio-ready capstone you ship" },
];

// ---------------------------------------------------------------------------
// Syllabus — the 13 core modules from the batch roadmap, condensed to the
// headline topics so the accordion stays scannable.
// ---------------------------------------------------------------------------
export const SYLLABUS_MODULES = [
  { n: 1, name: "HTML", detail: "Structure, forms, semantic HTML5, accessibility & responsive markup.", topics: ["Document structure & semantics", "Forms & input types", "Tables, media, accessibility", "Responsive HTML (picture, srcset)"] },
  { n: 2, name: "CSS", detail: "Styling, layout systems and modern responsive design.", topics: ["Box model, positioning, selectors", "Flexbox & CSS Grid", "Transitions, transforms, animations", "Responsive design, variables, dark mode"] },
  { n: 3, name: "Bootstrap", detail: "Rapid, responsive UI with a component-driven CSS framework.", topics: ["Grid system & utilities", "Navbar, cards, modals, carousel", "Forms & tables", "Mobile-first responsive patterns"] },
  { n: 4, name: "JavaScript", detail: "Core logic, DOM, and asynchronous programming.", topics: ["Variables, functions, closures", "DOM manipulation & events", "Promises, async/await, fetch API", "ES6+, JSON, error handling"] },
  { n: 5, name: "TypeScript", detail: "Type-safe JavaScript for larger, more reliable codebases.", topics: ["Types, interfaces, generics", "Classes & inheritance", "Utility types", "Typing DOM & React"] },
  { n: 6, name: "React JS", detail: "Component-driven single page applications.", topics: ["Components, props, state, hooks", "React Router & Context API", "Fetching data, custom hooks", "Performance & deployment"] },
  { n: 7, name: "Next.js", detail: "Production-grade React with SSR, routing & optimization.", topics: ["File-based routing & layouts", "Server vs client components", "API routes & data fetching", "Image/font optimization, deployment"] },
  { n: 8, name: "Python & Advanced Python", detail: "Programming fundamentals through OOP and beyond.", topics: ["Data types, control flow, functions", "OOP — classes, inheritance, polymorphism", "File handling & exceptions", "Iterators, generators, decorators"] },
  { n: 9, name: "Django + REST Framework", detail: "MVT web apps and REST APIs, connected to React/Next.js.", topics: ["Models, ORM, admin panel", "Forms, auth, sessions", "DRF serializers & viewsets", "JWT auth, CORS, connecting to frontend"] },
  { n: 10, name: "Java (Core + OOP)", detail: "Strongly-typed programming fundamentals & OOP.", topics: ["Data types, arrays, strings", "OOP — inheritance, polymorphism", "Collections framework", "Exception handling, generics, lambdas"] },
  { n: 11, name: "Spring Boot", detail: "Enterprise-grade REST APIs on the JVM.", topics: ["REST controllers & layered architecture", "Spring Data JPA", "Validation & exception handling", "Spring Security & JWT auth"] },
  { n: 12, name: "Node.js + Express", detail: "JavaScript on the backend — REST APIs & middleware.", topics: ["Routing, middleware, controllers", "Connecting MongoDB/SQL", "Error handling & validation", "JWT auth, connecting to frontend"] },
  { n: 13, name: "SQL, PostgreSQL & Deployment", detail: "Relational databases and shipping your app to production.", topics: ["Joins, aggregates, subqueries, transactions", "PostgreSQL — JSONB, indexes, window functions", "Git/GitHub, environment variables", "Deployment (Render/Vercel), Docker & CI/CD awareness"] },
];

// ---------------------------------------------------------------------------
// Capstone / practice projects, in build order.
// ---------------------------------------------------------------------------
export const PROJECTS = [
  { n: "01", name: "Blog Website", tech: "HTML", detail: "A multi-page blog with home, about, blog listing, blog detail and contact pages.", seed: "srikara-blog-html" },
  { n: "02", name: "Responsive Blog", tech: "CSS", detail: "The HTML blog restyled into a polished, fully responsive site.", seed: "srikara-blog-css" },
  { n: "03", name: "Dynamic Blog + Admin", tech: "JavaScript", detail: "Admin login, dynamic post creation and DOM-rendered content — no more static HTML.", seed: "srikara-blog-js" },
  { n: "Bonus", name: "Pricing Page", tech: "Bootstrap", detail: "A responsive 3-tier pricing page built with Bootstrap's grid, cards and utilities.", seed: "srikara-pricing" },
  { n: "04", name: "Personal Portfolio", tech: "React JS/Next JS", detail: "A component-based portfolio with routing, projects, skills and a contact form.", seed: "srikara-portfolio" },
  { n: "05", name: "Breakout Game", tech: "Python", detail: "A classic arcade game — paddle, ball physics, bricks, score and lives.", seed: "srikara-breakout" },
  { n: "06", name: "REST CRUD API", tech: "Django/Java/Express", detail: "A full CRUD product API, tested end-to-end with Postman.", seed: "srikara-api" },
  { n: "07", name: "Full Stack Capstone", tech: "React + Django/Java/Express + SQL/PostgreSQL", detail: "Role-based auth, admin/user modules, approval workflow — deployed frontend & backend.", seed: "srikara-fullstack" },
];

export const FAQS = [
  { q: "Do I need any prior coding experience?", a: "No. Every track starts from the absolute basics — HTML fundamentals — before building up to your chosen combo." },
  { q: "Is this course offline, online, or both?", a: "We run both live offline classroom batches and live online tracks. Pick whichever suits you when you book your demo." },
  { q: "What does CoHub give me access to?", a: "CoHub is our own learning platform — class recordings, assignments, capstone submissions and progress tracking, available for the duration of your access." },
  { q: "Which combo should I choose?", a: "If you're new to coding, start with the Frontend Combo. If you already know the basics and want a job-ready full stack skillset, pick a React/Next.js + backend combo." },
  { q: "Is placement support included?", a: "Resume & LinkedIn branding, mock interviews and placement guidance are included in the higher-tier combos — ask about it on your demo call." },
  { q: "Can I book a free demo before enrolling?", a: "Yes — fill in the form on this page or call us, and you can sit in on a live session before you commit." },
];

export const OFFLINE_COMBOS = [
  {
    id: "IGNITE",
    accent: "var(--cyan)",
    combo: "Combo 01",
    name: "IGNITE",
    tagline: "Frontend Development Launchpad",
    stack: "HTML + CSS + JavaScript/TypeScript + React + Next.js",
    price: "₹35,000",
    duration: "4 Months",
    cadence: "3 Hrs/Day • Offline Classroom",
    bullets: [
      "Capstones 1–4 (Blog → Portfolio, deployed)",
      "Software Manual Testing basics",
      "Introduction to Automation Testing",
      "Full LMS access included",
    ],
    modules: [
      { name: "HTML + CSS — Structure & Styling", hours: "52 hrs", output: "Capstones 1–2: HTML → CSS Blog" },
      { name: "JavaScript + TypeScript — Logic & Types", hours: "49 hrs", output: "Capstone 3: JS/TS Blog + Admin" },
      { name: "React JS — Hooks, Router, Context", hours: "25 hrs", output: "Capstone 4: Component Portfolio" },
      { name: "Next.js — Routing, SSR, Deployment", hours: "12 hrs", output: "Deployed Portfolio Site" },
      { name: "Software Manual Testing Basics", hours: "20 hrs", output: "Test Cases + Bug Reports" },
      { name: "Intro to Automation Testing (AI)", hours: "15 hrs", output: "Automation Concepts Walkthrough" },
    ],
    totalHours: "≈173 Core Hrs + Recap/Mentor Sessions",
    roles: ["Frontend Developer", "QA / Manual Tester"],
  },
  {
    id: "ASCEND",
    accent: "var(--violet)",
    combo: "Combo 02",
    name: "ASCEND",
    tagline: "Full Stack AI Engineering Accelerator",
    stack: "React/Next.js + Django/Java/Node + SQL/PostgreSQL",
    price: "₹45,000",
    duration: "5 Months",
    cadence: "3 Hrs/Day • Offline Classroom",
    bullets: [
      "6 stack combinations — Capstones 5–7 + deployment",
      "Playwright AI automation testing",
      "AI tools + build-with-AI websites",
      "Placement training sessions",
    ],
    subcombos: [
      { name: "React + Django Pro", frontend: "React", backend: "Django" },
      { name: "React + Java Pro", frontend: "React", backend: "Java Spring Boot" },
      { name: "React + Node Pro", frontend: "React", backend: "Node/Express" },
      { name: "Next.js + Django Pro", frontend: "Next.js", backend: "Django" },
      { name: "Next.js + Java Pro", frontend: "Next.js", backend: "Java Spring Boot" },
      { name: "Next.js + Node Pro", frontend: "Next.js", backend: "Node/Express" },
    ],
    capstones: [
      { n: "05", name: "Backend REST API", detail: "Full CRUD RESTful API on your chosen stack (Django / Java / Node), tested end-to-end." },
      { n: "06", name: "Full Stack Integration", detail: "React/Next.js + backend + SQL/PostgreSQL — auth, roles, CRUD, approval workflow." },
      { n: "07", name: "AI-Tested Deployment", detail: "Playwright + AI automation test suite covering your app, then live deployment." },
    ],
    roles: ["Full Stack Developer", "AI-Powered Developer", "Automation Test Engineer", "Junior Software Engineer"],
  },
];

export const INCLUDED_MATRIX = [
  { label: "1-Year LMS Access", ignite: true, ascend: true },
  { label: "AI Coding Assistant", ignite: true, ascend: true },
  { label: "Manual Testing Basics", ignite: true, ascend: true },
  { label: "Automation Testing (Intro → AI/Playwright)", ignite: "Intro only", ascend: "Full — Playwright + AI" },
  { label: "AI Tools for Developers", ignite: false, ascend: true },
  { label: "Build Website Using AI", ignite: false, ascend: true },
  { label: "Weekly Coding Contests", ignite: false, ascend: true },
  { label: "Placement Training Sessions", ignite: false, ascend: true },
  { label: "Resume & LinkedIn Branding", ignite: true, ascend: true },
];

export const AI_TRACK_OPTIONS = [
  {
    id: "FRONTEND_STARTER",
    accent: "var(--cyan)",
    label: "Option 01",
    name: "Frontend Starter",
    stack: "HTML + CSS + JS + React",
    price: "₹3,400",
    duration: "116 Hrs • 7 Weeks",
    bullets: ["Short quiz after every module", "Testing: UI Basics", "2 Free Recorded Courses"],
    testingFocus: "Manual UI testing basics — browser dev tools, checklists & simple accessibility checks.",
  },
  {
    id: "FRONTEND_PRO",
    accent: "var(--violet)",
    label: "Option 02",
    name: "Frontend Pro + Next.js",
    stack: "+ Bootstrap, TypeScript, Next.js",
    price: "₹4,450",
    duration: "168 Hrs • 10 Weeks",
    bullets: ["Capstone Projects 1 – 5", "Testing: UI Automation", "3 Free Recorded Courses"],
    testingFocus: "Hands-on test writing with Jest/RTL and automated UI checks built into each capstone.",
  },
  {
    id: "FULL_STACK_AI",
    accent: "var(--amber)",
    label: "Option 03",
    name: "Full Stack + AI",
    stack: "React/Next.js + Django/Node/Java",
    price: "₹5,450",
    duration: "206 Hrs • 12 Weeks",
    bullets: ["Capstone Projects 6 & 7", "Testing: Complete w/ Playwright", "5 Free Recorded Courses"],
    testingFocus: "End-to-end automation with Playwright — cross-browser testing, CI integration, real QA workflows.",
    featured: true,
  },
];

export const FREE_COURSES = [
  { name: "Job Readiness Program", hours: "4 hrs", scope: "All Options" },
  { name: "Resume Building & LinkedIn Branding", hours: "6 hrs", scope: "All Options" },
  { name: "Communication & Soft Skills", hours: "30 hrs", scope: "Option 02 & 03" },
  { name: "Weekly Coding Contests", hours: "10 hrs", scope: "Option 03 only" },
  { name: "Mock Interviews & GD Preparation", hours: "12 hrs", scope: "Option 03 only" },
];

export const CAPSTONE_TRACK = [
  { n: "01", name: "HTML Blog", detail: "Semantic structure & accessibility fundamentals.", tier: "Opt 02" },
  { n: "02", name: "Responsive Blog", detail: "Bootstrap fluid grids for mobile-first design.", tier: "Opt 02" },
  { n: "03", name: "JS Blog", detail: "DOM manipulation, events, dynamic rendering.", tier: "Opt 02" },
  { n: "04", name: "React Portfolio", detail: "Component-driven personal brand site.", tier: "Opt 02" },
  { n: "05", name: "Next.js App", detail: "SSR, routing & production deployment.", tier: "Opt 02" },
  { n: "06", name: "API Project", detail: "Backend routing, ORM models, REST endpoints.", tier: "Opt 03" },
  { n: "07", name: "Full Stack App", detail: "React frontend + Django/Node backend, deployed.", tier: "Opt 03" },
];

export const CAREER_ROLES = [
  { title: "Frontend Developer", detail: "Build responsive, accessible, component-driven UIs.", tags: ["HTML/CSS", "JS", "React"] },
  { title: "Backend Developer", detail: "Design APIs, models & server logic that power an app.", tags: ["Node/Express", "Django", "Spring Boot"] },
  { title: "Full Stack Developer", detail: "Own the entire product, from database to browser.", tags: ["React", "Django", "SQL"] },
  { title: "AI-Powered Developer", detail: "Ship faster with AI as your coding partner.", tags: ["Gen AI", "React", "Node.js"] },
  { title: "Automation Test Engineer", detail: "Build RESTful services and automate testing with Playwright.", tags: ["REST API", "Playwright", "CI/CD"] },
  { title: "Junior Software Engineer", detail: "Enter product companies with a portfolio of deployed work.", tags: ["Git", "Deployment", "Portfolio"] },
];

