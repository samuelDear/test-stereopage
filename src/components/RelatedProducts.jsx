import {
  ASTRO_HEADPHONES,
  BEATS_HEADPHONES,
  RAZER_HEADPHONES,
  EARPHONES_IMG,
  HEADPHONES_IMG,
  SPEAKER_IMG,
} from '../images';
import '../styles/components/RelatedProducts.scss';

const relatedProducts = [
  {
    img: ASTRO_HEADPHONES,
    name: 'Astro A20',
  },
  {
    img: BEATS_HEADPHONES,
    name: 'Beats Studio3',
  },
  {
    img: RAZER_HEADPHONES,
    name: 'BlackShark V2',
  },
];

const categories = [
  {
    img: EARPHONES_IMG,
    name: 'EARPHONES',
  },
  {
    img: HEADPHONES_IMG,
    name: 'HEADPHONES',
  },
  {
    img: SPEAKER_IMG,
    name: 'SPEAKERS',
  },
];

const RelatedProducts = () => {
  return (
    <>
      <h1 className="relatedProductTitle">YOU MAY ALSO LIKE</h1>
      <div className="relatedProducts">
        {relatedProducts.map((el, index) => (
          <div
            key={`${el.name}-${index.toString()}`}
            className="relatedProductBox"
          >
            <div className="relatedProductBox-image">
              <img src={el.img} alt={el.name} title={el.name} />
            </div>
            <p className="relatedProductBox-name">{el.name}</p>
            <button type="button" className="relatedProductBox-btnView">
              SEE PRODUCT
            </button>
          </div>
        ))}
      </div>
      <div className="relatedProducts">
        {categories.map((el, index) => (
          <div key={`${el.name}-${index.toString()}`} className="categoriesBox">
            <img src={el.img} alt={el.name} title={el.name} />
            <p className="categoriesBox-name">{el.name}</p>
            <p className="categoriesBox-view">
              <span>SHOP</span> &gt;
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
