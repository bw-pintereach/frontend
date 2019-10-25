import React from "react";

export default function CategorySidebar(props) {
  const { selectedCategory, categories, handleCategoryClick } = props;
  console.log("CategorySidebar selectedCategory", selectedCategory);

  return (
    <div>
      <p>Select a category:</p>

      <div>
        <input
          type="radio"
          id="all"
          name="selectedCategory"
          value="all"
          defaultChecked={selectedCategory === "all" ? "checked" : ""}
          onChange={() => handleCategoryClick("all")}
        />{" "}
        <label htmlFor="all">All</label>
      </div>

      {categories.map(category => {
        return (
          <div key={category}>
            <input
              type="radio"
              id={category}
              name="selectedCategory"
              value={category}
              onChange={() => handleCategoryClick(category)}
            />{" "}
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </div>
  );
}
