import "./Stepper.css"

interface Props {
    count: number,
    setCount: Function
}
const Stepper: React.FC<Props> = ({count,setCount}) => {
  
  return (
    <div className="stepper">
      <button className="stepper-button" onClick={() => count >= 1 && setCount((count -= 1))}>-</button>
      <p className="stepper-count">{count}</p>
      <button className="stepper-button" onClick={() => setCount((count += 1))}>+</button>
    </div>
  );
};

export default Stepper;
