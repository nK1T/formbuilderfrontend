import React from "react";
import FormPreview from "./FormPreview";
import "./FormEditor.css";

const FormEditor = ({ form, setForm }) => {
  const addInput = (type) => {
    // ASk for form title before proceeding
    if (form.inputs.length === 0 && form.title === "") {
      alert("Please fill in the form title before adding inputs.");
      return;
    }
    // Check if the title of the last input field is filled before adding new field
    if (
      form.inputs.length > 0 &&
      form.inputs[form.inputs.length - 1].title === ""
    ) {
      alert(
        "Please fill in the title of the last input field before adding a new one."
      );
      return;
    }

    if (form.inputs.length < 20) {
      setForm({
        ...form,
        inputs: [...form.inputs, { type, title: "", placeholder: "" }],
      });
    }
  };

  const updateInput = (index, field, value) => {
    const newInputs = [...form.inputs];
    // If the input type is 'date' then no placeholder is required
    if (field === "placeholder" && newInputs[index].type === "date") {
      return;
    }

    newInputs[index][field] = value;
    setForm({ ...form, inputs: newInputs });
  };

  const deleteInput = (index) => {
    const newInputs = form.inputs.filter((_, i) => i !== index);
    setForm({ ...form, inputs: newInputs });
  };

  return (
    <div className="form-editor-container">
      <div className="editor-section">
        <h2 className="editor-title">Form Editor</h2>
        <input
          className="form-title-input"
          type="text"
          placeholder="Form Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <div className="inputs-list">
          {form.inputs.map((input, index) => (
            <div key={index}>
              <div>
                <label className="input-type-label">
                  {input.type.charAt(0).toUpperCase() + input.type.slice(1)}
                </label>
              </div>
              <div className="input-fields">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Input Title"
                  value={input.title}
                  onChange={(e) => updateInput(index, "title", e.target.value)}
                />
                {input.type !== "date" && (
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Placeholder"
                    value={input.placeholder}
                    onChange={(e) =>
                      updateInput(index, "placeholder", e.target.value)
                    }
                  />
                )}
                <button
                  className="delete-button"
                  onClick={() => deleteInput(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="input-type-buttons">
          <button
            className="input-type-button"
            onClick={() => addInput("text")}
          >
            Text
          </button>
          <button
            className="input-type-button"
            onClick={() => addInput("number")}
          >
            Number
          </button>
          <button
            className="input-type-button"
            onClick={() => addInput("email")}
          >
            Email
          </button>
          <button
            className="input-type-button"
            onClick={() => addInput("password")}
          >
            Password
          </button>
          <button
            className="input-type-button"
            onClick={() => addInput("date")}
          >
            Date
          </button>
        </div>
      </div>
      <div className="preview-section">
        <FormPreview form={form} />
      </div>
    </div>
  );
};

export default FormEditor;
