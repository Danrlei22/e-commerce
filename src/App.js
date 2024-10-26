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

  const addToCartTotal = (value) =>
    setCartTotal((prevTotal) => prevTotal + value);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);

    if (!productToAdd) {
      console.log(`Produto com id ${id} não encontrado.`);
      return alert(`Produto com id ${id} não encontrado.`);
    }

    if (selectedProducts.includes(productToAdd)) {
      return alert(
        `O item ${productToAdd.name} ja foi adicionado ao carrinho.`
      );
    }

    setSelectedProducts((prev) => [...prev, productToAdd]);
    setCartTotal((prevTotal) => prevTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
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
          addToCartTotal={addToCartTotal}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={

                <>
                {console.log("App - addToCartTotal:", addToCartTotal)}
                <HomePage
                  addToCartTotal={addToCartTotal}
                  removeProductFromCart={removeProductFromCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowSideBarCart={setShowSideBarCart}
                  showSideBarCart={showSideBarCart}
                  cartTotal={cartTotal}
                /></>

              }
            />
            <Route
              path="/products"
              element={
                <ProductsPage
                  products={products}
                  addProductToCart={addProductToCart}
                  addToCartTotal={addToCartTotal}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
