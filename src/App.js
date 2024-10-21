import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Headerr from "./components/Headerr";
import ProductsList from "./components/ProductsList";
import ExclusiveSection from "./components/ExclusiveSection";
import TestimonialsList from "./components/TestimonialsList";

import Styles from './App.module.css';

import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Products fetched:', data.products);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Headerr />
          <div className={Styles.pageInnerContent}>
            <div className={Styles.sectionTitle}>
              <h3>Produtos Selecionados</h3>
              <div className={Styles.underline}></div>
            </div>
            <div className={Styles.mainContent}>
              <ProductsList products={products} />
            </div>
          </div>
        </main>
        <ExclusiveSection />
        <TestimonialsList />
      </div>
    </Router>
  );
}

export default App;
