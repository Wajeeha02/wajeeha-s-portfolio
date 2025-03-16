import leadzenImg from "@/public/LeadZen.png";
import nerdflowImg from "@/public/NerdFlow Website.png";
import preplifyImg from "@/public/preplify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "DigiSquad | Customer Experience Team",
    location: "Remote",
    description:
     "In my 3rd semester, I started working with Germany's No. 1 startup, Razor Group, with zero experience.",
    date: "2023-Present",
  },
  {
    title: "Kalmak | Rawaan Pakistan as a Developer",
    location: "National Incubtion Centre Taxila",
    description:
    "I worked as a content writer and a developer with the above two startups in Pakistan.",
    date: "2023",
  },
  {
    title: "Vice President Softdesk",
    location: "UET taxila",
    description:
     "I became the Vice President of the only technical society of the Software Engineering department, where I conducted multiple tech events on campus.",
    date: "2024",
  },
  {
    title: "Instructor | Technofies",
    location: "Islamabad | Remote",
    description:
  "I started teaching Microsoft technologies as a Microsoft Learn Student Ambassador (Beta).",
    date: "2024",
  },
  {
    title: "Jr. Front End Developer | NerdFlow",
    location: "NASTP Rawalpindi",
    description:
 "I started working as a Front-End Developer at NerdFlow, where I contributed to various projects using React and Next.js.",
    date: "2024-Present",
  },
] as const;

export const projectsData = [
  {
    title: "NerdFlow Website",
    description:
     "I worked as a Front-End Developer on NerdFlow's official website, leveraging React and Next.js to build a seamless and user-friendly experience.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: nerdflowImg,
  },
  {
    title: "LeadZen",
    description:
     "I developed my Final Year Project website, LeadZen, integrating Flask for the backend to ensure seamless data processing and connectivity.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux Toolkit","Python"],
    imageUrl: leadzenImg,
  },
  {
    title: "Preplify",
    description:
     "I built a simple front-end interface for an AI assistant interviewer, ensuring a smooth and interactive user experience.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: preplifyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "Express",
  "Python",
] as const;
