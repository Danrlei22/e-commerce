import ProductsList from "../ProductsList";
import Styles from "./ProductsPage.module.css";

function ProductsPage({ products, addProductToCart, addToCartTotal }) {
  return (
    <div className={Styles.pageInnerContent}>
      <div className={Styles.sectionTitle}>
        <h3>Nossos Produtos</h3>
        <div className={Styles.underline}></div>
      </div>
      <div className={Styles.mainContent}>
        <ProductsList
          products={products}
          addProductToCart={addProductToCart}
          addToCartTotal={addToCartTotal}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
