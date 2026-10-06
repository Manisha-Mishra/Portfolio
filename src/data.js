// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Manisha Mishra',
  title: 'Senior Full Stack Engineer',
  tagline: 'Fintech & Financial Platforms',
  location: 'Linköping, Sweden',
  workAuth: 'EU Work Authorized',
  email: 'manishamishra1927@gmail.com',
  phone: '+46 763 44 25 40',
  linkedin: 'https://www.linkedin.com/in/manisha-mishra-/',
  github: 'https://github.com/Manisha-Mishra',
  githubUser: 'Manisha-Mishra',
  intro:
    'I build high-performance, data-intensive financial platforms for global institutional investors — from React dashboards and Node.js microservices to LLM-powered search.',
  summary: [
    'Senior Full Stack Engineer with 5+ years of experience building high-performance, data-intensive financial platforms for global institutional investors.',
    'My work spans React.js, Node.js and microservices architecture. I care about measurable outcomes: faster APIs, resilient services, stable layouts on data-heavy dashboards, and products people use every day.',
    'Lately I have been bringing LLMs into fintech: conversational search that helps fund managers discover and compare investment products.',
  ],
};

export const stats = [
  { value: '5+', label: 'Years building production software' },
  { value: '40%', label: 'API latency reduced via batched requests' },
  { value: '500+', label: 'Enterprise users on a mobile app I shipped' },
  { value: '4', label: 'Platforms delivered for PIMCO' },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Gemini Solutions',
    client: 'Consultant for PIMCO',
    platform: 'Fund Platform Enhancements',
    location: 'Gurugram, India (Remote)',
    period: 'Apr 2025 — Present',
    highlights: [
      'Reduced API latency by 40% by replacing N+1 microservice chains with a batched request model for fund manager data retrieval.',
      'Engineered retry and circuit-breaker mechanisms, significantly reducing failure rates across dependent downstream services.',
      'Eliminated cumulative layout shift (CLS) on data-heavy dashboards, improving Core Web Vitals and perceived performance.',
      'Developing LLM-powered natural language search so fund managers can discover and compare investment products through conversational queries.',
    ],
    tags: ['Node.js', 'Microservices', 'React', 'Core Web Vitals', 'LLM'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Gemini Solutions',
    client: 'Consultant for PIMCO',
    platform: 'Fund Explorer',
    location: 'Gurugram, India',
    period: 'Apr 2024 — Mar 2025',
    highlights: [
      'Architected a full-stack fund exploration platform serving global institutional markets with real-time comparison across asset classes.',
      'Designed REST APIs for live pricing and performance data feeds, improving data freshness and accuracy for institutional users.',
      'Built advanced multi-dimensional filtering (ETF, ESG, risk profile, region), reducing decision-making time for portfolio managers.',
    ],
    tags: ['React', 'TypeScript', 'REST APIs', 'Real-time data'],
  },
  {
    role: 'Software Engineer',
    company: 'Gemini Solutions',
    client: 'Consultant for PIMCO',
    platform: 'Employee Super App',
    location: 'Gurugram, India',
    period: 'Apr 2022 — Mar 2024',
    highlights: [
      'Built and shipped a cross-platform mobile app (iOS & Android) used by 500+ employees, owning the React Native frontend and backend APIs end-to-end.',
      'Integrated Azure Active Directory and Microsoft Graph APIs for secure enterprise SSO and user data access.',
      'Engineered real-time features with WebSockets and cron jobs; designed and optimised PostgreSQL / PL/SQL queries across modules.',
    ],
    tags: ['React Native', 'Azure AD', 'MS Graph', 'WebSockets', 'PostgreSQL'],
  },
  {
    role: 'System Engineer (Full Stack Developer)',
    company: 'Infosys Ltd.',
    location: 'Mysore, India',
    period: 'Jan 2020 — Mar 2022',
    highlights: [
      'Delivered full-stack features using React and RESTful APIs; resolved critical integration defects, reducing production incident rates.',
    ],
    tags: ['React', 'REST APIs'],
  },
];

export const skills = [
  {
    group: 'Frontend',
    items: ['React.js', 'TypeScript', 'Redux', 'JavaScript (ES2022+)', 'React Native', 'Angular', 'Material UI', 'Sass / CSS-in-JS', 'HTML5 & CSS3', 'Jest'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  {
    group: 'Data & Cloud',
    items: ['PostgreSQL', 'PL/SQL', 'AWS S3', 'Azure Active Directory', 'Microsoft Graph API'],
  },
  {
    group: 'AI / LLM',
    items: ['LLM Integration', 'Natural Language Search', 'Prompt Engineering', 'OpenAI & Anthropic APIs', 'AI-assisted Development'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines', 'Git', 'Figma', 'Jira'],
  },
];

// Curated GitHub repos shown first. Any other public repos are fetched live from the GitHub API.
export const featuredProjects = [
  {
    name: 'Mcart-server',
    description: 'E-commerce backend built with Node.js and Mongoose — products, carts and orders exposed through a REST API.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'ChatApp',
    description: 'Real-time chat application exploring socket-based messaging between users.',
    tech: ['JavaScript', 'WebSockets'],
  },
  {
    name: 'DragAndDrop',
    description: 'Drag-and-drop interface built in React using a DnD library.',
    tech: ['React', 'JavaScript'],
  },
  {
    name: 'Portfolio-Api',
    description: 'API service backing a personal portfolio.',
    tech: ['Python'],
  },
  {
    name: 'Next-app',
    description: 'Experiments with Next.js and server-rendered React.',
    tech: ['Next.js', 'React'],
  },
  {
    name: 'Angular-Form',
    description: 'Reactive forms and validation patterns in Angular.',
    tech: ['Angular', 'TypeScript'],
  },
];

export const education = {
  degree: 'Bachelor of Engineering, Information Technology',
  school: 'Dhole Patil College of Engineering, Pune, India',
  period: '2015 — 2019',
};
