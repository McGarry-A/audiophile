import React, { ReactElement } from "react";
import RadioButton from "../FormComponents/RadioButton/RadioButton";
import SimpleInput from "../FormComponents/SimpleInput/SimpleInput";
import "./Form.css";
import { useState } from "react";

const Form: React.FC = (): ReactElement => {
  const [emailValition, setEmailValidation] = useState<boolean>(true);
  const [nameValition, setNameValidation] = useState<boolean>(true);
  const [phoneValition, setPhoneValidation] = useState<boolean>(true);

  const validMail = (email: string): boolean => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    );
  };

  const validName = (name: string):boolean => {
    return /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name)
  }

  const validPhone = (number: string): boolean => {
    return /^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/.test(number)
  }

  return (
    <div className="form">
      <div className="form-section">
        <h4 className="form-section-header">Billing Details</h4>
        <div className="form-section-body">
          <SimpleInput
            text="Name"
            placeholder="Ahmed McGarry"
            inputWidth="small"
            validation={nameValition}
            setValidation={setNameValidation}
            validator={validName}
          />
          <SimpleInput
            text="Email"
            placeholder="atomcgarry@gmail.com"
            inputWidth="small"
            validation={emailValition}
            setValidation={setEmailValidation}
            validator={validMail}
          />
          <SimpleInput
            text="Phone Number"
            placeholder="07907733824"
            inputWidth="small"
            validation={phoneValition}
            setValidation={setPhoneValidation}
            validator={validPhone}
          />
        </div>
      </div>
      <div className="form-section">
        <h4 className="form-section-header">Shipping Info</h4>
        <div className="form-section-body">
          <SimpleInput
            text="Address"
            placeholder="103 Bawley Court"
            inputWidth="large"
          />
          <SimpleInput
            text="Postcode"
            placeholder="E16 2FU"
            inputWidth="small"
          />
          <SimpleInput text="City" placeholder="London" inputWidth="small" />
          <SimpleInput
            text="Country"
            placeholder="United Kingdom"
            inputWidth="small"
          />
        </div>
      </div>
      <div className="form-section">
        <h4 className="form-section-header">Shipping Info</h4>
        <div className="form-section-body">
          <div className="form-payment-container">
            <div className="form-payment-col-1">
              <p>Payment Method</p>
            </div>
            <div className="form-payment-col-2">
              <RadioButton name="payment" for="e-Money" />
              <RadioButton name="payment" for="Cash on Delivery" />
            </div>
          </div>
          <SimpleInput
            text="e-Money number"
            placeholder="193123812"
            inputWidth="small"
          />
          <SimpleInput
            text="e-Money PIN"
            placeholder="0161"
            inputWidth="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
