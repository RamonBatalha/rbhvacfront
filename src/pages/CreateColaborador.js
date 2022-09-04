
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const schema = yup.object({
  nome: yup.string().required("Campo Obrigatório"),
  cpf: yup.string().required("Campo Obrigatório"),
  telefone: yup.string().required("Campo Obrigatório"),
  cargo: yup.string().required("Campo Obrigatório"),
  remuneraçao: yup.string().required("Campo Obrigatório"),
  endereço: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("digite um email válido").required("Campo Obrigatório"),
  }).required();

const CreateColaborador = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  

  function onSubmit(data) {
    console.log(data);

    axios.post('http://localhost:8080/api/colaboradores/v1', data)
    .then(function (response) {
      console.log(response);
      navigate('/colaboradores')
    })
    .catch(function (error) {
      console.error(error);
    });

  }
  
  return (

    <section>
    <h1>Cadastro de Colaboradores</h1>
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
        <Form.Control type="text" placeholder="CPF do Colaborador" {...register("cpf")} />
        <span>{errors.cpf?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" placeholder="Cargo do Colaborador" {...register("cargo")} />
        <span>{errors.cargo?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Remuneração</Form.Label>
        <Form.Control type="text" placeholder="Remuneração do Colaborador" {...register("remuneraçao")} />
        <span>{errors.remuneraçao?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="text"  placeholder="Telefone do Colaborador" {...register("telefone")} />
        <span>{errors.telefone?.message}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="colaborador@example.com" {...register("email")} />
        <span>{errors.email?.message}</span>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Cadastrar
      </Button>
    </Form>
    </section>

  )
}

export default CreateColaborador
