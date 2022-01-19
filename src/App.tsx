import "./App.css";
import "./components/Navbar/Navbar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { ReactComponent as Logo } from "./images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "./images/shared/desktop/icon-cart.svg";
import { data } from "./data";
import Home from "./screens/Home/Home";
import ProductSection from "./screens/ProductSection/ProductSection";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import { useState } from "react";
import Modal from "react-modal";
import CheckoutModal from "./components/CheckoutModal/CheckoutModal";
import CheckoutPage from "./screens/CheckoutPage/CheckoutPage";
import { BasketContext, BasketInterface } from ".";

const App = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [basket, setBasket] = useState<BasketInterface[]>([]);

  const basketState = { basket, setBasket };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const afterOpenModal = () => {
    return;
  };

  Modal.defaultStyles.overlay!.backgroundColor = "rgba(0,0,0,0.5)";

  const customStyles = {
    content: {
      maxWidth: "1440px",
      margin: "0 auto",
      top: "8%",
      left: "950px",
      width: "400px",
      height: "min-content",
    },
  };

  return (
    <>
      <BasketContext.Provider value={basketState}>
        <div className="navbar">
          <div className="logo-container">
            <Logo />
          </div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list-item">
                <NavLink className="nav-list-item" to="/audiophile">
                  Home
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-list-item" to="/headphones">
                  Headphones
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-list-item" to="/speakers">
                  Speakers
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-list-item" to="/earphones">
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="cart-container">
            <Cart className="cart" onClick={openModal} fill="white"/>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="example modal"
            ariaHideApp={false}
          >
            <CheckoutModal closeModal={closeModal} editable={true} />
          </Modal>
        </div>
        <Routes>
          <Route path="/audiophile" element={<Home />} />
          {data.map((el, index) => {
            return (
              <Route
                path={`/${el.name}`}
                key={index}
                element={<ProductSection data={el.products} title={el.name} />}
              />
            );
          })}
          <Route path={`/item/:id`} element={<ProductDetails />} />
          <Route path={`/checkout`} element={<CheckoutPage />} />
        </Routes>
      </BasketContext.Provider>
    </>
  );
};

export default App;
