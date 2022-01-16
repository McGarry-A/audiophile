import "./ProductSpotlight.css";
import { Link } from "react-router-dom";
import { ProductsInterface } from "../../data";
import { useContext, useState } from "react";
import Stepper from "../Stepper/Stepper";
import { BasketContext, BasketInterface } from "../..";

interface props {
  product: ProductsInterface;
  buy: boolean;
  index?: number;
}

const ProductSpotlight: React.FC<props> = ({ product, buy, index }) => {
  
  let [count, setCount] = useState<number>(0);
  const basketState = useContext(BasketContext)
  let {basket, setBasket} = basketState

  const addToBasket = () => {

    
    const {id, name, price, heroImage} = product
    const image = heroImage
    let didFindItem: boolean = false
    // Check if that product ID is in the Array

    const itemToAdd: BasketInterface = {
      name: name, 
      image: image,
      price: price.toString(),
      quantity: count,
      id: id
    }

   for (let i = 0; i < basket.length; i++) {
     if (basket[i].id === id) {
       const newBasket = [...basket]
       newBasket[i].quantity = newBasket[i].quantity + 1
       setBasket(newBasket)
       didFindItem = true
     } 
   }

   if (!didFindItem) {
    setBasket([...basket, itemToAdd])
   }
    console.log(basket)
  }
  return (
    <>
      <div
        className="product-spotlight"
        style={{ flexDirection: index! % 2 === 0 ? "row" : "row-reverse" }}
      >
        <div className="product-spotlight-col-1">
          <div className="product-spotlight-text-container">
            {product.new && <h4>New Product</h4>}
            <h2>{product.name}</h2>
            <p className="product-spotlight-description">{product.description}</p>

            {buy ? (
              <div className="product-spotlight-actions-container">
                <p className="product-spotlight-price">£{product.price}</p>
                <div className="product-spotlight-actions">
                  <Stepper count={count} setCount={setCount}/>
                  <button onClick={addToBasket} className="product-spotlight-atc">Add to Cart</button>
                </div>
              </div>
            ) : (
              <Link to={`/item/${product.id}`}>
                <button className="see-product-button">See Product</button>
              </Link>
            )}
          </div>
        </div>
        <div className="product-spotlight-col-2">
          <img src={product.heroImage} alt={product.name} />
        </div>
      </div>
    </>
  );
};

export default ProductSpotlight;
