import "./Category.css";
import ArrowRight from "../../images/shared/desktop/icon-arrow-right.svg";
import { NavLink, Routes, Route } from "react-router-dom";
import { data } from "../../data";
import ProductSection from "../../screens/ProductSection/ProductSection";

interface props {
  name: string;
  image: string;
}

const lowercaseName = (name: string): string => {
  return name.toLowerCase();
};

const Category: React.FC<props> = ({ name, image }) => {
  return (
    <div className="category">
      <img src={image} alt={name} className="category-image" />
      <div className="category-text">
        <h3 className="category-name">{name}</h3>
        <NavLink to={`/${lowercaseName(name)}`} className="category-link">
          <button className="category-button">
            <p >Shop</p>
            <img src={ArrowRight} alt="arrow-right" />
          </button>
        </NavLink>
      </div>
      <Routes>
        {data.map((el, index) => {
          return (
            <Route
              path={`/${el.name}`}
              key={index}
              element={<ProductSection data={el.products} title={el.name} />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Category;
