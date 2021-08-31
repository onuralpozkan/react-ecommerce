import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Nav.css";
const Nav = ({ clsName }) => {
  //console.log("Nav", clsName);
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/categories"
  );

  console.log(data);
  const navStyles = {
    transform: clsName === "open" ? "translateX(0%)" : "translateX(-100%)",
    transition: "transform .2s ease-in",
  };
  return (
    <nav style={navStyles}>
      <ul>
        {isLoading
          ? "LOADİNGGLAN"
          : data.map((category) => (
              <li key={category.id}>
                <Link to={category.seoUrl}>{category.categoryName}</Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Nav;
