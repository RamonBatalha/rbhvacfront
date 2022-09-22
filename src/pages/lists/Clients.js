import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


function Clients() {

  const [clients, setClients] = useState([]);
  const [busca, setBusca] = useState([]);

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


  //filtro de barra de pesquisa. Aqui nós temos um filtro pelo input que verifica as correspondências do Array de Clients que recebemos do API. Utilizamos o toLowerCase para ajustar os termos de busca para LowerCase, para melhor a questão do Case Sensitive
  const clienteSearch = clients.filter((item) => item.nome.toLowerCase().includes(busca.toString().toLowerCase()));


  //ordenando Lista por ordem alfabética
  clients.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1
    } else {
      return true
    }
  });

  function clientDelete(id) {

    if (window.confirm('Você tem certeza que deseja deletar o cliente?')) {
      axios.delete(`http://localhost:8080/api/clients/v1/${id}`)

      setClients(clients.filter(item => item.id !== id))
    }
  }

  return (
    <section>
      <h1>Lista de Clientes</h1>
      <input type="text" value={busca} placeholder="Pesquisar..." className='search-bar' onChange={(e) => setBusca(e.target.value)} />
      <Link to='/cadcliente' className='btn-center'>
        <button className='btn-form'>Adicionar</button>
      </Link>

      <ul className='list-clients'>
        {clienteSearch.map((item, index) => {
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