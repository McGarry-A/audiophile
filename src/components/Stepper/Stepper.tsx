import "./Stepper.css"

interface Props {
    count: number,
    changeQuantity: Function,
    calculateTotalPriceOfItems?: Function
}
const Stepper: React.FC<Props> = ({count, changeQuantity, calculateTotalPriceOfItems}) => {
  
  return (
    <div className="stepper">
      <button className="stepper-button" onChange={calculateTotalPriceOfItems ? calculateTotalPriceOfItems() : null} onClick={() => changeQuantity("minus")}>-</button>
      <p className="stepper-count">{count}</p>
      <button className="stepper-button" onChange={calculateTotalPriceOfItems ? calculateTotalPriceOfItems() : null} onClick={() => changeQuantity("add")}>+</button>
    </div>
  );
};

export default Stepper;
