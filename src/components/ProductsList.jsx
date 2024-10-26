import Styles from "./ProductsList.module.css";

import Product from "./Product";

import React from "react";

function ProductsList({ products, addProductToCart, addToCartTotal }) {


  console.log("ProductsList - addToCartTotal:", addToCartTotal);

  return (
    <div className={Styles.productList}>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductToCart={addProductToCart}
          addToCartTotal={addToCartTotal}
        />
      ))}
    </div>
  );
}

export default ProductsList;
