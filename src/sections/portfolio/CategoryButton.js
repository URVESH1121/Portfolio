import React from "react";

const CategoryButton = ({ category, className, onChangeCategories }) => {
  return (
    <button
      className={className}
      onClick={() => {
        onChangeCategories(category);
      }}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
