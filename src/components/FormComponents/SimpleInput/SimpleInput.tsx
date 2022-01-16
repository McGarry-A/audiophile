import "./SimpleInput.css";

interface SimpleInputInterface {
  text?: string;
  placeholder: string;
  inputWidth: "small" | "large";
}
const SimpleInput: React.FC<SimpleInputInterface> = ({
  text,
  placeholder,
  inputWidth,
}) => {
  
  return (
    <div className="simple-input-container">
      <p>{text}</p>
      <input
        placeholder={placeholder}
        style={{ width: inputWidth === "small" ? "450px" : "920px" }}
        autoComplete="none"
      />
    </div>
  );
};

export default SimpleInput;
