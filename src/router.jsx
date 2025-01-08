import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormList from './components/FormList';
import CreateForm from './pages/CreateForm';
import EditForm from './pages/EditForm';
import ViewForm from './pages/ViewForm';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormList />} />
      <Route path="/form/create" element={<CreateForm />} />
      <Route path="/form/:id/edit" element={<EditForm />} />
      <Route path="/form/:id" element={<ViewForm />} />
    </Routes>
  </Router>
);

export default AppRouter;
