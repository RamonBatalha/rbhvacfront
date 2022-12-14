import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


function Colaboradores() {

  const [colaboradores, setColaboradores] = useState([]);
  const [busca, setBusca] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8080/api/colaboradores/v1')
      .then(function (response) {
        console.log(response.data);
        setColaboradores(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  }, [])

  //filtro para search bar
  const colaboradoresSearch = colaboradores.filter((item) => item.nome.toLowerCase().includes(busca.toString().toLowerCase()));

  //ordenando Lista por ordem alfabética
  colaboradores.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1
    } else {
      return true
    }
  });

  function colaboradorDelete(id) {

    if (window.confirm('Você tem certeza que deseja deletar o colaborador?')) {
      axios.delete(`http://localhost:8080/api/colaboradores/v1/${id}`)

      setColaboradores(colaboradores.filter(item => item.id !== id))
    }
  }

  return (
    <section>
      <h1>Lista de Colaboradores</h1>
      <input type="text" value={busca} placeholder="Pesquisar..." className='search-bar' onChange={(e) => setBusca(e.target.value)} />
      <Link to='/cadcolaboradores' className='btn-center'>
        <button className='btn-form'>Adicionar</button>
      </Link>

      <ul className='list-clients'>
        {colaboradoresSearch.map((item, index) => {
          return (
            <li key={index}>

              <Link to={`/colaboradores/${item.id}`}>
                {item.nome}
              </Link>

              <div>
                <button onClick={() => colaboradorDelete(item.id)}><AiFillCloseCircle /></button>
              </div>

            </li>

          )
        })}
      </ul>

    </section>
  )
}

export default Colaboradores