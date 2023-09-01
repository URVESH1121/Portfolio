import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategories = ({ categories, onFilterProject }) => {
  const [activeCategories, setActiveCategories] = useState("all");

  const ChangeCategoriesHangler = (activeCat) => {
    setActiveCategories(activeCat);
    onFilterProject(activeCat);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategories={() => {
            ChangeCategoriesHangler(category);
          }}
          className={`btn cat__btn ${
            activeCategories === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
