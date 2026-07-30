export const projectsArr = [
  {
    id: "01",
    photo: "/images/freelancers-desk.png",
    title: "Freelancer Dashboard",
    category: "Full-Stack Application",
    description:
      "A full-stack freelancer management dashboard built with Next.js and Supabase. Features secure multi-user authentication with row-level security, client and project management with dynamic priority tracking, task management across projects, and an earnings analytics dashboard with monthly revenue charts. Built with a production-grade architecture — persistent PostgreSQL database, protected API routes, and responsive design with a sidebar on desktop and top navigation on mobile. Live and deployed on Vercel.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL", "Recharts"],
    liveLink: "https://freelancers-desk.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/FreelancerDesk",
  },
  {
    id: "02",
    photo: "/images/movue.png",
    title: "Movue",
    category: "Web Application / Integration",
    description:
      "Movue is a full-stack movie discovery platform built with React and Express, powered by the TMDB API and AI recommendations. It lets users explore trending, top-rated, and genre-based movies, view detailed information, watch trailers, and find streaming providers. It also features an AI concierge that suggests movies based on user prompts, delivering a personalized and modern movie browsing experience",
    tags: ["React.js", "Express.js", "Supabase", "Tailwind CSS"],
    liveLink: "https://movue-woad.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/Movue",
  },
    {
    id: "03",
    photo: "/images/newsletter.png",
    title: "Newsletter Service",
    category: "Full-Stack Project",
    description:
      "A modern newsletter subscription application built with Next.js, TypeScript, and Tailwind CSS. Users can securely subscribe using their email address, with server-side validation powered by Zod, subscriber data stored in Supabase (PostgreSQL), and automatic welcome emails delivered through Resend. The application follows a secure architecture by handling all database operations and email delivery on the server, preventing exposure of sensitive credentials while providing a smooth user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
    liveLink: "https://newsletter-service-lemon.vercel.app/",
    githubLink: "https://github.com/Gaius-codes/newsletter-service",
  },
  {
    id: "04",
    photo: "/images/devlog.png",
    title: "DevLog",
    category: "Full-Stack Application",
    description:
      "DevLog is a fullstack developer journaling app built with React, Tailwind, and Express. It showcases API design, monorepo structure, and real-world deployment using Render and Vercel — part of my transition from frontend to fullstack development.",
    tags: ["React.js", "Express.js", "Tailwind CSS"],
    liveLink: "https://devlog-drab-psi.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/devlog-fullstack",
  },
  {
    id: "05",
    photo: "/images/tim.png",
    title: "Tim Creative",
    category: "Front-End Application",
    description:
      "A sleek, modern portfolio site built with React and Tailwind CSS, showcasing a clean design, smooth animations, and a focus on performance. It’s a digital canvas that brings creativity to life, blending form and function into a seamless user experience.",
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://timcreative.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/Tim-Concept",
  },
  {
    id: "06",
    photo: "/images/watch.png",
    title: "Luxury Watch E-commerce Site",
    category: "Front-End Application",
    description:
      "A luxury watch shop built with React and Tailwind CSS, blending performance and design into a smooth, elegant experience. Every scroll, hover, and transition mirrors the precision and polish of the timepieces themselves.",
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://luxury-watch-shop-neon.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/luxury-watch-shop",
  },

  {
    id: "07",
    photo: "/images/neura.png",
    title: "NeuraFlow",
    category: "Front-End Application",
    description:
      "NeuraFlow is a modern AI SaaS landing page built with React, Tailwind CSS, and Framer Motion. It features smooth animations, a cinematic AI demo, and a dynamic dashboard preview, all designed to replicate a real-world product experience with a focus on performance and clean UI.",
    tags: ["React.js", "Tailwind CSS"],
    liveLink: "https://neuraflow-azure.vercel.app/",
    githubLink: "https://github.com/Ayungcodes/neuraflow",
  },
];

export const coreLanguages = [
    { 
      name: 'JavaScript', 
      type: 'Language',
      description: 'The core scripting engine of the web for dynamic logic and interactivity.',
      useCase: 'Building client-side logic, API calls, dynamic UI behavior, and async operations.'
    },
    { 
      name: 'TypeScript', 
      type: 'Language',
      description: 'Strongly typed programming language that builds on JavaScript.',
      useCase: 'Ensuring type safety, preventing runtime bugs, and scaling clean codebase architectures.'
    },
    { 
      name: 'React.js', 
      type: 'Frontend Framework',
      description: 'Declarative component-based UI library for modern web apps.',
      useCase: 'Crafting responsive user interfaces, modular components, and fluid UI state management.'
    },
    { 
      name: 'Next.js', 
      type: 'Full-Stack Framework',
      description: 'The React framework for high-performance full-stack applications.',
      useCase: 'Server-side rendering (SSR), SEO optimization, API routes, and optimized routing.'
    },
    { 
      name: 'Node.js', 
      type: 'Runtime Environment',
      description: 'Event-driven JavaScript runtime built on Chrome\'s V8 engine.',
      useCase: 'Running asynchronous backend services, handling server-side logic, and CLI tool builds.'
    },
    { 
      name: 'Express.js', 
      type: 'Backend Framework',
      description: 'Minimalist, fast web framework for Node.js backends.',
      useCase: 'Designing RESTful APIs, custom backend services, middleware, and request routing.'
    },
    { 
      name: 'PostgreSQL', 
      type: 'Database',
      description: 'Powerful, enterprise-grade open source relational database system.',
      useCase: 'Structuring complex data models, maintaining ACID compliance, and relational queries.'
    },
    { 
      name: 'TailwindCSS', 
      type: 'Styling Engine',
      description: 'Utility-first CSS framework for rapid custom UI design.',
      useCase: 'Styling minimal, high-contrast, responsive layouts with custom design tokens.'
    },
  ]

  export const tools = [
    { 
      name: 'Supabase', 
      type: 'Database / Auth',
      description: 'Open source Firebase alternative with PostgreSQL under the hood.',
      useCase: 'Managing backend authentication, real-time subscriptions, and instant DB access.'
    },
    { 
      name: 'Git', 
      type: 'Version Control',
      description: 'Distributed version control system for tracking source code changes.',
      useCase: 'Code versioning, feature branching, merge strategies, and history auditing.'
    },
    { 
      name: 'GitHub', 
      type: 'Repository Hosting',
      description: 'Developer platform for code hosting, review, and collaboration.',
      useCase: 'Managing source code repositories, CI/CD actions, pull requests, and deployment triggers.'
    },
    { 
      name: 'Vercel', 
      type: 'Deployment / Hosting',
      description: 'Cloud platform designed specifically for static and serverless web apps.',
      useCase: 'Instant production deployments, serverless functions execution, and continuous integration.'
    },
  ]
