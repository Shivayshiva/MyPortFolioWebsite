export const portfolioData = {
  personal: {
    name: "Prashant Kumar Madheshiya",
    title: "Senior Software Engineer",
    subtitle: "Frontend Architect · React/Next.js Specialist · Performance Engineer",
    phone: "+91-8505840560",
    email: "prashantmaddheshiya@gmail.com",
    location: "Noida, INDIA",
    experience: "4 Years 5 Months",
    linkedin: "https://www.linkedin.com/in/prashant-maddheshiya-88900b69/",
    github: "https://github.com/prashantmaddheshiya",
    summary:
      "Senior Software Engineer with 4+ years of experience building scalable, secure, and high-performance SaaS applications using React.js, Next.js (App Router, SSR, SSG, ISR), JavaScript (ES6+), and TypeScript. Strong expertise in component-driven architecture, Redux Toolkit, RTK Query, REST API integration, JWT/OAuth-based authentication (RBAC), and real-time features with WebSockets. Experienced in performance optimization (code splitting, lazy loading, dynamic imports, bundle optimization, Core Web Vitals), responsive and accessible (WCAG) UI development using Tailwind CSS, ShadCN UI, and Material UI.",
  },

 skills: {
  frontend: [
    "React.js",
    "Next.js (App Router, SSR, SSG, ISR, Server Components)",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "ShadCN UI",
    "Material UI",
    "Redux Toolkit",
    "RTK Query",
    "React Router v6"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "WebSockets",
    "Socket.io",
    "JWT Authentication",
    "OAuth 2.0",
    "Role-Based Access Control (RBAC)"
  ],
  databases: [
    "MongoDB"
  ],
  tools: [
    "Git",
    "Docker",
    "Webpack",
    "Vite",
    "Turbopack",
    "ESLint",
    "Jest",
    "React Testing Library",
    "GitHub Actions",
    "Vercel",
    "AWS",
    "Lighthouse"
  ],
  concepts: [
    "Component-Driven Architecture",
    "Dynamic Routing",
    "Performance Optimization",
    "Code Splitting",
    "Lazy Loading",
    "Dynamic Imports",
    "Memoization",
    "Tree Shaking",
    "Bundle Optimization",
    "Core Web Vitals (LCP, CLS, TBT)",
    "WCAG Accessibility",
    "Responsive Design",
    "SEO Optimization",
    "CI/CD",
    "Agile/Scrum"
  ]
},

  experience: [
    {
      company: "Radiant Infonet",
      role: "Senior Software Engineer",
      duration: "Apr 2024 - Dec 2025",
      period: "1 Year 8 Months",
      type: "Full-time",
      logo: "RI",
      color: "#00D4FF",
      highlights: [
        "Developed scalable, SEO-optimized enterprise SaaS applications using React.js, Next.js (App Router, SSR, SSG, Server Components), JavaScript (ES6+), and TypeScript, supporting 10K+ active users and improving overall platform scalability by 30%.",
        "Architected reusable, component-driven frontend modules and internal design systems using Tailwind CSS, ShadCN UI, and Material UI, reducing UI development time by 25% and ensuring WCAG-compliant, cross-browser compatible interfaces.",
        "Implemented secure authentication and authorization (JWT, OAuth, RBAC) and integrated RESTful APIs and WebSocket-based real-time features using Redux Toolkit and RTK Query, reducing unauthorized access risks by 40% and improving data-fetching efficiency by 20%.",
        "Led performance optimization initiatives including code splitting, dynamic imports, lazy loading, memoization, tree shaking, and bundle analysis, improving Core Web Vitals (LCP, CLS, TBT) scores by 30% and reducing page load time by 25%.",
        "Introduced unit and integration testing using Jest and React Testing Library, increasing code coverage to 70%+ and reducing production defects by 20%.",
        "Contributed to CI/CD automation using GitHub Actions and Docker-based deployments on Vercel/AWS, decreasing release cycles by 30% and improving deployment reliability.",
        "Led frontend architectural decisions and mentored 2–3 junior developers, enforcing coding standards and best practices.",
      ],
      projects: ["Digital Banking & Financial Operations Platform", "Testa - Skill Assessment Platform", "Navankur - Farming Application", "QR-Tracking System"],
    },
    {
      company: "HCLTech",
      role: "Software Engineer",
      duration: "Aug 2020 - Apr 2023",
      period: "2 Years 8 Months",
      type: "Full-time",
      logo: "HCL",
      color: "#7B61FF",
      highlights: [
        "Developed and maintained large-scale banking and financial web applications serving 100K+ users using React.js (ES6+), HTML5, and CSS3, ensuring high availability and production reliability in enterprise environments.",
        "Built reusable, scalable UI components and data-driven dashboards; implemented complex dynamic forms with real-time validation, reducing transaction processing errors by 25% and improving workflow efficiency by 20%.",
        "Integrated RESTful APIs using React, Redux, and Axios; optimized rendering performance through memoization, component lifecycle optimization, and efficient state management, reducing UI latency by 30%.",
        "Ensured cross-browser compatibility, responsive design, and WCAG accessibility compliance, improving accessibility audit scores and enhancing user experience across desktop and mobile platforms.",
        "Participated in code reviews, defect resolution, and performance tuning, contributing to a 20% reduction in production issues.",
        "Collaborated with cross-functional teams in Agile/Scrum environments, supporting continuous integration workflows.",
      ],
      projects: ["Banking Portal — Joint Account & Fee Management"],
    },
  ],

  // Official Work Projects (contributed professionally)
  officialProjects: [
    {
      title: "Digital Banking & Financial Operations Platform",
      company: "HCLTech",
      duration: "12 Months",
      category: "FinTech",
      status: "Production",
      impact: "100K+ users",
      description:
        "A unified Joint Account Management and Fee & Tax Reclamation Platform serving 100K+ users, enabling investment tracking, transaction monitoring, savings management, and secure clawback processing using React.js.",
      tech: ["React.js", "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3", "RESTful APIs", "JWT", "RBAC", "Axios"],
      highlights: [
        "Built real-time, data-driven dashboards and secure form-based workflows with dynamic validations, optimized state management, memoization, and efficient API handling, reducing transaction processing time by 30%.",
        "Implemented scalable, reusable component-driven architecture with performance optimizations (code splitting, lazy loading, bundle optimization, Lighthouse audits), ensuring WCAG-compliant UI, cross-browser compatibility.",
        "Improved overall user workflow efficiency by 20% through complex dynamic forms with real-time validation and smart error handling.",
      ],
      metrics: { users: "100K+", timeReduction: "30%", workflowGain: "20%" },
    },
    {
      title: "Testa - Skill Assessment Platform",
      company: "Radiant Infonet",
      duration: "6 Months",
      category: "EdTech · SaaS",
      status: "Production",
      impact: "10K+ concurrent users",
      description:
        "A scalable SaaS-based Online Examination System supporting 10K+ concurrent users with exam lifecycle management — creation, scheduling, auto-evaluation, and result processing — built on Next.js SSR/SSG.",
      tech: ["React.js", "Next.js (SSR/SSG)", "TypeScript", "Tailwind CSS", "ShadCN UI", "RESTful APIs", "RBAC", "JWT/OAuth"],
      highlights: [
        "Engineered a modular, component-driven frontend architecture with RBAC (JWT/OAuth) reducing unauthorized access risks by 40%.",
        "Built real-time analytics dashboards with performance optimization techniques (code splitting, lazy loading, memoization, Lighthouse audits), increasing Core Web Vitals scores by 30% and reducing page load time by 25%.",
        "Improved platform scalability by 35% through SSR/SSG rendering strategies and efficient state management.",
      ],
      metrics: { scalability: "35%↑", pageLoadGain: "25%↓", accessRisk: "40%↓" },
    },
    {
      title: "Navankur - Farming Application",
      company: "Radiant Infonet",
      duration: "5 Months",
      category: "AgriTech · SaaS",
      status: "Production",
      impact: "Gov. stakeholders + 1000s of farmers",
      description:
        "A scalable AgriTech SaaS platform connecting farmers, traders, markets, and government stakeholders, improving operational efficiency by 30% through centralized data management and real-time reporting.",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "RESTful APIs", "Next.js", "Tailwind CSS", "ShadCN UI"],
      highlights: [
        "Built real-time, role-based data-driven dashboards using Redux Toolkit and RESTful API integration, enhancing data accuracy and user engagement by 30%.",
        "Designed responsive, mobile-first UI optimizing performance for large datasets and complex dashboards, reducing rendering latency by 25%.",
      ],
      metrics: { efficiency: "30%↑", latency: "25%↓" },
    },
    {
      title: "QR-Tracking System",
      company: "Radiant Infonet",
      duration: "3 Months",
      category: "Logistics · Operations",
      status: "Production",
      impact: "Multi-location tracking",
      description:
        "An end-to-end QR Code Tracking System enabling real-time product and asset traceability across multiple locations, improving tracking accuracy by 30% with high-frequency scanning workflows.",
      tech: ["React.js", "TypeScript", "Redux Toolkit", "React Router v6", "Tailwind CSS", "ShadCN UI", "RESTful APIs"],
      highlights: [
        "Built role-based interactive dashboards integrating RESTful APIs for scan history, inventory status, and operational analytics.",
        "Implemented scalable QR code generation and high-frequency scanning workflows, optimizing frontend performance and reducing page load time by 25%.",
      ],
      metrics: { trackingAccuracy: "30%↑", pageLoad: "25%↓" },
    },
  ],

  // Personal / Side Projects
  // personalProjects: [
  //   {
  //     title: "DevConnect — Developer Social Platform",
  //     year: "2024",
  //     status: "In Progress",
  //     category: "Full Stack",
  //     description:
  //       "A real-time social networking platform for developers to share code snippets, projects, and connect with peers. Features live collaboration, post reactions, threaded comments, and developer profiles with skill showcases.",
  //     tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB", "Express", "Tailwind CSS", "JWT", "Redux Toolkit"],
  //     github: "https://github.com/prashantmaddheshiya/devconnect",
  //     demo: null,
  //     features: [
  //       "Real-time messaging and notifications using Socket.io WebSockets",
  //       "Code snippet sharing with syntax highlighting and forking",
  //       "JWT-based authentication with GitHub OAuth integration",
  //       "Responsive feed with infinite scrolling and optimistic UI updates",
  //     ],
  //     icon: "🔗",
  //     color: "#00D4FF",
  //   },
  //   {
  //     title: "TaskFlow — Kanban Project Manager",
  //     year: "2024",
  //     status: "Completed",
  //     category: "Productivity · React",
  //     description:
  //       "A feature-rich drag-and-drop Kanban board inspired by Trello/Jira, built entirely in React with advanced state management. Supports multi-board workspaces, custom workflows, due dates, and member assignments.",
  //     tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "React DnD", "Local Storage API"],
  //     github: "https://github.com/prashantmaddheshiya/taskflow",
  //     demo: "https://taskflow-demo.vercel.app",
  //     features: [
  //       "Drag-and-drop cards across columns using React DnD with animated transitions",
  //       "Persistent state with local storage sync and undo/redo history",
  //       "Custom color-coded labels, priority levels, and deadline reminders",
  //       "Dark/light theme toggle with smooth CSS transitions",
  //     ],
  //     icon: "📋",
  //     color: "#7B61FF",
  //   },
  //   {
  //     title: "CryptoTracker — Live Crypto Dashboard",
  //     year: "2023",
  //     status: "Completed",
  //     category: "Data Visualization",
  //     description:
  //       "A real-time cryptocurrency tracking dashboard fetching live data from CoinGecko API. Features interactive price charts, portfolio watchlists, percentage change indicators, and market cap rankings.",
  //     tech: ["React.js", "JavaScript (ES6+)", "Chart.js", "CoinGecko API", "Tailwind CSS", "React Query"],
  //     github: "https://github.com/prashantmaddheshiya/crypto-tracker",
  //     demo: "https://crypto-track-demo.vercel.app",
  //     features: [
  //       "Live price updates with WebSocket-like polling every 30 seconds",
  //       "Interactive line/candlestick charts with 7/30/90-day historical data",
  //       "Custom watchlist with localStorage persistence and portfolio P&L calculation",
  //       "Search, filter, and sort across 100+ cryptocurrencies",
  //     ],
  //     icon: "📈",
  //     color: "#00FF9D",
  //   },
  //   {
  //     title: "WeatherNow — Modern Weather App",
  //     year: "2023",
  //     status: "Completed",
  //     category: "API Integration",
  //     description:
  //       "A beautiful weather application with location-based forecasts, hourly/weekly predictions, and animated weather condition visuals. Built with Next.js for SSR and OpenWeatherMap API integration.",
  //     tech: ["Next.js", "TypeScript", "OpenWeatherMap API", "Framer Motion", "Tailwind CSS", "Geolocation API"],
  //     github: "https://github.com/prashantmaddheshiya/weather-now",
  //     demo: "https://weather-now-demo.vercel.app",
  //     features: [
  //       "Auto-detect user location via browser Geolocation API",
  //       "7-day extended forecast with animated condition icons",
  //       "SSR for initial load performance and SEO",
  //       "Smooth Framer Motion transitions between weather states",
  //     ],
  //     icon: "🌤",
  //     color: "#FFB347",
  //   },
  //   {
  //     title: "CodeEditor — Browser-based IDE",
  //     year: "2023",
  //     status: "Completed",
  //     category: "Dev Tools",
  //     description:
  //       "A lightweight in-browser code editor supporting HTML, CSS, and JavaScript with live preview. Features syntax highlighting, auto-complete hints, multiple tabs, and shareable snippet URLs.",
  //     tech: ["React.js", "CodeMirror", "JavaScript", "CSS3", "iFrame sandbox", "URL State"],
  //     github: "https://github.com/prashantmaddheshiya/code-editor",
  //     demo: "https://codeeditor-demo.vercel.app",
  //     features: [
  //       "Live preview with sandboxed iFrame execution environment",
  //       "Syntax highlighting and basic auto-complete via CodeMirror",
  //       "Multi-tab editor for HTML, CSS, JS with synchronized preview",
  //       "Share snippets via URL-encoded state parameters",
  //     ],
  //     icon: "⌨️",
  //     color: "#FF6B6B",
  //   },
  //   {
  //     title: "PortfolioGen — AI Portfolio Builder",
  //     year: "2022",
  //     status: "Completed",
  //     category: "AI · Next.js",
  //     description:
  //       "A Next.js web app that lets developers generate a fully customizable portfolio site by filling in a form. Outputs a ready-to-deploy static site with multiple themes, component swapping, and one-click Vercel deploy.",
  //     tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Vercel API", "SSG"],
  //     github: "https://github.com/prashantmaddheshiya/portfolio-gen",
  //     demo: null,
  //     features: [
  //       "Form-based portfolio builder with 5 pre-built theme templates",
  //       "Live theme preview before exporting or deploying",
  //       "One-click deployment to Vercel via API integration",
  //       "SSG-based output for maximum performance and SEO",
  //     ],
  //     icon: "🎨",
  //     color: "#E040FB",
  //   },
  // ],


  personalProjects: [
    {
      title: "Sirsa Ecommerce — Multi-Vendor Platform",
      year: "2025",
      status: "In Progress",
      category: "Full Stack · E-Commerce",
      description:
        "A scalable multi-vendor e-commerce platform supporting product management, cart, secure checkout, order tracking, and admin analytics dashboard. Designed for performance, SEO, and modular growth.",
      tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe/Razorpay", "Redux Toolkit", "Tailwind CSS"],
      github: null,
      demo: null,
      features: [
        "Multi-vendor product management with role-based dashboards",
        "Secure authentication and payment gateway integration",
        "Cart, wishlist, coupon system, and order tracking",
        "Admin analytics dashboard with sales reports and inventory insights"
      ],
      icon: "🛒",
      color: "#FF8C42",
    },
    {
      title: "Sirsa Foundation — Fundraising & Social Support App",
      year: "2024",
      status: "Completed",
      category: "Social Impact · Full Stack",
      description:
        "A donation and fundraising application supporting old-age homes and social welfare initiatives. Includes transparent campaign tracking, secure donations, and volunteer management features.",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "Razorpay/Stripe", "JWT", "Tailwind CSS"],
      github: null,
      demo: null,
      features: [
        "Secure online donation system with payment gateway integration",
        "Campaign creation and real-time donation progress tracking",
        "Admin dashboard for managing funds, donors, and beneficiaries",
        "Volunteer registration and event coordination module"
      ],
      icon: "🤝",
      color: "#00C49A",
    },
    {
      title: "School Management SaaS — Multi-Tenant Platform",
      year: "2025",
      status: "In Progress",
      category: "SaaS · Enterprise",
      description:
        "A SaaS-based school management system with multi-tenant architecture, enabling schools to manage students, staff, attendance, fees, exams, and communication through isolated tenant environments.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "JWT", "Role-Based Access Control", "Redux Toolkit"],
      github: null,
      demo: null,
      features: [
        "Multi-tenant architecture with tenant-level data isolation",
        "Role-based access control (Admin, Teacher, Student, Parent)",
        "Attendance, exam results, and fee management modules",
        "Real-time notifications and parent-teacher communication system"
      ],
      icon: "🏫",
      color: "#4E73DF",
    },
    {
      title: "LetsChat — Real-Time Messaging App",
      year: "2024",
      status: "Completed",
      category: "Real-Time · Communication",
      description:
        "A real-time chat application supporting one-to-one messaging, online presence, typing indicators, and media sharing. Built with WebSocket architecture for low-latency communication.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT", "Express", "Tailwind CSS"],
      github: null,
      demo: null,
      features: [
        "One-to-one real-time messaging using WebSockets",
        "Typing indicators and online/offline presence tracking",
        "Image/file sharing with secure upload handling",
        "Authentication with JWT and protected chat routes"
      ],
      icon: "💬",
      color: "#20C997",
    }
  ],
  education: {
    degree: "B.Tech/B.E.",
    field: "Mechanical Engineering",
    college: "Inderprastha Engineering College, Ghaziabad",
    year: "2018",
    grade: "7.5/10",
  },
};
