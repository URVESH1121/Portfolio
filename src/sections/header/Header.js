import React from "react";
import "./header.css";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particle from "../../components/Particle";
import Typical from "react-typical";
import ComputersCanvas from "../canvas/Computer";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="particles">
        <Particle />
      </div>
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <ComputersCanvas />
        </div>
        <h4 data-aos="fade-up">Hello 👋, I'm </h4>
        <div className="type">
          <Typical
            loop={Infinity}
            steps={[
              "URVESH RADADIYA 🙎‍♂️",
              8000,
              "React JS Developer 💻",
              2000,
              "Ethusiastic Dev 😎",
              2000,
              "Front-End Dev 🧑‍💻",
              2000,
              "Web Developer 🕸️",
              2000,
              "Continuous learner 📖",
              2000,
            ]}
          />
        </div>
        <p data-aos="fade-up">
          I am Urvesh Radadiya from Gujarat, India. I am a React JS
          Developer.Currently I am pursuing my Bachelors in Computer Engineering
          from Gujarat Technological University.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              target="_blank"
              href={item.link}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
