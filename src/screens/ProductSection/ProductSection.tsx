import "./ProductSection.css";
import { ProductsInterface } from "../../data";
import ProductSectionBanner from "../../components/ProductSectionBanner/ProductSectionBanner";
import ProductSpotlight from "../../components/ProductSpotlight/ProductSpotlight";
import Article from "../../components/Article/Article";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

interface props {
  data: ProductsInterface[];
  title: string;
}
const ProductSection: React.FC<props> = ({ data, title }) => {
  return (
    <>
      <ProductSectionBanner title={title} />
      {data.map((el, index) => {
        return <ProductSpotlight key={index} product={el} index={index} />;
      })}
      <Categories />
      <Article />
      <Footer />
    </>
  );
};

export default ProductSection;
