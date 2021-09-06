import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Nav.css";
const Nav = ({ clsName, closeMenu}) => {
  
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/categories"
  );
  const navStyles = {
    transform: clsName === "open" ? "translateX(0%)" : "translateX(-100%)",
    transition: "transform .2s ease-in",
  };

  return (
    <nav style={navStyles}>
      <ul>
        {isLoading
          ? "Loading..."
          : data.map((category) => (
              <li key={category.id} onClick={closeMenu}>
                <Link to={`/categories/${category.seoUrl}-${category.id}`}>{category.categoryNameTr}</Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Nav;
