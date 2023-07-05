import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


export default function SoliciteCacamba() {

  const cepRegex = /^(\d{5})[-]?(\d{3})$/;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pontoDeReferencia, setPontoDeReferencia] = useState('');
  const [motivo, setMotivo] = useState('');
  const [dadosSalvos, setDadosSalvos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Recupera os cards na API
      const response = await axios.get('/api/solicitar-cacamba');
      setDadosSalvos(response.data);
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
    }
  };

  const handleCepChange = (e) => {
    const { value } = e.target;

    // Remove qualquer caractere que não seja número
    const numericValue = value.replace(/\D/g, '');

    // Formata o CEP: 12345-678
    const formattedCep = numericValue.replace(cepRegex, '$1-$2');

    setCep(formattedCep);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (dadosSalvos.some((dados) => dados.cep === cep)) {
      alert('Já existe um card com o mesmo CEP!');
      return;
    }
    try {
      const newData = {
        nome,
        email,
        telefone,
        cep,
        endereco,
        pontoDeReferencia,
        motivo
      }

      // Envia dados para API
      await axios.post('/api/solicitar-cacamba', newData)

      // Atualiza dados do card
      setDadosSalvos([...dadosSalvos, newData]);

      // Limpa os campos do formulário após o envio
      setNome('');
      setEmail('');
      setTelefone('');
      setCep('');
      setEndereco('');
      setPontoDeReferencia('');
      setMotivo('');

    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  return (
    <Container className="p-3 mb-4 text-dark mt-5">
      <Row>
        <Col className="text-center">
          <h2>Solicite uma Caçamba</h2>
          <p>Por favor, preencha o formulário abaixo para solicitar uma caçamba.</p>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="telefone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control type="text" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="cep">
              <Form.Label>CEP:</Form.Label>
              <Form.Control type="text" name="cep" maxLength={9} required value={cep} onChange={handleCepChange} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="endereco">
              <Form.Label>Endereço:</Form.Label>
              <Form.Control type="text" name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="pontoDeReferencia">
              <Form.Label>Ponto de Referência:</Form.Label>
              <Form.Control type="text" name="referencia" value={pontoDeReferencia} onChange={(e) => setPontoDeReferencia(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group controlId="justificativa">
              <Form.Label>Explique o motivo da solicitação:</Form.Label>
              <Form.Control as="textarea" name="justificativa" rows={3} value={motivo} onChange={(e) => setMotivo(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button type="submit" variant="success" size="lg" className='btn-block w-100'>
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-4">
        <Col className="text-center">
          <h3 className="mb-4">Solicitações de Caçamba</h3>
          <div className="d-flex flex-wrap">
            {dadosSalvos.map((dados, index) => (
              <Card key={index} className="m-2">
                <Card.Body>
                  <Card.Text>CEP: {dados.cep}</Card.Text>
                  <Card.Text>Endereço: {dados.endereco}</Card.Text>
                  <Card.Text>Ponto de Referência: {dados.pontoDeReferencia}</Card.Text>
                  <Card.Text>Motivo: {dados.motivo}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>

    </Container>
  );
};
