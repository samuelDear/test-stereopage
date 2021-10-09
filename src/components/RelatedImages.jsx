import {
  PRODUCT_FEATURE_IMG1,
  PRODUCT_FEATURE_IMG2,
  PRODUCT_FEATURE_IMG3,
  PRODUCT_FEATURE_IMG4,
} from 'images';
import '../styles/components/RelatedImages.scss';

const RelatedImages = () => {
  return (
    <div className="relatedImagesBox">
      {[
        PRODUCT_FEATURE_IMG1,
        PRODUCT_FEATURE_IMG2,
        PRODUCT_FEATURE_IMG3,
        PRODUCT_FEATURE_IMG4,
      ].map((img, index) => {
        return (
          <div key={index.toString()} className="relatedImage">
            <img src={img} alt="Product" title="Product" />
          </div>
        );
      })}
    </div>
  );
};

export default RelatedImages;
