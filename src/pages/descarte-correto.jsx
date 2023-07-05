import { Container, Row, Card } from 'react-bootstrap';

export default function DescarteCorreto() {
    return (
        <Container className="mt-5 mb-2 text-dark text-center">
            <h2 className="display-4 mb-3">
                Descarte correto de lixo
            </h2>
            <p className='mb-5'>
                O descarte de lixo é um problema sério que afeta o meio ambiente e a saúde pública. Para ajudar a conscientizar a
                população sobre a importância do descarte de lixo, separamos algumas dicas importantes:
            </p>
            <div>
                <Row>
                    <Card className='mb-3' style={{ backgroundColor: 'rgb(82, 139, 113)' }}>
                        <Card.Body>
                            <Card.Title>Coloque o lixo em sacos plásticos</Card.Title>
                            <Card.Text>
                                Coloque o lixo em sacos plásticos e certifique-se de que estão bem fechados na hora de descartar o lixo.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mb-3' style={{ backgroundColor: 'rgb(82, 139, 113)' }}>
                        <Card.Body>
                            <Card.Title>Não faça lixões em terrenos baldios</Card.Title>
                            <Card.Text>
                                Descarte incorreto pode causar entupimentos, enchentes, poluição dos mananciais, liberação de gases nocivos
                                na atmosfera, prejuízos à fauna e à flora, entre outras consequências.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mb-3' style={{ backgroundColor: 'rgb(82, 139, 113)' }}>
                        <Card.Body>
                            <Card.Title>Respeite os dias e horários da coleta</Card.Title>
                            <Card.Text>
                                As coletas possuem dias e horários, evite deixar o lixo exposto, pois podem atrair bichos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mb-5' style={{ backgroundColor: 'rgb(82, 139, 113)' }}>
                        <Card.Body>
                            <Card.Title id="card-title">Separe o lixo reciclável</Card.Title>
                            <Card.Text>A separação do lixo reciclável ajuda a preservar o meio ambiente.</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </Container>
    )
}