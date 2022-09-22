import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Os = () => {

  const [ordemServicos, setOrdemSericos] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/api/os/v1')
      .then(function (response) {
        setOrdemSericos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
    <section id="section-os">
      <h1>Ordem de Serviço</h1>

      <Link to='/cados' className='btn-center'>
        <button className='btn-form'>Adicionar</button>
      </Link>


      <ul className='ul-os'>
        {ordemServicos.map((item, index) => {
          return (
            <li key={index}>

              <Link to={`/ordemservico/${item.id}`} className='ink'>
                Serviço: {item.servico}
              </Link>
              <span>Data: {item.dataabertura.substring(0, 10).split('-').reverse().join('/')}</span>
              <span>Cliente: {item.clients.nome}</span>
              <span>Status: {item.status == 1 ? <span>Em andamento</span> : <span>Concluída</span>} </span>

            </li>

          )
        })}
      </ul>
    </section>

  )
}

export default Os