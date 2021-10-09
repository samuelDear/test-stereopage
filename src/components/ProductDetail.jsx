import { useState } from 'react';
import { HEADPHONES_BOSE } from '../images';
import '../styles/components/ProductDetail.scss';

const ProductDetail = ({ changeProductToCard, productInCar }) => {
  const [qtyProduct, setQtyProduct] = useState(1);

  const addProduct = () => {
    setQtyProduct((prevState) => prevState + 1);
  };

  const lessProduct = () => {
    setQtyProduct((prevState) => (prevState <= 1 ? 1 : prevState - 1));
  };

  return (
    <div>
      <div className="goBackBox">
        <span className="goBackBox-text">Go Back</span>
      </div>
      <div className="productBox">
        <div className="productBox-img">
          <img
            src={HEADPHONES_BOSE}
            alt="Headphone BOSE"
            title="Headphones BOSE"
          />
        </div>
        <div className="productBox-description">
          <span className="newProductLabel">NEW PRODUCT</span>
          <h2 className="productName">
            Bose Noise Cancelling Headphones 700, Bluetooth
          </h2>
          <p className="productDsc">
            Bose headphones 700 feature an unrivaled microphone system that
            picks up and isolates your voice while cancelling the noise around
            you. You’ll hear and be heard like never before. These headphones
            are also optimized for Amazon Alexa and the Google Assistant.
          </p>
          <p className="productPrice">$ 379.00</p>
          <div className="buyProductBox">
            <div className="qtyProductBox">
              <button
                type="button"
                onClick={lessProduct}
                className="btnActionQty"
              >
                -
              </button>
              <span className="qtyProducts">{qtyProduct}</span>
              <button
                type="button"
                onClick={addProduct}
                className="btnActionQty"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="btnAddCart"
              onClick={() => changeProductToCard(!productInCar)}
            >
              {!productInCar ? 'ADD TO CART' : 'REMOVE FROM CART'}
            </button>
          </div>
        </div>
      </div>
      <div className="productDetails">
        <div className="productDetails-features">
          <h1>FEATURES</h1>
          <ul className="listStyle">
            <li>
              Powerful noise cancelling headphones: 11 levels of active noise
              cancelling let you enjoy music, podcasts, videos & calls without
              distractions
            </li>
            <li>
              Astonishing sound: Crisp, clear details. Deep, full bass. These
              wireless headphones produce exciting, lifelike sound that’s full
              and balanced at every volume level
            </li>
            <li>
              Unrivaled voice pickup: A revolutionary microphone system adapts
              to noisy and windy environments so your voice always sounds
              crystal clear on calls
            </li>
            <li>
              Up to 20 hours of non-stop music: Get up to 20 hours of wireless
              battery life on a single charge
            </li>
          </ul>
          <p className="productDetails-dsc">
            Turn any space into the perfect place to listen to music, make phone
            calls, or get work done. Bose Noise Cancelling Headphones 700
            reinvent what true wireless headphones are — and redefine what they
            can be. Bose headphones 700 feature an unrivaled microphone system
            that picks up and isolates your voice while cancelling the noise
            around you. You’ll hear and be heard like never before. These
            headphones are also optimized for Amazon Alexa and the Google
            Assistant.
          </p>
        </div>
        <div className="productDetails-content">
          <h1>IN THE BOX</h1>
          <ul className="listContent">
            <li>
              <span className="quantityInBox">1x</span> Headphone unit
            </li>
            <li>
              <span className="quantityInBox">2x</span> Replacement Earcups
            </li>
            <li>
              <span className="quantityInBox">1x</span> User Manual
            </li>
            <li>
              <span className="quantityInBox">2x</span> 3.5mm 5m Audio Cable
            </li>
            <li>
              <span className="quantityInBox">1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
