import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const data = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
    title: "HTML",
    color: " #FF6D00",
  },
  {
    id: 2,
    icon: <DiCss3 />,
    title: "CSS",
    color: " #0277BD",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    color: " #FFD600",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Bootstrap",
     color: " #7952B3",   
  },
  {
    id: 5,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: " #06B6D4",
  },
  {
    id: 6,
    icon: <FaReact />,
    title: "React JS",
    color: " #61DBFB",
  },
  {
    id: 7,
    icon: <SiRedux />,
    title: "Redux",
    color: " #764ABC",
  },
  {
    id: 8,
    icon: <AiFillGithub />,
    title: "GitHub",
    color: " #777777",
  },
];

export default data;
