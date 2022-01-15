import "./SimpleInput.css";

interface SimpleInputInterface {
  text?: string;
  placeholder: string;
  inputWidth: "small" | "large";
  type?: "radio" | "password" | "email" | "number";
}
const SimpleInput: React.FC<SimpleInputInterface> = ({
  text,
  placeholder,
  inputWidth,
  type,
}) => {
  return (
    <div className="simple-input-container">
      <p>{text}</p>
      <input
        placeholder={placeholder}
        style={{ width: inputWidth === "small" ? "450px" : "920px" }}
        autoComplete="none"
        type={type}
      />
    </div>
  );
};

export default SimpleInput;
