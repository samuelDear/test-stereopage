import {
  TWITTER_WHITE_IC,
  FACEBOOK_WHITE_IC,
  INSTAGRAM_WHITE_IC,
} from '../images';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footerBox">
      <div className="footerBox-content">
        <h1 className="titlePage">audiophile</h1>
        <p className="dscPage">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialist who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open days a week.
        </p>
        <span className="copy">Copyright &copy; 2021. All Right Reserved</span>
      </div>
      <div className="footerBox-content">
        <nav className="navBoxFooter">
          <span>HOME</span>
          <span>HEADPHONES</span>
          <span>SPEAKERS</span>
          <span>EARPHONES</span>
        </nav>
        <div className="socialBox">
          <img
            src={FACEBOOK_WHITE_IC}
            className="socialIcon"
            alt="Facebook"
            title="Facebook"
          />
          <img
            src={TWITTER_WHITE_IC}
            className="socialIcon"
            alt="Twitter"
            title="Twitter"
          />
          <img
            src={INSTAGRAM_WHITE_IC}
            className="socialIcon"
            alt="Instagram"
            title="Instagram"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
