import ProductsList from "../ProductsList";
import Styles from "./ProductsPage.module.css";

function ProductsPage({ products, addProductToCart }) {
  return (
    <div className={Styles.pageInnerContent}>
      <div className={Styles.sectionTitle}>
        <h3>Nossos Produtos</h3>
        <div className={Styles.underline}></div>
      </div>
      <div className={Styles.mainContent}>
        <ProductsList products={products} addProductToCart={addProductToCart} />
      </div>
    </div>
  );
}

export default ProductsPage;
