import { RiComputerLine } from 'react-icons/ri'
import { FaServer , FaReact , FaPhp} from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi , AiFillHtml5 , AiFillGithub } from 'react-icons/ai'
import { FaSearchengin , FaWordpress} from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { Service, Skill , IProject } from './type'
import { SiJavascript , SiTailwindcss , SiFlutter , SiCsharp , SiDotNet , SiAdobephotoshop} from 'react-icons/si'

import { BsCircleFill } from 'react-icons/bs'

export const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'Building a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> ,<b>React.js</b> and other technologies',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'Handle database, server, and api using <b>Express </b> <b>PHP</b> <b>Node</b> and other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I develop robust  REST API using <b>PHP</b>  & <b>Node API</b> ',
   },
   {
      Icon: FaSearchengin,
      title: 'SEO Optimization',
      about:
         'improves website rankings on major search engines, such as <b> Google </b>, <b>Yahoo! </b> and <b>Bing. </b> ',
   },
   
]

export const languages: Skill[] = [
      {
         Icon: AiFillHtml5,
         name: 'HTML',
         level: '100',
      },
      {
         Icon: SiJavascript,
         name: 'Java Script',
         level: '100',
      },
      {
         Icon: FaReact,
         name: 'React',
         level: '100',
      },
      {
         Icon: SiTailwindcss,
         name: 'Tailwind CSS',
         level: '100',
      },
      {
         Icon: FaPhp,
         name: 'Php',
         level: '100',
      },
      {
         Icon: FaWordpress,
         name: 'Wordpress',
         level: '100',
      },
      {
            Icon: AiFillGithub,
            name: 'Git',
            level: '100',
         },
   ]
   
   export const tools: Skill[] = [
      {
         Icon: SiFlutter,
         name: 'Flutter',
         level: '100',
      },
      {
         Icon: SiCsharp,
         name: 'C#',
         level: '100',
      },
      {
         Icon: SiDotNet,
         name: 'Dot Net',
         level: '100',
      },
      {
         Icon: SiAdobephotoshop,
         name: 'Photoshop',
         level: '100',
      },
   ]
   export const projects: IProject[] = [
      { 
        name: "COVID Tracker",
        description:
          "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.png",
        deployed_url: "https://reactapp-3b15f.firebaseapp.com/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
      },
      
      {
        name: "Developers Hub",
        image_path: "/images/dev.png",
        deployed_url: "https://lit-cove-16250.herokuapp.com/",
        github_url: "https://github.com/SahilCR7/Developers-Hub.git",
        category: ["node", "mongo", "react"],
        description:
          "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
          "React",
          "Redux",
          "Node",
          "Express",
          "Mongo",
          "REST API",
          
        ],
      },
    
      {
        name: "Jessys Flavour World",
        image_path: "/images/foods.png",
        deployed_url: "https://www.jessysflavourworld.com/",
        github_url: "#",
        category: ["wordpress"],
        description:
          "A food blog to share new recipes",
        key_techs: ["Wordpress"],
      },
    
      {
        name: "Passive IP Traceback",
        image_path: "/images/iptrace.jpg",
        deployed_url: "#",
        github_url: "https://github.com/SahilCR7/Passive-IP-Tracebacking",
        category: ["java"],
        description:
          "Passive IP Traceback: Disclosing the Locations of IP Spoofers From Path Backscatter",
        key_techs: ["java"],
      },
    
     
    ];