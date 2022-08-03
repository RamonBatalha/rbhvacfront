import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login2 from "./pages/Login2"
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Clients from './pages/Clients';

function App() {
  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<h1>DashBoard</h1>} />
        <Route path='/cadcliente' element={<Login2 />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='*' element={<Error />} />
 
      </Routes>
   </BrowserRouter>
  );
}

export default App;
