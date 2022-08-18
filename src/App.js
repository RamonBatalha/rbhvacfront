import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateCliente from "./pages/CreateClient"
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import SingleClient from './pages/SingleClient';
import EditCliente from './pages/EditClient';
import Colaboradores from './pages/Colaboradores';
import CreateColaboradores from './pages/CreateColaborador';
import SingleColaborador from './pages/SingleColaborador';
import EditColaborador from './pages/EditColaborador';

function App() {
  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/cadcliente' element={<CreateCliente />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/clientes/:clientId' element={<SingleClient />} />
        <Route path='/clientes/edit/:clientId' element={<EditCliente />} />
        <Route path='/colaboradores' element={<Colaboradores />} />
        <Route path='/cadcolaboradores' element={<CreateColaboradores />} />
        <Route path='/colaboradores/:colaboradorId' element={<SingleColaborador />} />
        <Route path='/colaboradores/edit/:colaboradorId' element={<EditColaborador />} />
        <Route path='*' element={<Error />} />
 
      </Routes>
   </BrowserRouter>
  );
}

export default App;
