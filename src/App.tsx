import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { ReactComponent as Logo } from "./images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "./images/shared/desktop/icon-cart.svg";
import Home from "./screens/Home/Home";
import "./components/Navbar/Navbar.css";
// import ProductSection from "./screens/ProductSection/ProductSection";

const App = () => (
  <>
    <div className="navbar">
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink className="nav-list-item" to="/">Home</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink className="nav-list-item" to="/headphones">Headphones</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink className="nav-list-item" to="/speakers">Speakers</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink className="nav-list-item" to="/earphones">Earphones</NavLink>
          </li>
        </ul>
      </nav>
      <div className="cart-container">
        <Cart className="cart" />
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/headphones" element={<ProductSection product={product}/>} />
      <Route path="/speakers" element={<ProductSection product={product}/>} />
      <Route path="/earphones" element={<ProductSection product={product}/>} /> */}
    </Routes>
  </>
);

export default App;