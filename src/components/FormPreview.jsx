import React from 'react';
import './FormPreview.css';

const FormPreview = ({ form }) => {
  return (
    <div className="form-preview-container">
      <h2 className="form-preview-title">
        {form.title || 'Form Title will appear here'}
      </h2>
      {form.inputs.length === 0 ? (
        <p className="no-inputs-message">No inputs added yet.</p>
      ) : (
        <form className="form-preview-main">
          {form.inputs.map((input, index) => (
            <div className="form-input-item" key={index}>
              <label className="form-input-label">
                {input.title || 'Input Title will appear here'}
              </label>
              <input
                className="form-input-field"
                type={input.type}
                placeholder={input.placeholder}
                readOnly
              />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default FormPreview;
