import Styles from "./HomePage.module.css";

import ProductsList from "../../components/ProductsList";
import ExclusiveSection from "../../components/ExclusiveSection";
import TestimonialsList from "../../components/TestimonialsList";
import Headerr from "../../components/Headerr";

function HomePage({ products, addProductToCart, addToCartTotal }) {

  console.log("HomePage - addToCartTotal:", addToCartTotal);

  return (
    <>
      <Headerr />

      <div className={Styles.pageInnerContent}>
        <div className={Styles.sectionTitle}>
          <h3>Produtos Selecionados</h3>
          <div className={Styles.underline}></div>
        </div>
        <div className={Styles.mainContent}>
          <ProductsList
            addProductToCart={addProductToCart}
            products={products}
            addToCartTotal={addToCartTotal}
          />
        </div>
      </div>

      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}

export default HomePage;
