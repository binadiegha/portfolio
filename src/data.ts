// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Jones Binadiegha Gabriel',
  short: 'Jones B Gabriel',
  first: 'Jones',
  role: 'Software Engineer',
  location: 'Harlow, Essex, UK',
  email: 'jonesbgabriel@outlook.com',
  github: 'https://github.com/binadiegha',
  linkedin: 'https://www.linkedin.com/in/jonesbgabriel/',
  x: 'https://x.com/binadiegha',
  // Put a square photo in /public (e.g. /avatar.jpg) and set it here. Empty shows initials.
  avatar: '' as string,
  // Drop a PDF in /public and set e.g. '/cv.pdf' to show a "Download CV" button.
  cv: '' as string,
  bio: 'Software engineer with 5+ years building high-availability APIs, distributed systems and automation tools. MSc in Robotics & AI from the University of Hull. I like turning slow, manual processes into fast, reliable software.',
  focus: ['NestJS', 'C# / .NET', 'Go', 'Robotics'],
}

export const services = [
  {
    icon: 'server',
    title: 'Backend & APIs',
    text: 'Public REST APIs, caching layers and event pipelines with NestJS, Go, .NET and Redis.',
  },
  {
    icon: 'workflow',
    title: 'Automation tooling',
    text: 'Internal tools that cut manual work from minutes to seconds, from label printing to reporting.',
  },
  {
    icon: 'cpu',
    title: 'Robotics & ML',
    text: 'Reinforcement learning, SLAM and path planning on real hardware with ROS, PyTorch and JAX.',
  },
] as const

export type Project = {
  slug: string
  name: string
  blurb: string
  category: string
  year?: string
  /** Image in /public/images. Without one, a generated gradient cover is shown. */
  cover?: string
  gradient: [string, string]
  /** Colour of the drawer's "View Project" bar. */
  brand: string
  about: string
  highlights?: string[]
  metric?: { value: string; label: string }
  tools: string[]
  roles: string[]
  website?: string
  repo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'printflo',
    name: 'PrintFlo',
    blurb: 'Industrial label automation for warehouse intake',
    category: 'Automation',
    year: '2026',
    gradient: ['#f97316', '#ef4444'],
    brand: '#c2410c',
    about:
      'An Office.js Excel add-in backed by a C# ASP.NET Core service that generates ZPL labels and routes print jobs to networked Zebra ZT421/ZT610 printers at LT Foods UK. It replaced a slow, hand-edited labelling process on the warehouse floor.',
    highlights: [
      'Print cycle cut from ~60s to ~2s; intake recording plus printing from ~3 min to 50s per entry.',
      'Reverse-engineered the NiceLabel .nlbl format (zipped XML, UTF-8 BOM, CRLF) so templates are generated in code.',
      'Companion GS1-128 pallet label generator for Mars shipments with GTIN/SSCC check-digit validation.',
    ],
    metric: { value: '96.7%', label: 'faster print cycle' },
    tools: ['C#', 'ASP.NET Core', 'Office.js', 'ZPL', 'TCP/IP', 'NiceLabel'],
    roles: ['Full Stack', 'Software Engineer'],
    featured: true,
  },
  {
    slug: 'sauri-api',
    name: 'Sauri API',
    blurb: 'Real-time transport data aggregator',
    category: 'Backend',
    year: '2021–24',
    cover: '/images/sauri.gif',
    gradient: ['#8b5cf6', '#3b82f6'],
    brand: '#4338ca',
    about:
      'A high-availability public API aggregating real-time train, flight and bus data behind one modular REST surface, built at Chain Consults. I owned it end to end, from endpoint design to CI/CD and telemetry.',
    highlights: [
      'Redis caching and pub/sub to keep latency low under peak load.',
      'Automated test and deploy pipeline with GitHub Actions.',
      'Telemetry for API health, latency and usage patterns.',
    ],
    tools: ['NestJS', 'TypeScript', 'Redis', 'Docker', 'GitHub Actions', 'React Native'],
    roles: ['Backend', 'Architect'],
    featured: true,
  },
  {
    slug: 'bamboo-terminals',
    name: 'Bamboo Securities (Terminals)',
    blurb: 'A securities trading service for MFB',
    category: 'Fintech',
    gradient: ['#334155', '#0f766e'],
    brand: '#334155',
    about:
      'Bamboo Terminals is a next-generation investment platform built for asset managers. It simplifies fund management with portfolio tools, real-time market research and automated reporting, giving professionals what they need to manage client assets with confidence.',
    tools: ['Go', 'Postgres', 'Dbdiagram.io', 'Velox FIX Engine', 'FIX Protocol'],
    roles: ['Backend', 'Project Manager'],
    website: 'https://investbamboo.com/',
  },
  {
    slug: 'uzu-tickets',
    name: 'Uzu Tickets',
    blurb: 'An events ticketing platform',
    category: 'Product',
    cover: '/images/uzu_tickets.gif',
    gradient: ['#0c1218', '#22c55e'],
    brand: '#0c1218',
    about:
      'An events ticketing platform for discovering events, buying tickets and managing entry. I worked across the product, from design in Figma to the React frontend and the Go/NestJS backend.',
    tools: ['React', 'TypeScript', 'Go', 'NestJS', 'MongoDB', 'Figma'],
    roles: ['Backend', 'Frontend', 'Project Manager', 'Product Designer'],
    website: 'https://uzuticket.com',
    featured: true,
  },
  {
    slug: 'rl-parking',
    name: 'SAC vs DreamerV3',
    blurb: 'Reinforcement learning for autonomous parallel parking',
    category: 'Research',
    year: '2025',
    gradient: ['#06b6d4', '#10b981'],
    brand: '#0e7490',
    about:
      'My MSc dissertation: a comparative study of model-free (SAC) and model-based (DreamerV3) reinforcement learning for autonomous parallel parking. I built custom simulation environments from scratch and tuned agents with reproducible, data-driven evaluation.',
    tools: ['Python', 'JAX', 'PyTorch', 'Stable-Baselines3', 'DreamerV3'],
    roles: ['Researcher', 'ML Engineer'],
  },
  {
    slug: 'agilex-limo',
    name: 'AgileX Limo',
    blurb: 'Autonomous navigation with path planning',
    category: 'Robotics',
    year: '2025',
    cover: '/images/agilex_limo.jpg',
    gradient: ['#eab308', '#f97316'],
    brand: '#1c1c1c',
    about:
      'Built on the AgileX LIMO robot and a Jetson Nano, running Ubuntu 18.04 with ROS Melodic. It focuses on autonomous navigation through mapping, localisation and path planning, using Lidar SLAM, Gmapping, Karto-SLAM, A* and Dijkstra.',
    tools: ['C++', 'Python', 'Shell', 'NodeRED', 'InfluxDB', 'Docker', 'Grafana', 'A*', 'Dijkstra', 'Catkin', 'ROS'],
    roles: ['IoT', 'Software Engineer'],
    website: 'https://github.com/binadiegha/agileX_limo_10_ws',
    repo: 'https://github.com/binadiegha/agileX_limo_10_ws',
    featured: true,
  },
  {
    slug: 'react-text-colorfy',
    name: 'React Text Colorfy',
    blurb: 'Add gradients or colour to text in React',
    category: 'Open Source',
    cover: '/images/react_text_colorfy.jpg',
    gradient: ['#ec4899', '#8b5cf6'],
    brand: '#cc0404',
    about:
      "Most developers want a faster way to apply colour or a gradient to text, and doing it in CSS takes a lot of code, especially when colours vary across an app. react-text-colorfy is a simple component-based solution for adding colours or gradients to headings and other text elements.",
    metric: { value: '800+', label: 'npm downloads' },
    tools: ['React', 'TypeScript', 'CSS', 'Storybook'],
    roles: ['Frontend', 'Technical Writer', 'Product Manager'],
    website: 'https://www.npmjs.com/package/react-text-colorfy',
    repo: 'https://github.com/binadiegha/react-text-colorfy',
  },
]

export const highlights = [
  { value: '5+', label: 'Years shipping software' },
  { value: '96.7%', label: 'Faster label printing' },
  { value: '800+', label: 'npm downloads' },
  { value: 'MSc', label: 'Robotics & AI' },
]

export type Job = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

export const experience: Job[] = [
  {
    company: 'LT Foods UK',
    role: 'Quality Control & Automation Engineer',
    period: 'Mar 2026 – Present',
    location: 'Harlow, UK',
    current: true,
    points: [
      'Built PrintFlo, cutting label print time from ~60s to ~2s.',
      'Built a data capture and audit pipeline for inbound/outbound goods tracking and QA checks.',
      'Merged 120+ product spec sheets across five customers into one master workbook (2 min → under 20s lookups).',
      'Python tooling for inspection exports and workbook image compression (1MB+ → under 60KB).',
    ],
  },
  {
    company: 'University of Hull',
    role: 'Software Engineer',
    period: 'Sep 2024 – May 2025',
    location: 'Hull, UK',
    points: [
      'Built a full-stack competency management platform (C# + React) for students and staff to plan learning pathways and design modules.',
    ],
  },
  {
    company: 'Chain Consults',
    role: 'Senior Software Engineer',
    period: 'Jun 2021 – Aug 2024',
    location: 'Lagos, Nigeria',
    points: [
      'Architected the Sauri API, a high-availability transport data aggregator (NestJS + Redis).',
      'Owned the full API lifecycle: design, CI/CD, performance tuning and telemetry.',
      'Contributed to the React Native client.',
    ],
  },
  {
    company: 'Chain Consults',
    role: 'Software Engineer',
    period: 'Jul 2019 – Jun 2021',
    location: 'Lagos, Nigeria',
    points: [
      'Shipped MVPs across several industries in 7 months, cutting delivery cycle time by 40%+.',
      '20% fewer bug reports via Jest testing and code review; 25% faster page loads in React.',
    ],
  },
  {
    company: 'Bayelsa Medical University',
    role: 'Software Developer',
    period: 'Sep 2018 – Jul 2019',
    location: 'Yenagoa, Nigeria',
    points: ['Designed and launched the university web portal, serving 2,000+ students and 300+ daily visitors.'],
  },
]

export const education = {
  degree: 'MSc Advanced Computer Science: Robotics & Artificial Intelligence',
  school: 'University of Hull',
  year: '2025',
  points: [
    'Modules: Reliable & Dependable Real-Time Systems, Fault Tree Analysis, Commercial Development Practice, Robotic Systems.',
    'Dissertation: SAC vs DreamerV3 for autonomous parallel parking.',
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'C#', 'Python', 'Go', 'C/C++'] },
  { group: 'Backend', items: ['NestJS', 'ASP.NET Core', 'FastAPI', 'Node.js', 'Redis', 'RabbitMQ'] },
  { group: 'Cloud & Infra', items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GitHub Actions', 'PostgreSQL', 'MongoDB'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Framer Motion', 'React Native'] },
  { group: 'ML & Robotics', items: ['PyTorch', 'JAX', 'ROS', 'Stable-Baselines3'] },
]

export const certifications = [
  { name: 'NestJS Zero to Hero', issuer: 'Udemy' },
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp' },
  { name: "Go: The Complete Developer's Guide", issuer: 'Udemy' },
  { name: 'Level 3 Emergency First Aid at Work', issuer: 'Highfield' },
]
