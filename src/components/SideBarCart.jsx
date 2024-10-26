import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import Styles from "./SideBarCart.module.css";

import SidebarProduct from "./SidebarProduct";

function SideBarCart({
  showSideBarCart,
  setShowSideBarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  addToCartTotal,
}) {

  console.log("SidebarCart - addToCartTotal:", addToCartTotal);

  return (
    <aside
      className={`${Styles.sidebarCart} ${showSideBarCart ? Styles.show : ""}`}
    >
      <div className={Styles.top}>
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowSideBarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className={Styles.sidecarProductsList}>
        {selectedProducts.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            removeProductFromCart={removeProductFromCart}
            addToCartTotal={addToCartTotal}
          />
        ))}
      </div>

      {cartTotal === 0 ? (
        <i>Seu carrinho esta vazio.</i>
      ) : (
        <>
          <div className={Styles.totalContainer}>
            <b>Total: </b> R$ {cartTotal}
          </div>

          <Link to="/cart/checkout" className={Styles.btnIcon}>
            <span>Pagar Agora</span>
            <FontAwesomeIcon icon={faMoneyBill} />
          </Link>
        </>
      )}
    </aside>
  );
}

export default SideBarCart;
