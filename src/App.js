import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import SideBarCart from "./components/SideBarCart";

function App() {
  const [products, setProducts] = useState([]);
  const [showSideBarCart, setShowSideBarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCartTotal = (value) => setCartTotal(cartTotal + value);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];

    if (selectedProducts.includes(productToAdd)){
      return alert(`O item ${productToAdd.name} ja foi adicionado ao carrinho.`);
    } ;

    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id);
      setSelectedProducts(newSelectedProducts);
  };

  return (
    <Router>
      <div className="App">
        <NavBar
          selectedProduct={selectedProducts}
          setShowSideBarCart={setShowSideBarCart}
        />
        <SideBarCart
        removeProductFromCart={removeProductFromCart}
        cartTotal={cartTotal}
        selectedProducts={selectedProducts}
        setShowSideBarCart={setShowSideBarCart}
        showSideBarCart={showSideBarCart}
      />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  addToCartTotal={addToCartTotal}
                  removeProductFromCart={removeProductFromCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowSideBarCart={setShowSideBarCart}
                  showSideBarCart={showSideBarCart}
                  cartTotal={cartTotal}
                />
              }
            />
            <Route
              path="/products"
              element={<ProductsPage products={products} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
