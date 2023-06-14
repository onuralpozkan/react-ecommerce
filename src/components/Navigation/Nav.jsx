import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import data from "../../store/api/db.json";
import "./Nav.css";
const Nav = ({ clsName, closeMenu }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });

  const navStyles = {
    transform: clsName === "open" ? "translateX(0%)" : "translateX(-100%)",
    transition: "transform .2s ease-in",
  };

  return (
    <nav style={navStyles}>
      <ul>
        {isLoading
          ? "Loading..."
          : data.categories.map((category) => (
              <li key={category.id} onClick={closeMenu}>
                <Link to={`/categories/${category.seoUrl}-${category.id}`}>
                  {category.categoryNameTr}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Nav;
