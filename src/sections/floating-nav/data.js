import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const data = [
  {
    id: 1,
    link: "#",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    link: "#about",
    icon: <BsFillPersonFill />,
  },
  {
    id: 3,
    link: "#services",
    icon: <MdHomeRepairService />,
  },
  {
    id: 4,
    link: "#portfolio",
    icon: <AiFillAppstore />,
  },
  {
    id: 5,
    link: "#contact",
    icon: <AiFillMessage />,
  },
];

export default data;
