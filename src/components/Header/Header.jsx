import styles from "./Header.module.css";
import { useState } from "react";
import Nav from "../Navigation/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bars = <i class="las la-bars"></i>;
  const times = <i class="las la-times"></i>;
  return (
    <header className={styles.header}>
      <span onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menu}>
        {isMenuOpen ? times : bars} <span>Kategoriler</span>
      </span>
      <span className={styles.brand}>
        <Link to="/">Brand</Link>
      </span>
      <span className={styles.login}>
        <i className="las la-user"></i>
      </span>
      <span className={styles.cart}>
        <i class="las la-shopping-cart"></i>
      </span>

      <Nav clsName={isMenuOpen && "open"} />
    </header>
  );
};

export default Header;
