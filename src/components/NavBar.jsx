
import { Link } from "react-router-dom"

import { useState } from "react"

import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Styles from './NavBar.module.css'

function NavBar( { setShowSideBarCart, selectedProduct } ) {

    const [show, setShow] = useState(false);

    return (
        <div className={Styles.nav}>
            <div className={Styles.innerContent}>
                <h1 className={Styles.logo}>
                    GRE<span>STORE</span>
                </h1>
                <nav className={show ? Styles.show : ''}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Product</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/account">Conta</Link>
                        </li>
                    </ul>
                </nav>
                <div className={Styles.navsIconContainer}>
                    <div className={Styles.searchInputContainer}>
                        <input type="search" placeholder="Pesquisar" />
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <button className={Styles.shoppingCart} onClick={() => setShowSideBarCart(true)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className={Styles.productCount}>{selectedProduct.length}</div>
                    </button>
                    <button className={Styles.menuButton} onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;