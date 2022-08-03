import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbPencil } from 'react-icons/tb'

function Clients() {

const [clients, setClients] = useState([]);

useEffect(() => {

axios.get('http://localhost:8080/clients')
  .then(function (response) {
    console.log(response.data);
    setClients(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });
}, [])



function clientDelete(id) {
    
    if(window.confirm('Você tem certeza que deseja deletar o cliente?')){
        axios.delete(`http://localhost:8080/clients/${id}`)

        setClients(clients.filter(item => item.id != id)) 
    }
    
   
}


  return (
    <>
    <h1>Lista de Clientes</h1>
    <ul>
    {clients.map((item, index) => {
                return (
                  <li key={index}>
                    {item.nome}
                   <button><TbPencil /></button> 
                   <button onClick={() => clientDelete(item.id)}><AiFillCloseCircle /></button>
                  </li>
                )
              })}
    </ul>
    
    </>
  )
}

export default Clients