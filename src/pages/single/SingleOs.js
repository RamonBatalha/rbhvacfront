import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


export const SingleOs = () => {
    const { osId } = useParams();
    const [os, setOs] = useState([]);
    const [clienteNome, setClienteNome] = useState("")
    const [colaboradorNome, setColaboradorNome] = useState("")
    const [data, setData] = useState("")
    const { id, servico, valor, status, dataabertura, clients, colaborador } = os;

    useEffect(() => {
        {
            axios.get(`http://localhost:8080/api/os/v1/${osId}`)
                .then(function (response) {
                    console.log(response.data.clients.nome)
                    setOs(response.data);
                    setClienteNome(response.data.clients.nome);
                    setColaboradorNome(response.data.colaborador.nome)
                    setData(response.data.dataabertura.substring(0, 10).split('-').reverse().join('/'))
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

    }, [])

    function clientDelete(id) {

        if (window.confirm('Você tem certeza que deseja deletar o Ordem de Serviço?')) {
            axios.delete(`http://localhost:8080/api/os/v1/${osId}`)
            window.alert('Cliente deletado com sucesso! Acesse a página de ordem de serviços para verificar')
        }

    }


    function encerrarOs() {
        if (window.confirm('Você tem certeza que deseja encerrar a Ordem de Serviço?')) {

            axios.put('http://localhost:8080/api/os/v1', { id, servico, valor, "status": 2, dataabertura, clients, colaborador })
                .then(function (response) {
                    window.alert("Ordem de serviço Concluída")
                    window.location.reload();

                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                });

        }

    }


    return (
        <section >
            <h1>Ordem de Serviço</h1>
            <div className='single-client'>
                <span><strong>Serviço:</strong> </span>
                <span>{servico}</span>
                <span><strong>Valor:</strong> </span>
                <span>R$ {valor}</span>
                <span><strong>Cliente:</strong> </span>
                <span>{clienteNome}</span>
                <span><strong>Colaborador:</strong> </span>
                <span>{colaboradorNome}</span>
                <span><strong>Data de Abertura:</strong> </span>
                <span>{data}</span>
                <span><strong>Status:</strong> </span>
                {status == 1 ? <span>Em andamento</span> : <span>Concluída</span>}
            </div >
            <div className='div-btn'>

                <button className='btn-form' onClick={() => encerrarOs()}>Encerrar OS</button>

                <button className='btn-form' onClick={() => clientDelete()}>Deletar</button>
            </div>
        </section>
    )
}
