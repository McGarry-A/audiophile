import "./ProductSection.css";

interface ProductsInterface {
  sectionName: string;
  products: [
    {
      new: boolean;
      title: string;
      description: string;
      image: string;
    }
  ];
}

const ProductSection: React.FC<ProductsInterface[]> = () => {
  return <div></div>;
};

export default ProductSection;
