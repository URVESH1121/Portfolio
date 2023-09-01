import React, { useEffect, useState } from "react";
import "./about.css";
import AboutImage from "../../assets/urvesh_about2.jpg";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  const BIRTHDATE = new Date("2001-12-01");
  const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  const [ageInPoints, setAgeInPoints] = useState(
    (new Date() - BIRTHDATE) / MS_PER_YEAR
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAgeInPoints((new Date() - BIRTHDATE) / MS_PER_YEAR);
    }, 100);
    return () => clearInterval(intervalId);
  });
  const ageInYearsFormatted = ageInPoints.toFixed(9);
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About__Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p id="subline">Let me introduce myself </p>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>Engineer by profession and a Developer by heart. ❤️</p>
          <p>
            I'm a <strong>{ageInYearsFormatted} </strong> y/o college student
            and self-taught developer based in India. I am a passionate
            developer who to learn new technologies and implement them in real
            world projects 🚀. I am a quick learner and always ready to accept
            new challenges 🏃‍♂️. I am a team player and always ready to help my
            team members.
          </p>
          <p>
            Hi, my name is Urvesh Radadiya from Gujarat, India. I'm a front-end
            web developer with a Bachelors degree in Computer Science. My top
            priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check out my resume below!
          </p>
          <p>
            Shoot me a message via any of social media handle!Let's work
            together to bring your ideas to life!
          </p>
          <a href="https://drive.google.com/file/d/1AGOw34fHO9l1_FLNfhnGXcL_5067gQhS/view?usp=sharing" download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
