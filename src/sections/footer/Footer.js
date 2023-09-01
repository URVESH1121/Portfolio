import React from "react";
import "./footer.css";
import { links, socials } from "./data";
import Particle from "../../components/Particle";

const Footer = () => {
  return (
    <footer>
      <div className="particles">
        <Particle />
      </div>
      <div className="container footer_container">
        <ul className="nav__menu">
          {links.map((flink) => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.id}
              target="_black"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <h4>
           MADE WITH ❤️ BY URVESH RADADIYA (2023)
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
