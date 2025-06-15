import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$999" },
    { id: 2, name: "Phone", price: "$499" },
    { id: 3, name: "Headphones", price: "$199" },
    { id: 4, name: "Smart Watch", price: "$299" },
  ]);

  const handleLogin = () => setUser({ name: "Admin" });
  const handleLogout = () => setUser(null);

  const addProduct = () => {
    const name = prompt("Enter product name:");
    const price = prompt("Enter product price:");
    if (name && price) {
      setProducts([...products, { id: Date.now(), name, price }]);
    }
  };

  const updateProduct = (id) => {
    const name = prompt("New product name:");
    const price = prompt("New product price:");
    if (name && price) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, name, price } : product
        )
      );
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/admin"
          element={
            user ? (
              <AdminPanel
                user={user}
                products={products}
                handleLogout={handleLogout}
                addProduct={addProduct}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
