import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


function Clients() {

const [clients, setClients] = useState([]);

useEffect(() => {

axios.get('http://localhost:8080/api/clients/v1')
  .then(function (response) {
    console.log(response.data);
    setClients(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  });
}, [])


//ordenando Lista por ordem alfabética
clients.sort((a, b) => {
  if(a.nome < b.nome) {
      return -1
  } else {
    return true
  }
});

function clientDelete(id) {
    
    if(window.confirm('Você tem certeza que deseja deletar o cliente?')){
        axios.delete(`http://localhost:8080/api/clients/v1/${id}`)

        setClients(clients.filter(item => item.id !== id)) 
    }
}

  return (
    <section>
      <h1>Lista de Clientes</h1>
      <Link to='/cadcliente'>
        <button className='btn-form'>Adicionar Cliente</button>
      </Link>
      
        <ul className='list-clients'>
          {clients.map((item, index) => {
                return (
                  <li key={index}>
                    
                    <Link to={`/clientes/${item.id}`}>
                        {item.nome}
                    </Link>
                    
                   
                     <div>
                       <button onClick={() => clientDelete(item.id)}><AiFillCloseCircle /></button>
                     </div>
                     
                  </li>
                  
                )
              })}
        </ul>
    
    </section>
  )
}

export default Clients