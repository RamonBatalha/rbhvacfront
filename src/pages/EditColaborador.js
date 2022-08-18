
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const schema = yup.object({
nome: yup.string().required("Campo Obrigatório"),
endereço: yup.string().required("Campo Obrigatório"),
email: yup.string().email("digite um email válido").required("Campo Obrigatório"),
cargo: yup.string().max(200, "Cargo deve ter no máximo 200 caracteres").required("Campo Obrigatório"),
}).required();


const EditColaborador = () => {
  let navigate = useNavigate();
  const {colaboradorId} = useParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  

  function onSubmit(data) {
    console.log(data);

    axios.put('http://localhost:8080/api/colaboradores/v1', data)
    .then(function (response) {
      console.log(response);
      navigate(`/colaboradores/${colaboradorId}`)
    })
    .catch(function (error) {
      console.error(error);
    });

    reset()
  }

  useEffect(() => {

    axios.get(`http://localhost:8080/api/colaboradores/v1/${colaboradorId}`)
      .then(function (response) {
        reset(response.data)
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      });
    }, [])
  
  return (

    <section>
    <h1>Formulário de Cadastro</h1>
    <Form className='form-cadastro' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text"  placeholder="Nome do Colaborador" {...register("nome")} />
        <span>{errors.nome?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" placeholder="Endereço do Colaborador" {...register("endereço")}  />
        <span>{errors.endereço?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="number" placeholder="CPF do Colaborador" {...register("cpf")} />
        <span>{errors.cpf?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" placeholder="Cargo do Colaborador" {...register("cargo")} />
        <span>{errors.cargo?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Remuneração</Form.Label>
        <Form.Control type="number" placeholder="CPF do Colaborador" {...register("remuneraçao")} />
        <span>{errors.remuneraçao?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number"  placeholder="Telefone do Colaborador" {...register("telefone")} />
        <span>{errors.telefone?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="colaborador@example.com" {...register("email")} />
        <span>{errors.email?.message}</span>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Editar
      </Button>
    </Form>
    </section>

  )
}

export default EditColaborador
