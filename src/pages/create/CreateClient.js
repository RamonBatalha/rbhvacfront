
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  nome: yup.string().required("Campo Obrigatório"),
  cpf: yup.string().required("Campo Obrigatório"),
  telefone: yup.string().required("Campo Obrigatório"),
  endereço: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("digite um email válido").required("Campo Obrigatório"),
  observacao: yup.string().max(200, "Observação deve ter no máximo 200 caracteres").required("Campo Obrigatório"),
}).required();


const CreateClient = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  function onSubmit(data) {
    console.log(data);

    axios.post('http://localhost:8080/api/clients/v1', data)
      .then(function (response) {
        console.log(response);
        navigate('/clientes')
      })
      .catch(function (error) {
        console.error(error);
      });

  }

  return (

    <section>
      <h1>Formulário de Cadastro</h1>
      <Form className='form-cadastro' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome do Cliente" {...register("nome")} />
          <span className='span-erro-form'>{errors.nome?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" placeholder="Endereço do Cliente" {...register("endereço")} />
          <span className='span-erro-form'>{errors.endereço?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="CPF do Cliente" {...register("cpf")} />
          <span className='span-erro-form'>{errors.cpf?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" placeholder="Telefone do Cliente" {...register("telefone")} />
          <span className='span-erro-form'>{errors.telefone?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="cliente@example.com" {...register("email")} />
          <span className='span-erro-form'>{errors.email?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Observação</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("observacao")} />
          <span className='span-erro-form'>{errors.observacao?.message}</span>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </Form>
    </section>

  )
}

export default CreateClient
