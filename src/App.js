import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login2 from "./pages/Login2"
import Navbar from './components/Navbar';


function App() {
  return (
   <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<h1>DashBoard</h1>} />
        <Route path='/cadcliente' element={<Login2 />} />
        {/* <Route path='/navbar' element={<Navbar />} /> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
