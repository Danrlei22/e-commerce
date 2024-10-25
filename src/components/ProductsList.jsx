import Styles from "./ProductsList.module.css";

import Product from "./Product";

import React from "react";

function ProductsList({ products, addProductToCart }) {
  return (
    <div className={Styles.productList}>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  );
}

export default ProductsList;
