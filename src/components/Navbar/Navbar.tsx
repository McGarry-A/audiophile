import { ReactComponent as Logo } from "../../images/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../../images/shared/desktop/icon-cart.svg";
import "./Navbar.css"
const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Headphones</li>
          <li className="nav-list-item">Speakers</li>
          <li className="nav-list-item">Earphones</li>
        </ul>
      </nav>
      <div className="cart-container">
        <Cart className="cart"/>
      </div>
    </div>
  );
};

export default Navbar;
