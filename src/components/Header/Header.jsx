import styles from "./Header.module.css";
import { useState } from "react";
import Nav from "../Navigation/Nav";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <span onClick={() => setIsMenuOpen(!isMenuOpen)}>MENU</span>
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
