import { useState } from 'react';
import { SHOPPING_CART_IC, LOGO_STORE } from '../images';
import Sidebar from './Sidebar';
import '../styles/components/Header.scss';

const Header = ({ productInCart }) => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className="headerBox">
      {showNavBar ? (
        <Sidebar closeSidebar={() => setShowNavBar(false)} />
      ) : null}
      <div
        className="hamburguerBox"
        onClick={() => setShowNavBar((prevState) => !prevState)}
      >
        <div className="hamburguer">
          <span className="lineBurguer" id="bread1"></span>
          <span className="lineBurguer" id="bistek"></span>
          <span className="lineBurguer" id="bread2"></span>
        </div>
      </div>
      <img
        src={LOGO_STORE}
        className="headerBox-logo"
        alt="Logo"
        title="Logo"
      />
      <nav className="navBox">
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </nav>
      <div className="cartBox">
        <img
          src={SHOPPING_CART_IC}
          className="headerBox-shopping-cart-ic"
          alt="Shopping Cart Icon"
          title="Shopping Cart"
        />
        {productInCart ? <span>1</span> : null}
      </div>
    </header>
  );
};

export default Header;
