import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchForms = () => API.get('/forms');
export const fetchForm = (id) => API.get(`/forms/${id}`);
export const createForm = (form) => API.post('/forms', form);
export const updateForm = (id, form) => API.put(`/forms/${id}`, form);
export const deleteForm = (id) => API.delete(`/forms/${id}`);
