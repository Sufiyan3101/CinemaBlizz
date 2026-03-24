import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import BollywoodAddMovie from './BollywoodAddMovie';
import HollywoodAddMovie from './HollywoodAddMovie';
import BollywoodDeleteMovie from './BollywoodDeleteMovie';
import HollywoodDeleteMovie from './HollywoodDeleteMovie';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="add-movie" element={<AddMovie />} />
      <Route path='delete-movie' element={<DeleteMovie />} />
      <Route path='add-movie/add-bollywood' element={<BollywoodAddMovie/> }/>
      <Route path='add-movie/add-hollywood' element={<HollywoodAddMovie />}/>
      <Route path='delete-movie/delete-bollywood' element={<BollywoodDeleteMovie />}/>
      <Route path='delete-movie/delete-hollywood' element={<HollywoodDeleteMovie />}/>
    </Routes>
  );
};

export default AdminRoutes;
