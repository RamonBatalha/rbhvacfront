import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';


function SingleColaborador() {
    const { colaboradorId } = useParams();
    const [colaboradores, setColaboradores] = useState([]);
    const { nome, endereço, cpf, telefone, email, remuneraçao, cargo } = colaboradores;



    useEffect(() => {
        {
            axios.get(`http://localhost:8080/api/colaboradores/v1/${colaboradorId}`)
                .then(function (response) {
                    setColaboradores(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

    }, [])

    console.log(colaboradores)

    return (
        <section >
            <h1>Dados Cadastrais</h1>
            <div className='single-client'>
                <span><strong>Nome:</strong> </span>
                <span>{nome}</span>
                <span><strong>Cargo:</strong> </span>
                <span>{cargo}</span>
                <span><strong>Remuneração:</strong> </span>
                <span>R$: {remuneraçao}</span>
                <span><strong>CPF:</strong> </span>
                <span>{cpf}</span>
                <span><strong>Endereço:</strong> </span>
                <span>{endereço}</span>
                <span><strong>Telefone:</strong> </span>
                <span>{telefone}</span>
                <span><strong>Email:</strong> </span>
                <span>{email}</span>
            </div >

            <Link to={`/colaboradores/edit/${colaboradorId}`} className='btn-center'>
                <button className='btn-form'>Editar</button>
            </Link>

        </section>
    )
}

export default SingleColaborador