import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Nav.css";
const Nav = ({ clsName }) => {
  
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/categories"
  );
  const navStyles = {
    transform: clsName === "open" ? "translateX(0%)" : "translateX(-100%)",
    transition: "transform .2s ease-in",
  };
  const toTop = () => {
    window.scrollTo(0,340)
  }
  return (
    <nav style={navStyles}>
      <ul>
        {isLoading
          ? "Loading..."
          : data.map((category) => (
              <li key={category.id} onClick={toTop}>
                <Link to={`/categories/${category.seoUrl}-${category.id}`}>{category.categoryName}</Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Nav;
