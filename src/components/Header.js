import { SHOPPING_CART_IC, LOGO_STORE } from '../images';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="headerBox">
      <img src={LOGO_STORE} class="headerBox-logo" alt="Logo" title="Logo" />
      <nav class="navBox">
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </nav>
      <img src={SHOPPING_CART_IC} class="headerBox-shopping-cart-ic" alt="Shopping Cart Icon" title="Shopping Cart" />
    </header>
  );
}

export default Header;
