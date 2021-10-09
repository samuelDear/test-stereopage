import { useState } from 'react';
import {
  Header,
  ProductDetail,
  Footer,
  InfoSection,
  RelatedImages,
} from 'components';

import '../styles/container/Home.css';

const Home = () => {
  const [state, setState] = useState({ productInCar: false });
  const { productInCar } = state;

  const changeProductToCard = (value) => {
    setState((prevState) => ({
      ...prevState,
      productInCar: value,
    }));
  };

  return (
    <>
      <Header productInCart={productInCar} />
      <main className="homebox">
        <ProductDetail
          changeProductToCard={changeProductToCard}
          productInCar={productInCar}
        />
        <RelatedImages />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
