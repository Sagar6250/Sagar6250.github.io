export const personal = {
    name: "Sagar Subbaraya",
    location: "Tempe, AZ",
    email: "sagarsoff@gmail.com",
    phone: "(201) 668-5452",
    linkedin: "https://www.linkedin.com/in/s-sagars", // Update with your actual URL
    github: "https://github.com/Sagar6250", // Update with your actual URL
    tagline: "MS Computer Science @ ASU · Full-Stack & AI/ML Engineer",
    about: "I build full-stack applications and AI-powered systems, with a focus on clean architecture, real-world impact, and thoughtful UX. Currently shipping features on a clinical research dashboard at the University of Pittsburgh.",
    summary: "",
};

export const education = [
    {
        school: "Arizona State University",
        location: "Tempe, AZ",
        degree: "Master of Science in Computer Science",
        gpa: "3.81 / 4.00",
        icon: "/portfolio/src/assets/asu.png",
    },
    {
        school: "Visvesvaraya Technological University",
        location: "Belagavi, India",
        degree: "Bachelor of Engineering (Honors) in Computer Science",
        gpa: "3.54 / 4.00",
        icon: "/portfolio/src/assets/vtu.png",
    },
];
const DI = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons";
export const skills = {
    Languages: [
        { name: "Python", icon: `${DI}/python/python-original.svg` },
        { name: "Java", icon: `${DI}/java/java-original.svg` },
        { name: "C/C++", icon: `${DI}/cplusplus/cplusplus-original.svg` },
        {
            name: "TypeScript",
            icon: `${DI}/typescript/typescript-original.svg`,
        },
        {
            name: "JavaScript",
            icon: `${DI}/javascript/javascript-original.svg`,
        },
        { name: "Dart", icon: `${DI}/dart/dart-original.svg` },
        { name: "SQL", icon: `${DI}/mysql/mysql-original.svg` },
        { name: "HTML/CSS", icon: `${DI}/html5/html5-original.svg` },
    ],
    Frontend: [
        { name: "React.js", icon: `${DI}/react/react-original.svg` },
        { name: "Next.js", icon: `${DI}/nextjs/nextjs-original.svg` },
        { name: "Flutter", icon: `${DI}/flutter/flutter-original.svg` },
        { name: "Streamlit", icon: `${DI}/streamlit/streamlit-original.svg` },
    ],
    "Backend & APIs": [
        { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
        { name: "RESTful APIs", icon: null },
        { name: "Express.js", icon: `${DI}/express/express-original.svg` },
        { name: "CI/CD", icon: null },
    ],
    "Cloud & DevOps": [
        {
            name: "AWS (EC2, S3, CloudFront)",
            icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
        },
        { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
        { name: "Git", icon: `${DI}/git/git-original.svg` },
        { name: "GitHub", icon: `${DI}/github/github-original.svg` },
    ],
    Databases: [
        { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
        { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
        {
            name: "PostgreSQL",
            icon: `${DI}/postgresql/postgresql-original.svg`,
        },
        {
            name: "Firebase Firestore",
            icon: `${DI}/firebase/firebase-original.svg`,
        },
    ],
    "AI / ML": [
        { name: "PyTorch", icon: `${DI}/pytorch/pytorch-original.svg` },
        {
            name: "TensorFlow",
            icon: `${DI}/tensorflow/tensorflow-original.svg`,
        },
        { name: "Keras", icon: `${DI}/keras/keras-original.svg` },
        {
            name: "Scikit-Learn",
            icon: `${DI}/scikitlearn/scikitlearn-original.svg`,
        },
        { name: "Pandas", icon: `${DI}/pandas/pandas-original.svg` },
        { name: "NumPy", icon: `${DI}/numpy/numpy-original.svg` },
    ],
    Tools: [
        { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
        { name: "Jira", icon: `${DI}/jira/jira-original.svg` },
        { name: "Notion", icon: `${DI}/notion/notion-original.svg` },
        { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
        { name: "IntelliJ", icon: `${DI}/intellij/intellij-original.svg` },
        { name: "Figma", icon: `${DI}/figma/figma-original.svg` },
    ],
};

export const experience = [
    {
        company: "Mobile Sensing + Health Institute, Univ. of Pittsburgh",
        role: "Software Developer",
        period: "Feb 2026 – Present",
        location: "Pittsburgh, PA",
        tags: ["React", "Node.js", "REST APIs", "MySQL", "AWS"],
        bullets: [
            "Shipped 10+ frontend and backend features on a clinical research dashboard, including paginated navigation, sortable columns, and device-aware sync warnings for Fitbit/MobileTrack users.",
            "Cut runtime errors by 30% by diagnosing broken auth flows, malformed API responses, and race conditions via server log analysis.",
            "Reduced client-side errors by 25% by refactoring async state management — replacing promise chains with structured async/await and fixing stale-closure bugs in React hooks.",
            "Improved page load performance by 15–20% via debounced API calls, context-based state, and memoized computations.",
            "Resolved data integrity issues: fixed compliance calculation bugs, eliminated duplicate records, and implemented automatic access token revocation post study end-date.",
        ],
        description:
            "Shipped frontend and backend features across a clinical research dashboard using React, Node.js, and MySQL on AWS, supporting study administrators managing Fitbit and MobileTrack health data. Diagnosed production defects, refactored async state management, and optimized data-fetching pipelines to cut runtime errors by 30% and improve page load performance by 15–20%.",
    },
    {
        company: "Integra Micro Software Services",
        role: "Frontend Developer Intern",
        period: "Feb 2024 – May 2024",
        location: "Bengaluru, India",
        tags: ["React", "TypeScript", "MUI", "CSS", "MongoDB"],
        bullets: [
            "Built modular React components with TypeScript and MUI; improved click-through rate by 12% and session duration by 8%.",
            "Integrated frontend logic with REST APIs and MongoDB for dynamic content rendering.",
            "Implemented responsive layouts using CSS Grid and MUI breakpoints, cutting bounce rate by 40% on sub-768px screens.",
        ],
        description:
            "Developed modular React components with TypeScript and MUI, and integrated REST APIs with MongoDB for dynamic content rendering across enterprise dashboards. Architected responsive layouts using CSS Grid and MUI's breakpoint system, reducing bounce rate by 40% and improving click-through rate by 12% across device breakpoints.",
    },
    {
        company: "Parheeksha Business Plugger Pvt. Ltd.",
        role: "Software Developer Intern",
        period: "Aug 2023 – Sept 2023",
        location: "Bengaluru, India",
        tags: ["React", "Node.js", "AWS", "SEO"],
        bullets: [
            "Built e-commerce features (product catalog, shopping cart, checkout) contributing to a 30% increase in conversion rates.",
            "Deployed scalable backend on AWS and implemented SEO strategies, boosting organic traffic by 60% and revenue by 25%.",
        ],
        description:
            "Built and optimized e-commerce features including a dynamic product catalog, interactive shopping cart, and secure checkout using React, JavaScript, and Node.js, contributing to a 30% increase in conversion rates. Deployed scalable backend services on AWS and implemented SEO strategies, driving a 60% boost in organic traffic and a 25% increase in overall store revenue.",
    },
];

export const projects = [
    {
        title: "TrustMed AI",
        subtitle: "Healthcare RAG Chatbot",
        year: "2026",
        tags: [
            "Python",
            "PostgreSQL",
            "PGVector",
            "BioBERT",
            "MedCPT",
            "Ollama",
        ],
        image: "/portfolio/src/assets/trustmedai.png",
        description:
            "RAG pipeline ingesting ~100MB of medical data (Mayo Clinic, WebMD, WHO) with semantic chunking via BioBERT and MedCPT embeddings. Benchmarked 3 LLMs via blind user testing; Gemma 4 26B preferred by 11/15 users. Safety guardrails prevent hallucination.",
    },
    {
        title: "LLM as a Judge",
        subtitle: "Coding Task Evaluation",
        year: "2025",
        tags: ["Python", "HuggingFace", "OpenAI API", "Pandas"],
        image: "/portfolio/src/assets/llmjudge.png",
        description:
            "Adversarial evaluation pipeline for code understanding beyond unit tests. Achieved 81% judgment accuracy across 500+ evaluation pairs. Systematically analyzed position bias, bandwagon bias, and chain-of-thought reliability.",
    },
    {
        title: "Chest X-Ray Segmentation",
        subtitle: "Medical Imaging AI",
        year: "2025",
        tags: ["PyTorch", "UNet++", "ResNet-50", "Python"],
        image: "/portfolio/src/assets/cxrseg.png",
        description:
            "High-resolution lesion segmentation using UNet++ with ResNet-50 encoder. Achieved Dice coefficient of 0.8349, surpassing baseline UNet (0.79) and matching state-of-the-art on ChestX-Det.",
    },
    {
        title: "Monocular Depth Estimation",
        subtitle: "Computer Vision",
        year: "2025",
        tags: ["PyTorch", "SegNet", "TensorBoard", "Python"],
        image: "/portfolio/src/assets/monodepth.png",
        description:
            "Depth estimation model on NYUDepthv2 with attention mechanisms, SSIM+L1 loss, and transfer learning. Achieved δ1 accuracy of 0.998 and AbsRel loss of 0.0188.",
    },
    // {
    //     title: "Enchante",
    //     subtitle: "Full-Stack E-Commerce",
    //     year: "2025",
    //     tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    //     description:
    //         "Full-stack e-commerce catalog with dynamic listings, category filtering, and real-time inventory updates. RESTful backend with schema-validated models and responsive CSS Grid/Flexbox UI.",
    // },
    // {
    //     title: "SolX",
    //     subtitle: "Solar Energy Blockchain",
    //     year: "2023",
    //     tags: ["Solidity", "Web3.js", "React.js", "Ethereum"],
    //     description:
    //         "Decentralized P2P solar energy trading platform with smart contracts for transparent, tamper-proof trade records. Real-time dashboard bridging on-chain data with an accessible UI.",
    // },
];
