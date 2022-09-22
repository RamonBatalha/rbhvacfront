import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateCliente from "./pages/create/CreateClient"
import CreateColaboradores from './pages/create/CreateColaborador';
import CreateOs from './pages/create/CreateOs';
import EditColaborador from './pages/edit/EditColaborador';
import EditCliente from './pages/edit/EditClient';
import EditOs from './pages/edit/EditOs';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Clients from './pages/lists/Clients';
import Dashboard from './pages/Dashboard';
import SingleClient from './pages/single/SingleClient';
import Colaboradores from './pages/lists/Colaboradores';
import SingleColaborador from './pages/single/SingleColaborador';
import Os from './pages/lists/Os';
import { SingleOs } from './pages/single/SingleOs';

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
        <Route path='/ordemservico' element={<Os />} />
        <Route path='/ordemservico/:osId' element={<SingleOs />} />
        <Route path='/ordemservico/edit/:osId' element={<EditOs />} />
        <Route path='/cados' element={<CreateOs />} />
        <Route path='*' element={<Error />} />
 
      </Routes>
   </BrowserRouter>
  );
}

export default App;
