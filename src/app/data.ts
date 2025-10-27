export const SKILLS = [
  "React",
  "Nextjs",
  "Framer Motionn",
  "Typescript",
  "GoLang",
  "Python",
  "C#",
  "Communication",
  "Problem Solving",
  "Design Thinking",
  "Project Management",
  "SCRUM",
];
export type TProject = {
  id: number;
  title: string;
  sub_title: string;
  about: string;
  image: string;
  link: string;
  github?: string;
  technologies: unknown[];
  roles: unknown[];
};
export const PROJECTS: TProject[] = [
  {
    id: 1,
    title: "Bamboo Securities (Terminals)",
    sub_title: "A Securites trading service for MFB",
    about:
      "Bamboo Terminals is a next-generation investment platform built for asset managers. We simplify fund management with seamless portfolio tools, real-time market research, and automated reporting — empowering professionals to deliver a smooth, transparent investor experience. From investment execution to insights, Bamboo Terminals provides everything you need to manage client assets with confidence and efficiency.",
    image: "bamboo.gif",
    link: "https://investbamboo.com/",
    roles: ["Backend", "Project Manager"],
    technologies: [
      " Go",
      "Postgres",
      "dbdiagram.io",
      "Velox FIX Engine",
      "FIX Protocol",
    ],
  },
  {
    id: 2,
    title: "React Text Colorfy",
    sub_title:
      "A simple and easy to use react component that helps you add gradient or color to text in your react project.",
    about:
      "We have observed that most developers would like to speed up the process of applying color or a gradient to specific text or a string of sentences during development. There is a lot of CSS code needed. especially if your app's colors vary between distinct locations. This is why I created react-text-colorfy, a straightforward component-based solution that enables developers to add colors or gradients to headings and other text components / tags.",
    image: "react_text_colorfy.jpg",
    link: "https://www.npmjs.com/package/react-text-colorfy",
    github: "https://github.com/binadiegha/react-text-colorfy",
    roles: ["Frontend", "Technical Writer", "Product Manager"],
    technologies: ["React", "TypeScript", "CSS", "StoryBook"],
  },

  {
    id: 3,
    title: "Uzu Tickets",
    sub_title: "An Events ticketing platform",
    about: "some about the project",
    image: "uzu_tickets.gif",
    link: "https://uzuticket.com",
    roles: ["Backend", "Frontend", "Project Manager", "Product Designer"],
    technologies: [" react", "typescript", "Go", "NestJS", "MongoDB", "Figma"],
  },

  {
    id: 4,
    title: "AgileX Limo",
    sub_title: "Autonomous Navigation with path planning",
    about:
      "This project is developed using the AgileX LIMO robot and Jetson Nano, operating on Ubuntu 18.04 with the Robot Operating System (ROS) Melodic. It focuses on autonomous navigation through mapping, localisation, and path planning. ",
    image: "agilex_limo.jpg",
    link: "https://github.com/binadiegha/agileX_limo_10_ws",
    github: "https://github.com/binadiegha/agileX_limo_10_ws",
    roles: ["IoT", "Software Engineer"],
    technologies: [
      " C++",
      "Python",
      "Shell",
      "NodeRED",
      "InfluxDB",
      "Docker",
      "Graffana",
      "A*",
      "Dijkstra",
      "Catkin",
      "ROS",
    ],
  },

  {
    id: 5,
    title: "Enuffood",
    sub_title:
      "A food store for Nigerian families that enables spread payments",
    about:
      "Enuffood is a purpose-driven food delivery platform making quality, affordable food accessible to households and salary earners across Nigeria. By combining bulk sourcing, flexible payment options, and efficient delivery, we’re tackling food insecurity and helping families shop smarter. Our mission is simple — to ensure everyone has enough food when they need it.",
    image: "enuffood.gif",
    link: "https://enuffood.com",
    roles: ["Backend", "Frontend", "Product Designer"],
    technologies: [" Vue", "typescript", "NestJS", "VueX", "Figma"],
  },

  {
    id: 6,
    title: "Linkshub",
    sub_title:
      "LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work.",
    about:
      "LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work. These resources include links to free software, libraries, frameworks, and other tools that can be used to build and deploy applications and websites. ",
    image: "linkshub.gif",
    link: "https://www.linkshub.dev/",
    github: "https://github.com/rupali-codes/LinksHub",
    roles: ["Backend", "Frontend"],
    technologies: [" react", "typescript"],
  },

  {
    id: 7,
    title: "Sauri Travels",
    sub_title: "A travel Aggregator Mobile app. iOS / Android",
    about: "some about the project",
    image: "sauri.gif",
    link: "https://hellosauri.com",
    roles: ["Backend", "Frontend", "Project Manager", "Product Designer"],
    technologies: [
      "ReactJS",
      "TypeScript",
      "ReactNative",
      "NestJS",
      "Postgres",
      "Redis",
      "Redux",
      "Figma",
      "AWS",
    ],
  },

  {
    id: 8,
    title: "GetLeeta",
    sub_title: "A LPG Gas aggregator waitlist page",
    about: "some about the project",
    image: "leeta.gif",
    link: "https://getleeta.com/",
    roles: ["Frontend", "Product Designer"],
    technologies: [" React", "typescript", "Figma"],
  },
];
