import React from "react";
import InputField from "./InputField";
import "./FormView.css";

const FormView = ({ form }) => (
  <div className="form-view-container">
    <h2 className="form-view-title">{form.title}</h2>
    <div className="form-grid">
      {form.inputs.map((input, index) => (
        <InputField key={index} input={input} />
      ))}
    </div>
    <div className="form-submit-container">
      <button className="form-submit-button">Submit</button>
    </div>
  </div>
);

export default FormView;
