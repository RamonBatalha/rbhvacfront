import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from "./pages/CreateClient"
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import SingleClient from './pages/SingleClient';
import Edit from './pages/EditClient'

function App() {
  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/cadcliente' element={<Create />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/clientes/:clientId' element={<SingleClient />} />
        <Route path='/clientes/edit/:clientId' element={<Edit />} />
        <Route path='*' element={<Error />} />
 
      </Routes>
   </BrowserRouter>
  );
}

export default App;
