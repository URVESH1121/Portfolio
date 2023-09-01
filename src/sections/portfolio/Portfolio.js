import React, { useState } from "react";
import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHAndler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filteredProjects = data.filter(
      (projects) => projects.category === category
    );
    setProjects(filteredProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects I recently worked.</p>
      <div className="container portfolio__container" >
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProject={filterProjectsHAndler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
