import { useState } from 'react';
import axios from 'axios';

import { Modal, Button, Form, Alert } from 'react-bootstrap';


export default function ModalInformarPrefeitura({ showModal, handleCloseModal}) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pontoDeReferencia, setPontoDeReferencia] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleEnviar = async () => {
        try {
            
            // Envia dados para API
            await axios.post('/api/salvar-dados', {
                nome,
                email,
                telefone,
                cep,
                endereco,
                pontoDeReferencia,
            });

            // Limpa os campos do formulário após o envio
            setNome('');
            setEmail('');
            setTelefone('');
            setCep('');
            setEndereco('');
            setPontoDeReferencia('');

            setShowSuccess(true);
            setShowError(false);
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);

            setShowSuccess(false);
            setShowError(true);
            setErrorMessage('Erro ao salvar os dados. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Informe o local do lixo ou entulho</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container p-3 mb-5 bg-light text-dark">
                    {showSuccess && (
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            Dados salvos com sucesso!
                        </Alert>
                    )}
                    {showError && (
                        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                            {errorMessage}
                        </Alert>
                    )}
                    <Form>
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="email" className='mt-2'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="telefone" className='mt-2'>
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="cep" className='mt-2'>
                            <Form.Label>Cep:</Form.Label>
                            <Form.Control type="text" maxLength={9} pattern="[0-9]{5}-[0-9]{3}" placeholder="Digite o CEP" required value={cep} onChange={(e) => setCep(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="endereco" className='mt-2'>
                            <Form.Label>Endereço do lixo/entulho:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="pontoDeReferencia" className='mt-2'>
                            <Form.Label>Ponto de referência:</Form.Label>
                            <Form.Control type="text" placeholder="Digite o ponto de referência" value={pontoDeReferencia} onChange={(e) => setPontoDeReferencia(e.target.value)} />
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleCloseModal}>
                    Fechar
                </Button>
                <Button variant="success" onClick={handleEnviar}>
                    Enviar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}