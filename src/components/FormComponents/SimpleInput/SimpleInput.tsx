import React from "react";
import "./SimpleInput.css";

interface SimpleInputInterface {
  text?: string;
  placeholder: string;
  inputWidth: "small" | "large";
  validation?: boolean;
  setValidation?: React.Dispatch<React.SetStateAction<boolean>>;
  validator?: (email:string) => boolean
}
const SimpleInput: React.FC<SimpleInputInterface> = ({
  text,
  placeholder,
  inputWidth,
  validation,
  setValidation,
  validator
}) => {

  const validateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value

    if (validator && setValidation) {
      const isValid: boolean = validator(input)
      setValidation(isValid)
    }
  }

  return (
    <div className="simple-input-container">
      <div className="simple-input-header">
        <p>{text}</p>
        {validation === false && (
          <p style={{ color: "red", opacity: "50%", fontSize: "14px" }}>
            *{text} is incorrect, please check
          </p>
        )}
      </div>
      <input
        placeholder={placeholder}
        style={{ width: inputWidth === "small" ? "450px" : "920px" }}
        autoComplete="none"
        onChange={(e) => validateField(e)}
      />
    </div>
  );
};

export default SimpleInput;
