import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  lbc,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps",
    icon: web,
  },
  {
    title: "Cloud AWS",
    icon: mobile,
  },
  {
    title: "Containers & Kubernetes",
    icon: backend,
  },
  {
    title: "CI/CD",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: reactjs,
  },
  {
    name: "React JS",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Static Site Infrastructure",
    company_name: "",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "September 2025 - October 2025",
    points: [
     "Designing and deploying a fully automated static website infrastructure using AWS services, CI/CD pipelines, and DevOps best practices.",
"Managing the entire development lifecycle independently, from planning and architecture to deployment and optimization.",
"Implementing efficient build processes, containerization, and infrastructure-as-code to ensure consistent and reproducible environments.",
"Reviewing and improving the infrastructure to enhance performance, reliability, security, and scalability.",
    ],
  },
  {
    title: "Unity Live Focus",
    company_name: "LBCI",
    icon: lbc,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Sept 2025",
    points: [
      "Developed an interactive Unity-based system that enables real-time zooming and selection of newspaper regions for live broadcasting.",
"Implemented real-time rendering workflows using C#, multiple virtual cameras, and RenderTextures to achieve smooth visual output.",
"Integrated NDI/Spout streaming technologies to deliver low-latency video feeds to professional broadcast tools such as vMix.",
"Built strong skills in real-time graphics, streaming pipelines, and solving technical challenges in a broadcast production environment.",

    ],
  },
  {
    title: "IT Internship",
    company_name: "LBCI",
    icon: lbc,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Sept 2024",
    points: [
      "Applied networking knowledge to configure, troubleshoot, and maintain systems, improving overall reliability and performance.",
"Developed interactive web interfaces and strengthened front-end fundamentals through hands-on HTML and CSS work.",
"Supported network enhancements and infrastructure improvements, gaining practical experience with real-world IT systems.",
"Built strong communication and problem-solving skills by explaining technical concepts clearly and handling customer-oriented issues.",

    ],
  },
  /*{
    title: "",
    company_name: "",
    date: "",
    points: [
      
    ],
  },*/
];

const testimonials = [
];

const projects = [
  {
    name: "CloudEdge Static Hosting",
    description:
      "A scalable static hosting environment powered by AWS, Terraform/Ansible automation, and CI/CD pipelines, optimized for reliability and performance.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "terraform",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Web-robs",
  },
  {
    name: "Unity Live Focus System",
    description:
      "An interactive real-time broadcasting tool built in Unity, allowing operators to zoom and highlight specific newspaper regions using multi-camera rendering and NDI/Spout streaming.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
      {
        name: "NDI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Web-robs.com/",
  },
  {
    name: "ParallelHeat-2D",
    description:
      "A parallel 2D heat-transfer simulator using MPI domain decomposition deployed on AWS EC2 nodes.",
    tags: [
      {
        name: "EC2",
        color: "blue-text-gradient",
      },
      {
        name: "MPI",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Web-robs",
  },
];

export { services, technologies, experiences, testimonials, projects };
