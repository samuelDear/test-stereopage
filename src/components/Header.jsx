import { SHOPPING_CART_IC, LOGO_STORE } from '../images';
import '../styles/components/Header.scss';

const Header = ({ productInCart }) => {
  return (
    <header className="headerBox">
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
