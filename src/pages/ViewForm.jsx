import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchForm } from '../api/api';
import FormView from '../components/FormView';

const ViewForm = () => {
  const [form, setForm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchForm(id).then((res) => setForm(res.data));
  }, [id]);

  return (
    <div>
      {form && <FormView form={form} />}
    </div>
  );
};

export default ViewForm;
