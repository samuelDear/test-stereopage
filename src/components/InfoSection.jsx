import { BRAND_IMAGE } from '../images';
import '../styles/components/InfoSection.scss';

const InfoSection = () => {
  return (
    <div className="infoMainBox">
      <div className="infoMainBox-dsc">
        <h1>
          BRINGING YOU THE <span className="keyworkColor">BEST</span> AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Auiphile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demostration rooms avaliable for
          you to browse and experience a wide range of our products. Stop By our
          store to meet some of the fantastic people who make Audiphile the best
          place to buy your portable audio equipment
        </p>
      </div>
      <div className="infoMainBox-image">
        <img src={BRAND_IMAGE} alt="Brand" title="Brand" />
      </div>
    </div>
  );
};

export default InfoSection;
