import React from 'react';
import './InputField.css';

const InputField = ({ input }) => (
  <div className="input-field-container">
    <label>{input.title}</label>
    <input
      type={input.type}
      placeholder={input.placeholder}
      readOnly
    />
  </div>
);

export default InputField;
