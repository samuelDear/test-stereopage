import { useState} from 'react';
import { HEADPHONES_BOSE } from '../images';
import '../styles/components/ProductDetail.scss';

const ProductDetail = ({ changeProductToCard, productInCar }) => {
  const [qtyProduct, setQtyProduct] = useState(1);

  const addProduct = () => {
    setQtyProduct(prevState => prevState + 1);
  };

  const lessProduct = () => {
    setQtyProduct(prevState => prevState <= 1 ? 1 : prevState - 1);
  };

  return (
    <div>
      <div className="goBackBox">
        <span className="goBackBox-text">Go Back</span>
      </div>
      <div className="productBox">
        <div className="productBox-img">
          <img src={HEADPHONES_BOSE}  alt="Headphone BOSE" title="Headphones BOSE" />
        </div>
        <div className="productBox-description">
          <span className="newProductLabel">NEW PRODUCT</span>
          <h2 className="productName">Bose Noise Cancelling Headphones 700, Bluetooth</h2>
          <p className="productDsc">Bose headphones 700 feature an unrivaled microphone system that picks up and isolates your voice while cancelling the noise around you. You’ll hear and be heard like never before. These headphones are also optimized for Amazon Alexa and the Google Assistant.</p>
          <p className="productPrice">$ 379.00</p>
          <div className="buyProductBox">
            <div className="qtyProductBox">
              <button type="button" onClick={lessProduct} className="btnActionQty">
                -
              </button>
              <span className="qtyProducts">
                {qtyProduct}
              </span>
              <button type="button" onClick={addProduct} className="btnActionQty">
                +
              </button>
            </div>
            <button type="button" className="btnAddCart" onClick={() => changeProductToCard(!productInCar)}>
              {!productInCar ? 'ADD TO CART' : 'REMOVE FROM CART'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
