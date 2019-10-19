import React from "react";

export default function CategorySidebar(props) {
  const { category, handleCategoryClick } = props;
  // console.log("handleCategoryClick", handleCategoryClick);

  return (
    <>
      <p>Select a category:</p>

      <div>
        <input
          type="radio"
          id="all"
          name="category"
          value="all"
          defaultChecked={category === 'all' ? true : false}
          onChange={() => handleCategoryClick('all')}
        />
        <label htmlFor="all">All</label>
      </div>

      <div>
        <input
          type="radio"
          id="mobileGame"
          name="category"
          value="mobileGame"
          defaultChecked={category === 'mobileGame' ? true : false}
          onChange={() => handleCategoryClick('Mobile Game')}
        />
        <label htmlFor="mobileGame">Mobile Game</label>
      </div>

      <div>
        <input
          type="radio"
          id="computerGame"
          name="category"
          value="computerGame"
          defaultChecked={category === 'computerGame' ? true : false}
          onChange={() => handleCategoryClick('Computer Game')}
        />
        <label htmlFor="computerGame">Computer Game</label>
      </div>
    </>
  );
}
