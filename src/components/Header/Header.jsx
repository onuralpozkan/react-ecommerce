import { useState } from "react";
import "./Header.css";
import Nav from "../Navigation/Nav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bars = <i class="las la-bars"></i>;
  const times = <i class="las la-times"></i>;

  const state = useSelector((state) => state.cartReducer);

  return (
    <>
    <header className="header">
      <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu">
        {isMenuOpen ? times : bars} <span>Kategoriler</span>
      </span>
      <span className="brand">
        <Link to="/">Brand</Link>
      </span>
      <span className="login">
        <Link to="/login">
        <i className="las la-user"></i>
        </Link>
      </span>
      <span className="cart">
        <Link to="/cart">
          <i class="las la-shopping-cart"></i>
        </Link>
        {state.length !== 0 && <span className="cartInfo">{state.length}</span>}
      </span>

      <Nav clsName={isMenuOpen && "open"} closeMenu={()=>setIsMenuOpen(false)}/>
    </header>
    {isMenuOpen && <div className="menu-overlay" onClick={()=>setIsMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
