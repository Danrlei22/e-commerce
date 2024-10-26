import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Product.module.css";
import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Product({ id, image, name, price, rating, addProductToCart, addToCartTotal }) {  

  console.log("Product - addToCartTotal:", addToCartTotal);

  const handleAddCart = () => {
    addProductToCart(id);
    addToCartTotal(price);
  }

  return (
    <div className={Styles.product}>
      <img src={image} alt={name} />
      <p className={Styles.name}>{name}</p>
      <p className={Styles.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className={Styles.price}>
        <span>R$</span> {price}
      </p>
      <div className={Styles.buttons}>
        <Link to={`/products/${id}/checkout`} className={Styles.btnIcon}>
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button
          onClick={handleAddCart}
          className={Styles.addToCartBtn}
        >
          <span>Adicionar ao Carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}

export default Product;
