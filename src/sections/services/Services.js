import React from "react";
import "./services.css";
import data from "./data";
import { motion } from "framer-motion";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h2>Technology</h2>
      <p>I have knowledge of this technologys</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}
              className="hover:cursor-grab"
            >
              <Card key={item.id} className="service light">
                <div className="service__icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h4 style={{ color: item.color }} >{item.title}</h4>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
