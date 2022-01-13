import "./Categories.css"
import Category from "../Category/Category";
import CategorySpeaker from "../../images/shared/desktop/image-category-thumbnail-speakers.png"
import CategoryHeadphones from "../../images/shared/desktop/image-category-thumbnail-headphones.png"
import CategoryEarphones from "../../images/shared/desktop/image-category-thumbnail-earphones.png"

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      {categoriesData.map((el, index) => {
        return <Category name={el.name} image={el.image} key={index}/>;
      })}
    </div>
  );
};

export default Categories;

const categoriesData = [
  {
    name: "Headphones",
    image: CategoryHeadphones,
  },
  {
    name: "Speakers",
    image: CategorySpeaker,
  },
  {
    name: "Earphones",
    image: CategoryEarphones,
  },
];


