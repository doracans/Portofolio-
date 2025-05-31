// Desc: Data for the portfolio
import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaInstagram,
    FaLinkedin,
    FaRegFileExcel,
} from 'react-icons/fa';
import { BiLogoJavascript, BiLogoTypescript, BiSkipNextCircle } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiMysql, SiFigma, SiPostman, SiSwagger, SiPhotopea, SiAdobe, SiAxios, SiTypescript, SiPrisma, SiJavascript, SiMongoose, SiGoogleanalytics, SiGoogleadmob, SiCanva, SiReact, SiWordpress, SiElementor, SiCss3, SiHtcvive, SiHtml5, SiCpanel, SiInstagram, SiGooglemaps, SiNodedotjs, SiGoogle } from 'react-icons/si';
import {
    VscVscode,
    VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt, FaBehance, FaGithub, FaGoogle } from 'react-icons/fa6';
import { MdGroups3 } from 'react-icons/md';
import { image, link } from 'framer-motion/client';
import { FiFigma } from 'react-icons/fi';
import { DiAndroid, DiJavascript } from 'react-icons/di';
import { RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri';


import PROJECT_IMG_1 from "../assets/images/PROJECT_IMG_1.png";
import PROJECT_IMG_2 from "../assets/images/PROJECT_IMG_2.png";
import PROJECT_IMG_3 from "../assets/images/PROJECT_IMG_3.png";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_4.png";
import PROJECT_IMG_5 from "../assets/images/PROJECT_IMG_5.png";
import PROJECT_IMG_6 from "../assets/images/PROJECT_IMG_6.png";
import PROJECT_IMG_7 from "../assets/images/PROJECT_IMG_7.png";
import PROJECT_IMG_8 from "../assets/images/PROJECT_IMG_8.png";
import PROJECT_IMG_9 from "../assets/images/PROJECT_IMG_9.png";
import PROJECT_IMG_10 from "../assets/images/PROJECT_IMG_10.png";
import PROJECT_IMG_11 from "../assets/images/PROJECT_IMG_11.png";
import PROJECT_IMG_12 from "../assets/images/PROJECT_IMG_12.png";
import PROJECT_IMG_13 from "../assets/images/PROJECT_IMG_13.png";
import PROJECT_IMG_14 from "../assets/images/PROJECT_IMG_14.png";
import PROJECT_IMG_15 from "../assets/images/PROJECT_IMG_15.png";
import PROJECT_IMG_16 from "../assets/images/PROJECT_IMG_16.png";
import PROJECT_IMG_17 from "../assets/images/PROJECT_IMG_17.png";
import PROJECT_IMG_18 from "../assets/images/PROJECT_IMG_18.png";
import PROJECT_IMG_19 from "../assets/images/PROJECT_IMG_19.png";
import PROJECT_IMG_20 from "../assets/images/PROJECT_IMG_20.png";
import PROJECT_IMG_21 from "../assets/images/PROJECT_IMG_21.png";
import PROJECT_IMG_22 from "../assets/images/PROJECT_IMG_22.png";
import PROJECT_IMG_23 from "../assets/images/PROJECT_IMG_23.png";
import PROJECT_IMG_24 from "../assets/images/PROJECT_IMG_24.png";
import PROJECT_IMG_25 from "../assets/images/PROJECT_IMG_25.png";
import PROJECT_IMG_26 from "../assets/images/PROJECT_IMG_26.png";
import PROJECT_IMG_27 from "../assets/images/PROJECT_IMG_27.png";
import PROJECT_IMG_28 from "../assets/images/PROJECT_IMG_28.png"
import PROJECT_IMG_29 from "../assets/images/PROJECT_IMG_29.png";
import PROJECT_IMG_30 from "../assets/images/PROJECT_IMG_30.png";
import PROJECT_IMG_31 from "../assets/images/PROJECT_IMG_31.png";
import PROJECT_IMG_32 from "../assets/images/PROJECT_IMG_32.png";
import PROJECT_IMG_33 from "../assets/images/PROJECT_IMG_33.png";

import Company_logo_1 from "../assets/images/company_logo_1.png";
import Company_logo_2 from "../assets/images/company_logo_2.png";
import Company_logo_3 from "../assets/images/company_logo_3.png";

export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
    { id: "01", count: "2", label: `Years of \nExperience` },
    { id: "02", count: "15", label: `Certification \nEarned` },
    { id: "03", count: "13", label: `Projects \nCompleted` },
    // {id:"04", count:"37",label:`Happly \nClients`},
];

export const SKILL_TABS = [
    { id: "01", label: "Programming", value: "programming" },
    { id: "02", label: "Design", value: "desain" },
    { id: "03", label: "Skills & Tools", value: "soft-skill" },
    { id: "04", label: "Certification & Achievement", value: "sertification" },
];

export const SKILLS = [
    {
        id: "01",
        skills: "Parkirkak Apps",
        image: PROJECT_IMG_1,
        type: "desain",
        description: "A parking app designed to help users easily find and book parking spots.",
        icon: FiFigma,
        link: "https://www.figma.com/design/PweUc9hrhz8jew7tVpXa2S/Parkir?node-id=74-2&t=klSN2jG8hKfJTGsB-1",
    },
    {
        id: "02",
        skills: "Blues webs",
        image: PROJECT_IMG_2,
        type: "desain",
        description: "A simple website for reserving seats and viewing café menus in catalog-style layout.",
        icon: FiFigma,
        link: "https://www.figma.com/design/zWU7YI8ab5l83euxXrJCKr/blues-coffe?node-id=0-1&t=6c3rGhIGtKAo0I8p-1",
    },
    {
        id: "03",
        skills: "Jitang product",
        image: PROJECT_IMG_3,
        type: "desain",
        description: "Jitang is a souvenir made from ketapang seeds, showcasing the natural charm of Banyuwangi.",
        icon: [FiFigma, SiPhotopea, SiAdobe],
        link: "https://www.behance.net/gallery/208254999/Product-Jitang/modules/1182879041",
    },
    {
        id: "04",
        skills: "CarebyMom Apps",
        image: PROJECT_IMG_4,
        type: "desain",
        description: "A baby gear rental app designed to help parents easily find and rent essential items.",
        icon: FiFigma,
        link: "https://www.figma.com/design/f4o586QUWZvB2FWEzr2x7z/carebymom?node-id=26-15&t=V5eQmnwLBKzaHL7n-1",
    },
    {
        id: "05",
        skills: "Procella webs",
        image: PROJECT_IMG_5,
        type: "desain",
        description: "A website interface for buying furniture, showing available products, prices, and descriptions.",
        icon: FiFigma,
        link: "https://www.figma.com/design/xczWJ8CyutIvS6G8CkN7aA/FURNITURE--WEB-PROJECT-LAST?node-id=0-1&t=fIqSzGnHhcxdExby-1",
    },
    {
        id: "06",
        skills: "Finfit Apps",
        image: PROJECT_IMG_6,
        type: "desain",
        description: "An app with an AR feature that helps users find outfits by scanning themselves in-app. ",
        icon: FiFigma,
        link: "https://www.figma.com/design/zuMql01lRdeCvERqQWLhNv/FinFit?node-id=0-1&t=6dVs52j42ZOnS0eg-1",
    },
    {
        id: "07",
        skills: "Procella",
        image: PROJECT_IMG_7,
        type: "programming",
        description: "Frontend of a furniture product website enabling users to browse, select, and securely purchase items online.",
        icon: [FaReact, DiJavascript, RiTailwindCssFill],
        link: "https://github.com/doracans/Procellaa",
    },
    {
        id: "08",
        skills: "RentCar Dashboard ",
        image: PROJECT_IMG_8,
        type: "programming",
        description: "Frontend dashboard for RentCar database focused on managing and monitoring rental car operations.",
        icon: [FaReact, DiJavascript, RiTailwindCssFill, SiAxios],
        link: "https://github.com/doracans/Dashboard-Rent-Car",
    },
    {
        id: "09",
        skills: "Portofolio",
        image: PROJECT_IMG_9,
        type: "programming",
        description: "Frontend of a personal portfolio showcasing various completed and presented projects attractively.",
        icon: [FaReact, DiJavascript, RiTailwindCssFill],
        link: "https://github.com/doracans/Portofolio-",
    },
    {
        id: "10",
        skills: "Caffe management",
        image: PROJECT_IMG_10,
        type: "programming",
        description: "Backend management system for a café including receipt printing and available table ordering feature.",
        icon: [SiTypescript, SiExpress, SiMysql, SiPrisma],
        link: "https://github.com/doracans/UKK",
    },
    {
        id: "11",
        skills: "RentCar",
        image: PROJECT_IMG_11,
        type: "programming",
        description: "Backend database management for RentCar dashboard to process, track, and maintain all rental activities.",
        icon: [SiTypescript, SiExpress, SiMysql, SiPrisma],
        link: "https://github.com/doracans/Backend-Sewa-Mobil",
    },
    {
        id: "12",
        skills: "Store",
        image: PROJECT_IMG_12,
        type: "programming",
        description: "Backend store database management using ODM for efficient data organization and retrieval.",
        icon: [FaNodeJs, SiMongoose, SiMongodb],
        link: "https://github.com/doracans/TransaksiMongodb",
    },
    {
        id: "13",
        skills: "IPTV Documentation",
        image: PROJECT_IMG_13,
        type: "programming",
        description: "API documentation with swagger for an IPTV project designed to streamline integration with frontend systems and developers.",
        icon: SiSwagger,
        link: "https://github.com/Blip-Apps/Server_IPTV_Back-Office/tree/feature/swagger-docsV1",
    },
    {
        id: "14",
        skills: "Digital Marketing",
        image: PROJECT_IMG_23,
        type: "sertification",
        description: "Badan Nasional Sertifikasi Profesi 2025",
        icon: [],
        link: "https://drive.google.com/file/d/1pb9LH3kCPVCj9W4hU6zyYbEjVQTBqZtN/view?usp=sharing",

    },
    {
        id: "15",
        skills: "Awardee Amartha Cendikia Scholarship Batch 3",
        image: PROJECT_IMG_22,
        type: "sertification",
        description: "Amartha Foundation 2024/2025",
        icon: [],
        link: "https://drive.google.com/file/d/1ZySaNqAqk8RWRiWzEWRM0-rkJxn_hz5o/view?usp=sharing",

    },
    {
        id: "16",
        skills: "Indonesian Language Proficiency Test",
        image: PROJECT_IMG_24,
        type: "sertification",
        description: "Kemendikbud (Ministry of Education and Culture Republic of Indonesia) 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1DFTvdTCMJT3kBjG9cIzny-xOM-nPks3K/view?usp=sharing",

    },
    {
        id: "17",
        skills: "Information Technology Specialist in Database",
        image: PROJECT_IMG_25,
        type: "sertification",
        description: "Certiport - A Pearson VUE Business 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1QVqGNIpiobWIrIeZLYavJwxdZAn_JP1v/view?usp=sharing",

    },
    {
        id: "18",
        skills: "Student Wordpress Developer of Teaching Factory Program",
        image: PROJECT_IMG_21,
        type: "sertification",
        description: "PT. Beon Intermedia 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1Y2gOqPK5ebBmrZyAsvnyaVl686AIDEf6/view?usp=sharing",

    },
    {
        id: "19",
        skills: "3rd Place Innovative Business Competition",
        image: PROJECT_IMG_14,
        type: "sertification",
        description: "Ulum Islamic University Lamongan 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1fYEceKY8QtFbISpcfEl0aDJIZ2d1G23N/view?usp=sharing",
    },
    {
        id: "20",
        skills: "Best Project National Student Ambassador",
        image: PROJECT_IMG_15,
        type: "sertification",
        description: "DPTN Edu Expo 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1FyjaJiwjdJu8DBRvWeylEw43-Od4OpVN/view?usp=sharing",
    },
    {
        id: "21",
        skills: "2nd Place Moklet Creatif Challange",
        image: PROJECT_IMG_16,
        type: "sertification",
        description: "SMK Telkom Malang 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1e0w3ZXrgNZbEebqhZPtXC6gcsUoXkVht/view?usp=sharing",
    },
    {
        id: "22",
        skills: "3rd Runner Up Business Idea Competition",
        image: PROJECT_IMG_17,
        type: "sertification",
        description: "Islamic University of Kadiri (UNISKA) Kediri 2024",
        icon: [],
        link: "https://drive.google.com/file/d/1F4h3k99IzoznO7IVfXKgs2RbKTG6RIuy/view?usp=sharing",
    },
    {
        id: "23",
        skills: "Favorite champion Business Case Competition",
        image: PROJECT_IMG_18,
        type: "sertification",
        description: "PT. Penerbit Erlangga 2023",
        icon: [],
        link: "https://drive.google.com/file/d/1uRmMrOp8srMCoW-ZJ3TtQ_wp1ElCR954/view?usp=sharing",

    },
    {
        id: "24",
        skills: "Semifinalist Business Plan Competition",
        image: PROJECT_IMG_19,
        type: "sertification",
        description: "Bandung Institute of Technology ITB 2023",
        icon: [],
        link: "https://drive.google.com/file/d/1x1CFSmbLGgvgW7_s1WCdLCcJbYXBrYd8/view?usp=sharing",

    },
    {
        id: "25",
        skills: "Top 10 Business Plan Competition",
        image: PROJECT_IMG_20,
        type: "sertification",
        description: "Widyagama University Malang 2023",
        icon: [],
        link: "https://drive.google.com/file/d/14td3cYCa_qSspFQelNHGBGcFwBbcz0Z3/view?usp=sharing",

    },
    {
        id: "26",
        skills: "Communication & Time Management",
        image: PROJECT_IMG_26,
        type: "soft-skill",
        description: "Able to communicate effectively and manage time efficiently in various work situations.",
        icon: [],
    },
    {
        id: "27",
        skills: "Problem Solving & Critical Thinking",
        image: PROJECT_IMG_27,
        type: "soft-skill",
        description: "Capable of analyzing problems and finding logical solutions effectively and accurately.",
        icon: [],
    },
    {
        id: "28",
        skills: "Leadership & Teamwork",
        image: PROJECT_IMG_28,
        type: "soft-skill",
        description: "Able to lead and collaborate harmoniously in teams such as projects and competitions.",
        icon: [],
    },
    {
        id: "29",
        skills: "Public Speaking",
        image: PROJECT_IMG_29,
        type: "soft-skill",
        description: "Capable of presenting ideas clearly and engagingly in public or professional presentations.",
        icon: [],
    },
    {
        id: "30",
        skills: "Version Control & Tools",
        image: PROJECT_IMG_30,
        type: "soft-skill",
        description: "Experienced in using Git, GitHub, Figma, VSCode, Postman, Swagger, and various collaboration tools daily.",
        icon: [FaGithub, VscVscode, VscTerminalPowershell, SiPostman, SiSwagger, FaGitAlt],
        link: "",
    },
    {
        id: "31",
        skills: "UI/UX Design",
        image: PROJECT_IMG_31,
        type: "soft-skill",
        description: "Skilled in creating wireframes, prototypes, and user-friendly interface designs using Figma and others.",
        icon: [FiFigma, SiCanva, SiPhotopea],
    },
    {
        id: "32",
        skills: "Web Programming",
        image: PROJECT_IMG_32,
        type: "soft-skill",
        description: "Capable of developing front-end and back-end websites using HTML, CSS, TypeScript, JavaScript, frameworks.",
        icon: [FaReact, BiLogoJavascript, BiLogoTypescript, RiTailwindCssFill, FaNodeJs, SiExpress, SiMongodb, SiMysql],
    },
    {
        id: "33",
        skills: "Digital Marketing",
        image: PROJECT_IMG_33,
        type: "soft-skill",
        description: "Experienced in digital marketing strategies such as SEO, social media content, and data-driven analysis.",
        icon: [SiGoogleanalytics, FaInstagram,],
    },


];

export const ABOUT_ME = {
    content: `I'm a Software Engineering graduate and a junior web developer with a strong passion for both frontend and backend development. My journey started through school projects and national competitions, where I developed skills in building responsive, interactive, and accessible web applications. I specialize in React, TailwindCSS, and TypeScript, and also have experience with backend technologies like Node.js and Express. I'm comfortable working with databases, integrating APIs, and using tools such as Git, GitHub, Figma, VSCode, Postman, and Swagger to support end-to-end development.

\nBeyond technical expertise, I enjoy solving real-world problems through thoughtful design, clean architecture, and scalable code. I’m passionate about designing user flows, wireframes, and interfaces that balance functionality and aesthetics. I’m also familiar with digital marketing strategies like SEO and data-driven content planning. Currently, I’m focused on learning scalable frontend architecture, reusable components, and maintainable fullstack systems. I'm always eager to collaborate, grow, and contribute to impactful tech solutions.`,

    socialLinks: [
        { id: "01", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/shr.pus/" },
        { id: "02", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/saharani-pusfita/" },
        { id: "03", label: "Github", icon: FaGithub, link: "https://github.com/doracans" },
        { id: "04", label: "Behance", icon: FaBehance, link: "https://www.behance.net/shrvitasaharani" },
    ],

};


export const PROJECTS = [
    {
        id: 1,
        title: "Mobile App for Baby Gear Rental | Complete UI/UX Design and Prototyping in Figma",
        image: PROJECT_IMG_4,
        tags: ["Figma"],
    },
    {
        id: 2,
        title: "Responsive Furniture E-Commerce Website | Developed Using React, JavaScript, and Tailwind CSS",
        image: PROJECT_IMG_7,
        tags: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Traditional Snack Branding from Banyuwangi | Mockup Design, Packaging, and Product Identity",
        image: PROJECT_IMG_3,
        tags: ["Photopea", "Canva", "Adobe", "Figma"],
    },
    {
        id: 4,
        title: "Mobile Parking Reservation App with Payment Reminder Notification | Designed and Prototyped in Figma",
        image: PROJECT_IMG_1,
        tags: ["Figma"],
    },
    {
        id: 5,
        title: "RentCar Dashboard Frontend Development | Integrated with Backend API Using React and Axios",
        image: PROJECT_IMG_8,
        tags: ["React", "JavaScript", "Tailwind CSS", "Axios"],
    },
    {
        id: 6,
        title: "Cafe Website for Table Reservation and Menu Display | Full UI/UX Design and Figma Prototype",
        image: PROJECT_IMG_2,
        tags: ["Figma"],
    },
    {
        id: 7,
        title: "Backend Development for RentCar Admin Dashboard | Built with TypeScript, Prisma ORM, and MySQL",
        image: PROJECT_IMG_11,
        tags: ["Express", "TypeScript", "Prisma", "MySQL", "Postman"],
    },
    {
        id: 8,
        title: "Backend System for Online Store Management | MongoDB Atlas and Mongoose ODM Integration",
        image: PROJECT_IMG_12,
        tags: ["Express", "JavaScript", "MongoDB", "Mongoose", "Rest API"],
    },
    {
        id: 9,
        title: "Backend API for Cafe Management System | TypeScript, Prisma ORM, MySQL, and RESTful Services",
        image: PROJECT_IMG_10,
        tags: ["Express", "TypeScript", "Prisma", "MySQL", "Rest API"],
    },
    {
        id: 10,
        title: "IPTV API Documentation with Authentication System | Created Using Swagger",
        image: PROJECT_IMG_13,
        tags: ["Swagger"],
    },
];


export const EXPERIENCES = [
    {
        id: 1,
        image: Company_logo_1,
        role: "Backend Developer Intern",
        company: "PT. Semua Aplikasi Indonesia",
        location: "Onsite",
        duration: "Nov 2024 - May 2025",
        description: [
            "Developed CRUD features using Mongoose and MongoDB.",
            "Built a dashboard with React integrated with REST APIs.",
            "Created REST APIs for IPTV services, including authentication and API documentation using Swagger."
        ],
        technologies: [
            { icon: SiMongodb, color: "#47A248" },
            { icon: SiMongoose, color: "#880000" },
            { icon: SiSwagger, color: "#85EA2D" },
            { icon: SiTypescript, color: "#3178C6" },
            { icon: SiJavascript, color: "#E34F26" },
            { icon: SiNodedotjs, color: "#339933" },
            { icon: SiExpress, color: "#000000" },
            { icon: SiPostman, color: "#FF6C37" },

        ],
    },
    {
        id: 2,
        image: Company_logo_2,
        role: "Digital Marketing Bootcamp",
        company: "Telkom DigiUp",
        location: "Online",
        duration: "Nov 2024 - Dec 2024",
        description: [
            "Studied digital marketing strategies through case studies and hands-on practice, including Google optimization.",
            "Designed advertisements using both soft-selling and hard-selling approaches.",
            "Planned advertising timelines and budgets, and defined measurable targets using KPIs."
        ],
        technologies: [
            { icon: SiCanva, color: "#00C4CC" },
            { icon: SiInstagram, color: "#E1306C" },
            { icon: SiGoogle, color: "#4285F4" },
            { icon: FaRegFileExcel, color: "#217346" },
            ],
    },
    {
        id: 3,
        image: Company_logo_3,
        role: "WordPress Developer TeFa",
        company: "Jagoan Hosting",
        location: "Onsite",
        duration: "Jan - Feb 2024",
        description: [
            "Learned the fundamentals of website development using WordPress.",
            "Created responsive and user-friendly website layouts using custom themes.",
            "Understood the process of uploading a website to a personal domain using cPanel."
        ],
        technologies: [
            { icon: SiWordpress, color: "#21759B" },    
            { icon: SiCpanel, color: "#FF6C2C" },       
            { icon: SiFigma, color: "#F24E1E" },        
            { icon: SiHtml5, color: "#E34F26" },       
            { icon: SiCss3, color: "#1572B6" },        
        ],
    },
];

