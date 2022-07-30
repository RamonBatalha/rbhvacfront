
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';



const Login = () => {
  const [nome, setNome] = useState("");
  const [endereço, setEndereço] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [observacao, setObservacao] = useState("");
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/clients', {
      nome: nome,
      endereço: endereço,
      cpf: cpf,
      telefone: telefone,
      email: email,
      observacao: observacao
    })
    .then(function (response) {
      console.log(response);

    setNome("");
    setEndereço("");
    setCpf("");
    setTelefone("");
    setEmail("");
    setObservacao("");
    })
    .catch(function (error) {
      console.error(error);
    });

    
  }
  

  return (

    <>
    <h1>Formulário de Cadastro</h1>
    <Form className='form-login'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value) } placeholder="Nome do Cliente"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" value={endereço} onChange={(e) => setEndereço(e.target.value)} placeholder="Endereço do Cliente"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="number" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF do Cliente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone do Cliente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="cliente@example.com" />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label>Observação</Form.Label>
        <Form.Control as="textarea" value={observacao}  rows={3} onChange={(e) => setObservacao(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Cadastrar
      </Button>
    </Form>
    </>
    
   
  )
}

export default Login
