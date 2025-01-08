import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchForm, updateForm } from '../api/api';
import FormEditor from '../components/FormEditor';

const EditForm = () => {
  const [form, setForm] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchForm(id).then((res) => setForm(res.data));
  }, [id]);

  const handleSave = () => {
    updateForm(id, form).then(() => navigate('/'));
  };

  return (
    <div className="container">
      <h1 className="container-title">Edit Form</h1>
      {form && <FormEditor form={form} setForm={setForm} />}
      <div className="save-btn">
        <button onClick={handleSave}>Save changes</button>
      </div>
    </div>
  );
};

export default EditForm;
