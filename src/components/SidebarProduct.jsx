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
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  return (
    <div className={Styles.sidebarProduct}>
      <div className={Styles.leftSide}>
        <button
          className={Styles.removeProductBtn}
          onClick={() => {
            removeProductFromCart(id);
            addToCartTotal(-priceSum);
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
            onChange={(e) => {
              setQuantity(e.target.value);
              addToCartTotal(e.target.value * price - priceSum);
              setPriceSum(price * e.target.value);
            }}
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
