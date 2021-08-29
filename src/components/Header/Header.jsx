import styles from './Header.module.css';
import Nav from '../Navigation/Nav'
const Header = () => {
  return (
  <header className={styles.header}>
      {/* <Brand />
      <Login />
      <Cart /> */}
      <Nav />
      Başlık
  </header>);
};

export default Header;
