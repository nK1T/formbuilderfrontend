import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createForm } from "../api/api";
import FormEditor from "../components/FormEditor";
import "./CreateForm.css";

const CreateForm = () => {
  const [form, setForm] = useState({ title: "", inputs: [] });
  const navigate = useNavigate();

  const handleSave = () => {
    createForm(form).then(() => navigate("/"));
  };

  return (
    <div className="container">
      <h1 className="container-title">Create New Form</h1>
      <FormEditor form={form} setForm={setForm} />
      <div className="save-btn">
        <button onClick={handleSave}>Create</button>
      </div>
    </div>
  );
};

export default CreateForm;
