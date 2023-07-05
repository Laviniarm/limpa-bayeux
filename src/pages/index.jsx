import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import { useState } from 'react';
import ModalInformarPrefeitura from '../components/ModalInformarPrefeitura';

import styles from '@/src/styles/pages/index.module.css';

import img1 from '@/public/Imagem1.jpg';
import img2 from '@/public/imagem2.jpg';
import img3 from '@/public/imagem3.jpg';

export default function Home() {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container as={'section'} className={`text-center ${styles.hero}`}>
        <Row>
          <Col>
            <h1 className="display-4 mb-3">Faça sua parte!</h1>
            <p className="lead mb-4">
              Descarte incorreto pode causar entupimentos, enchentes, poluição dos mananciais, liberação de gases nocivos
              na atmosfera, prejuízos à fauna e à flora, entre outras consequências.
            </p>

            <Row>
              <Col md={12}>
                <p className="lead mb-4">
                  O Projeto Limpa Bayeux tem como objetivo diminuir o acúmulo de lixo nas ruas e em terrenos baldios e facilitar a denunciar de locais com descarte
                  incorreto de lixo e entulho além da conscientização da população com programas educacionais que promovam práticas
                  responsáveis de gestão de resíduos, incluindo reciclagem e descarte adequado de resíduos perigosos, etc.
                </p>
              </Col>
            </Row>
            <div className="text-center">
              <h3 className="mb-4">Informe a prefeitura sobre o descarte incorreto de lixo em terrenos baldios, para que possamos
                fazer o recolhimento de forma correta.</h3>
            </div>
            <hr className="my-5" />
            <p className="text-muted">Junte-se a nós e faça a diferença!</p>

            <div className="text-center">
              <Button variant="success" size="lg" className={styles.button1} onClick={handleOpenModal}>
                Informe a prefeitura
              </Button>
            </div>
          </Col>
        </Row>

        <ModalInformarPrefeitura showModal={showModal} handleCloseModal={handleCloseModal} />
      </Container>

      <Container fluid as='section' className={`mt-5 ${styles.statistics}`}>
        <Container className='p-5'>
          <Row>
            <Col md={4}>
              <h3>500+</h3>
              <p>Terrenos Limpos</p>
            </Col>
            <Col md={4}>
              <h3>1000+</h3>
              <p>Pessoas Impactadas</p>
            </Col>
            <Col md={4}>
              <h3>50+</h3>
              <p>Parceiros Envolvidos</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`py-5 ${styles.team}`}>
        <Container>
          <h2 className="text-center mb-4">Eventos de conscientização</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="container text-center">
                <Image src={img1.src} className="img-fluid rounded-circle shadow" alt="Imagem 1" />
                <h4 className="mt-3">Limpa Bayeux</h4>
                <p>Campanhas de limpeza, palestras educativas, workshops, etc.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="container text-center">
                <Image src={img2.src} className="img-fluid rounded-circle shadow" alt="Imagem 2" />
                <h4 className="mt-3">workshop</h4>
                <p>Campanhas de limpeza, palestras educativas, workshops, etc.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="container text-center">
                <Image src={img3.src} className="img-fluid rounded-circle shadow" alt="Imagem 3" />
                <h4 className="mt-3">Eventos Futuros</h4>
                <p>Campanhas de limpeza, palestras educativas, workshops, etc.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
