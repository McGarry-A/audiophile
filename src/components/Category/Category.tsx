import "./Category.css"
import ArrowRight from "../../images/shared/desktop/icon-arrow-right.svg"

interface props {
  name: string;
  image: string;
}
const Category: React.FC<props> = ({ name, image }) => {
  return (
    <div className="category">
      <img src={image} alt={name} className="category-image" />
      <div className="category-text">
        <h3 className="category-name">{name}</h3>
        <button className="category-button">
                <p>Shop</p>
                <img src={ArrowRight} alt="arrow-right"/>
        </button>
      </div>
    </div>
  );
};

export default Category;
