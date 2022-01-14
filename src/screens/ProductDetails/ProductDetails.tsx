import "./ProductDetails.css";
import Features from "../../components/Features/Features";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Categories from "../../components/Categories/Categories";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import ProductSpotlight from "../../components/ProductSpotlight/ProductSpotlight";
import { useParams } from "react-router-dom";
import { data, ProductsInterface, SectionInterface } from "../../data";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ProductsInterface | void>();

  useEffect(() => {
    findItem(findProducts());
  }, []);

  const findSection = (id: string, data: SectionInterface[]): number => {
    let section: number = 0;

    switch (true) {
      case id[0] === "h":
        section = 0;
        break;
      case id[0] === "s":
        section = 1;
        break;
      case id[0] === "e":
        section = 2;
        break;
      default:
        break;
    }

    return section;
  };

  const findProducts = (): ProductsInterface[] => {
    const section = findSection(id!, data);
    const productList = data[section]!.products;
    return productList;
  };

  const findItem = (products: ProductsInterface[]) => {
    products.forEach((el) => {
      if (el.id === id) {
        console.log(el);
        setItem(el);
      }
    });
  };

  return (
    <>
      {item && <ProductSpotlight product={item} buy={true} />}
      {item && <Features product={item}/>}
      <ImageGallery />
      {/* YOU MAY ALSO LIKE */}
      <Categories />
      <Article />
      <Footer />
    </>
  );
};

export default ProductDetails;
