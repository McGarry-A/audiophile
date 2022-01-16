import "./Stepper.css"

interface Props {
    count: number,
    changeQuantity: Function
}
const Stepper: React.FC<Props> = ({count, changeQuantity}) => {
  
  return (
    <div className="stepper">
      <button className="stepper-button" onClick={() => changeQuantity("minus")}>-</button>
      <p className="stepper-count">{count}</p>
      <button className="stepper-button" onClick={() => changeQuantity("add")}>+</button>
    </div>
  );
};

export default Stepper;
