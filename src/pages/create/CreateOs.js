import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  servico: yup.string().required("Campo Obrigatório"),
  valor: yup.string().required("Campo Obrigatório"),
}).required();

function CreateOs() {
  let navigate = useNavigate();
  const [colaboradores, setColaboradores] = useState([]);
  const [clients, setClients] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [idColaborador, setIdColaborador] = useState("")
  const [idCliente, setIdCliente] = useState("")


  useEffect(() => {

    axios.get('http://localhost:8080/api/colaboradores/v1')
      .then(function (response) {
        console.log(response.data);
        setColaboradores(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {

    axios.get('http://localhost:8080/api/clients/v1')
      .then(function (response) {
        console.log(response.data);
        setClients(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])


  function onSubmit(data, e) {
    console.log({ ...data, "status": 1, "id_cliente": { "id": idCliente }, "colaborador": { "id": idColaborador } });
    e.preventDefault()

    axios.post('http://localhost:8080/api/os/v1', { ...data, "status": 1, "clients": { "id": idCliente }, "colaborador": { "id": idColaborador } })
      .then(function (response) {
        console.log(response);
        navigate('/ordemservico')
      })
      .catch(function (error) {
        console.error(error);
        window.alert('Por Favor, Preencha todos os campos!');
      });

  }

  return (
    <section>
      <h1>Cadastro de Ordem de Serviço</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className='form-cadastro'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Serviço</Form.Label>
          <Form.Control type="text" placeholder="Descrição do Serviço" {...register("servico")} />
          <span className='span-erro-form'>{errors.servico?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Valor do Serviço </Form.Label>
          <Form.Control type="text" placeholder="ex. 500" {...register("valor")} />
          <span className='span-erro-form'>{errors.valor?.message}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data de Abertura</Form.Label>
          <Form.Control type="date"  {...register("dataabertura")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cliente</Form.Label>

          <Form.Select value={idCliente} onChange={e => setIdCliente(e.target.value)}>
            <option > Selecione o Cliente</option>
            {clients.map((item, index) => {
              return (
                <option key={index} value={item.id} >{item.nome}</option>
              )
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Colaborador Responsável</Form.Label>
          <Form.Select value={idColaborador} onChange={e => setIdColaborador(e.target.value)}>
            <option > Selecione o Colaborador</option>
            {colaboradores.map((item, index) => {
              return (
                // console.log(item)
                <option key={index} value={item.id}>{item.nome}</option>
              )
            })}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
        
      </Form>
    </section>
  )
}

export default CreateOs