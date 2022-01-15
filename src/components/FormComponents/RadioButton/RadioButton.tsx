import "./RadioButton.css";

interface Props {
    name: string
    for: string,
}

const RadioButton: React.FC<Props> = (props) => {
  return (
    <div className="radio-button-container">
      <input type="radio" id="huey" name="drone" value="huey" checked />
      <label htmlFor="huey">Huey</label>
    </div>
  );
};

export default RadioButton;
