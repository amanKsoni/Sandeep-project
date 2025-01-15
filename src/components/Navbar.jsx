import React from "react";
import { CATEGORIES } from "../constants";

const Navbar = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <div className="navbar">
      <button
        onClick={() => setSelectedCategory(CATEGORIES.ALL)} // Wrap in an arrow function
        className={CATEGORIES.ALL === selectedCategory ? "selectedNavButton" : "navButton"}
      >
        All
      </button>
      <button
        onClick={() => setSelectedCategory(CATEGORIES.STOCKS)} // Wrap in an arrow function
        className={CATEGORIES.STOCKS === selectedCategory ? "selectedNavButton" : "navButton"}
      >
        Stocks
      </button>
      <button
        onClick={() => setSelectedCategory(CATEGORIES.OPTIONS)} // Wrap in an arrow function
        className={CATEGORIES.OPTIONS === selectedCategory ? "selectedNavButton" : "navButton"}
      >
        Options
      </button>
    </div>

  );
};

export default Navbar;