import Styles from "./SidebarProduct.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function SidebarProduct({
  id,
  image,
  name,
  price,
  rating,
  removeProductFromCart,
  addToCartTotal,
}) {

  console.log("SidebarProduct - addToCartTotal:", addToCartTotal);

  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);

    const newPriceSum = newQuantity * price;

    if (typeof addToCartTotal === "function") {
      addToCartTotal(newPriceSum - priceSum);
    } else {
      console.error("addToCartTotal não é uma função:", addToCartTotal);
    }

    setPriceSum(newPriceSum);
  };

  return (
    <div className={Styles.sidebarProduct}>
      <div className={Styles.leftSide}>
        <button
          className={Styles.removeProductBtn}
          onClick={() => {
            removeProductFromCart(id);
            if (typeof addToCartTotal === "function") {
              addToCartTotal(-priceSum);
            }
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className={Styles.details}>
          <h4>{name}</h4>
          <p>R$ {price}</p>
          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={handleQuantityChange}
          />

          {priceSum > price && (
            <p className={Styles.priceSum}>
              <b>Soma: </b> R$ {priceSum}
            </p>
          )}
        </div>
      </div>

      <div className={Styles.rightSide}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default SidebarProduct;
