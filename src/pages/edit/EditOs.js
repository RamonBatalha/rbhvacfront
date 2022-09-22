import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useEffect } from 'react'

const schema = yup.object({
  servico: yup.string().required("Campo Obrigatório"),
  valor: yup.string().required("Campo Obrigatório"),
  dataabertura: yup.date()
}).required();

const EditOs = () => {
  const { osId } = useParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {

    axios.get(`http://localhost:8080/api/os/v1/${osId}`)
      .then(function (response) {
        console.log(response.data)
        reset(response.data)
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
  }, [])


  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Serviço</Form.Label>
          <Form.Control type="text" placeholder="Descrição do Serviço" {...register("servico")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Valor do Serviço</Form.Label>
          <Form.Control type="text" placeholder="Digite o valor do serviço" {...register("valor")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data de Abertura</Form.Label>
          <Form.Control type="date" placeholder="Password" {...register("dataabertura")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cliente</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Colaborador Responsável</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select >
            <option>Em Andamento</option>
            <option>Concluída</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  )
}

export default EditOs