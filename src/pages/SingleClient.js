import React from 'react'
import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios';


function SingleClient() {
const {clientId} = useParams();
const [clients, setClients] = useState([]);
const {nome, endereço, cpf, telefone, email, observacao} = clients;



useEffect(() => {{
    axios.get(`http://localhost:8080/api/clients/v1/${clientId}`)
    .then(function (response) {
        setClients(response.data);
    })
    .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
    });}
    
}, [])

console.log(clients)

  return (
    <section >
        <h1>Dados Cadastrais</h1>
        <div className='single-client'>
            <span><strong>Nome:</strong> </span>
            <span>{nome}</span>
            <span><strong>CPF:</strong> </span>
            <span>{cpf}</span>
            <span><strong>Endereço:</strong> </span>
            <span>{endereço}</span>
            <span><strong>Telefone:</strong> </span>
            <span>{telefone}</span>
            <span><strong>Email:</strong> </span>
            <span>{email}</span>
            <span><strong>Observação:</strong> </span>
            <span>{observacao}</span>
        </div >
        <Link to={`/clientes/edit/${clientId}`}>
            <button className='btn-form'>Editar</button>
        </Link>
    </section>
  )
}

export default SingleClient