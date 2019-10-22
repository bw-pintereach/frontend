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
          defaultChecked={category === "all" ? true : false}
          onChange={() => handleCategoryClick("all")}
        />
        <label htmlFor="all">All</label>
      </div>

      <div>
        <input
          type="radio"
          id="Game"
          name="category"
          value="Game"
          defaultChecked={category === "Game" ? true : false}
          onChange={() => handleCategoryClick("Game")}
        />
        <label htmlFor="Game">Game</label>
      </div>

      <div>
        <input
          type="radio"
          id="Gasdfsdfme"
          name="category"
          value="Gasdfsdfme"
          defaultChecked={category === "Gasdfsdfme" ? true : false}
          onChange={() => handleCategoryClick("Gasdfsdfme")}
        />
        <label htmlFor="Gasdfsdfme">Gasdfsdfme</label>
      </div>
    </>
  );
}
