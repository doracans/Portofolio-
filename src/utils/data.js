// Desc: Data for the portfolio
import {
FaReact,
FaHtml5,
FaCss3,
FaNodeJs,
FaInstagram,
FaLinkedin,
} from 'react-icons/fa';
import {BiLogoJavascript, BiLogoTypescript} from 'react-icons/bi';
import {SiExpress, SiMongodb, SiMysql, SiFigma,SiPostman,SiSwagger} from 'react-icons/si';
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt,FaBehance,FaGithub } from 'react-icons/fa6';
import { MdGroups3 } from 'react-icons/md';

import PROJECT_IMG_1 from "../assets/images/PROJECT_IMG_1.png";
import PROJECT_IMG_2 from "../assets/images/PROJECT_IMG_2.png";
import PROJECT_IMG_3 from "../assets/images/PROJECT_IMG_3.png";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_4.png";
import PROJECT_IMG_5 from "../assets/images/PROJECT_IMG_5.png";
import PROJECT_IMG_6 from "../assets/images/PROJECT_IMG_6.png";

export const MENU_LINKS=[
    {id:"01", label:"Home",offset:-100, to:"hero"},
    {id:"02", label:"Skills",offset:-80, to:"skills"},
    {id:"03", label:"About Me",offset:-80, to:"about"},
    {id:"04", label:"Projects",offset:-80, to:"projects"},
    {id:"05", label:"Contact",offset:-80, to:"contact"},
];

export const STATS =[
    {id:"01", count:"10",label:`Years of \nExperience`},
    {id:"02", count:"12", label:`Certification \nEarned`},
    {id:"03", count:"43", label:`Projects \nCompleted`},
    {id:"04", count:"37",label:`Happly \nClients`},
];

export const SKILL_TABS =[
    {id:"01", label:"All", value:"all"},
    {id:"02", label:"Frontend", value:"frontend"},
    {id:"03", label:"Backend", value:"backend"},
    {id:"04", label:"Tools", value:"tools"},
    {id:"05", label:"Skills", value:"soft-skills"},
];

export const SKILLS =[
    {
        id: "01",
        icon: FaReact,
        skills: "React",
        progress: 95,
        type: "frontend",
        description: "Dora lovers part 1"
    },
    {
        id: "02",
        icon: FaHtml5,
        skills: "HTML",
        progress: 99,
        type: "frontend",
        description: "Dora lovers part 2"
    },
    {
        id: "03",
        icon: FaCss3,
        skills: "CSS",
        progress: 65,
        type: "frontend",
        description: "Dora lovers part 3"
    },
    {
        id: "04",
        icon: BiLogoJavascript,
        skills: "JavaScript",
        progress: 88,
        type: "frontend",
        description: "Dora lovers part 4"
    },
    {
        id: "05",
        icon: FaNodeJs,
        skills: "Node",
        progress: 95,
        type: "backend",
        description: "Dora lovers part 5"
    },
    {
        id: "06",
        icon: SiExpress,
        skills: "Express",
        progress: 98,
        type: "backend",
        description: "Dora lovers part 6"
    },
    {
        id: "07",
        icon: SiMongodb,
        skills: "MongoDB",
        progress: 75,
        type: "backend",
        description: "Dora lovers part 7"
    },
    {
        id: "08",
        icon: SiMysql,
        skills: "SQL",
        progress: 90,
        type: "backend",
        description: "Dora lovers part 8"
    },
    {
        id: "09",
        icon: FaGitAlt,
        skills: "Git",
        progress: 95,
        type: "backend",
        description: "Dora lovers part 9"
    },
    {
        id: "10",
        icon: MdGroups3,
        skills: "Group Projects",
        progress: 95,
        type: "skills",
        description: "Dora lovers part 10"
    },
    {
        id: "11",
        icon: VscTerminalPowershell,
        skills: "Terminal Powershell",
        progress: 95,
        type: "frontend",
        description: "Dora lovers part 11"
    },
    {
        id: "12",
        icon: SiPostman,
        skills: "Postman",
        progress: 95,
        type: "backend",
        description: "Dora lovers part 12"
    },
    {
        id: "13",
        icon: VscVscode,
        skills: "VsCode",
        progress: 95,
        type: "tools",
        description: "Dora lovers part 13"
    },
    {
        id: "14",
        icon: SiFigma,
        skills: "Figma",
        progress: 95,
        type: "tools",
        description: "Dora lovers part 14"
    },
    {
        id: "15",
        icon: BiLogoTypescript,
        skills: "TypeScript",
        progress: 95,
        type: "backend",
        description: "Dora lovers part 15"
    },
    {
        id: "16",
        icon: SiSwagger,
        skills: "Swagger",
        progress: 95,
        type: "backend",
        description: "Dora lovers part 16"
    },
];

export const ABOUT_ME ={
content: `I'm a passionate Frontend Developer with a strong foundation in building responsive and user-friendly web applications. My journey in development started with a deep curiosity for creating intuitive and visually appealing digital experiences. Over time, I've honed my skills in React, TailwindCSS, and modern frontend tools, allowing me to craft seamless and interactive interfaces.

\nBeyond just coding, I enjoy solving real-world problems through design and technology. Whether it's optimizing UI/UX workflows, enhancing accessibility, or improving performance, I always strive to create applications that are both functional and aesthetically pleasing.Currently, I'm exploring best practices in frontend architecture, component reusability, and state management, aiming to build scalable and maintainable projects. I'm always eager to learn, collaborate, and push the boundaries of frontend development.`,

socialLinks:[
    {id:"01", label:"Instagram", icon:FaInstagram, link:"https://www.instagram.com/shr.pus/"},
    {id:"02", label:"LinkedIn",icon:FaLinkedin, link:"https://www.linkedin.com/in/saharani-pusfita/"},
    {id:"03", label:"Github",icon:FaGithub, link:"https://github.com/doracans"},
    {id:"04", label:"Behance", icon:FaBehance, link:"https://www.behance.net/shrvitasaharani"},
],

email: "shrvitasaharani@gmail.com",
phone:"081233076119",
website:"https://timeprogrammer.com",
};

export const PROJECTS = [
    {
        id:1,
        title:"Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
        image: PROJECT_IMG_1,
        tags:["React", "HTML","CSS"],
    },
    {
        id:2,
        title:"Responsive Portofolio Website using React JS | Portofolio website in React",
        image: PROJECT_IMG_2,
        tags:["React", "HTML","CSS"],
    },
    {
        id:3,
        title:"Full Stack Travel Story App using MERN Stack | MongoDB website in React | MERN Project",
        image: PROJECT_IMG_3,
        tags:["React", "Node.js","Express.js","MongoDB"],
    },
    {
        id:4,
        title:"Portofolio website using react JS and Tailwind CSS | Portofolio Website in React",
        image: PROJECT_IMG_4,
        tags:["React", "Tailwind CSS"],
    },
    {
        id:5,
        title:"Full Stack polling app using MERN stack | MongoDB, Express, React, Node.js | MERN Project",
        image: PROJECT_IMG_5,
        tags:["React", "Node.js","Express.js","MongoDB"],
    },
    {
        id:6,
        title:"Responsive website using react JS & Tailwind CSS",
        image: PROJECT_IMG_6,
        tags:["React", "Tailwind CSS"],
    },
];