import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchForms, deleteForm } from "../api/api";
import "./FormList.css";

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms().then((res) => setForms(res.data));
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this form?"
    );

    if (isConfirmed) {
      deleteForm(id)
        .then(() => {
          setForms(forms.filter((form) => form._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting form:", error);
        });
    }
  };

  return (
    <div className="form-list-container">
      <h1 className="form-list-title">Form List</h1>
      <Link to="/form/create" className="create-form-link">
        Create New Form
      </Link>

      {forms.length === 0 ? (
        <p className="no-forms-message">Your created forms will appear here</p>
      ) : (
        <ul className="form-list">
          {forms.map((form) => (
            <li key={form._id} className="form-list-item">
              <div>
                <Link to={`/form/${form._id}`} className="form-title-link">
                  {form.title}
                </Link>
              </div>
              <div className="form-action-buttons">
                <Link to={`/form/${form._id}/edit`}>
                  <button className="form-action-button edit">Edit</button>
                </Link>
                <button
                  className="form-action-button delete"
                  onClick={() => handleDelete(form._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormList;
