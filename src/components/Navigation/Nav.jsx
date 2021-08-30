import { Link } from "react-router-dom";
import styles from "./Nav.module.css"
const Nav = ({clsName}) => {
    console.log("Nav", clsName);
    const navStyles = {
        position:"absolute",
        top:"80px",left:"0",
        transform: clsName === "open" ? "translateX(0%)" : "translateX(-100%)",
        backgroundColor:'blue',
        transition:"transform .2s ease-in"
    }
  return (
    <nav style={navStyles}>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product-detail">Product Detail</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
