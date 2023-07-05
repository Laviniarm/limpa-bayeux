import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <Container as={'footer'} fluid className="footer mt-3 py-5 bg-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contatos</h5>
                        <ul className="list-unstyled">
                            <li><FaMapMarkerAlt /> Av. Liberdade, Nº 3720, Bayeux, PB</li>
                            <li><FaPhone /> (83) 98862-8073</li>
                            <li><FaEnvelope /> sic@bayeux.pb.gov.br</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Redes Sociais</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/prefeiturabayeux/"><FaFacebookF /> Facebook</a></li>
                            <li><a href="https://www.instagram.com/prefeiturabayeux/?igshid=6jotjfx2h2lh"><FaInstagram /> Instagram</a></li>
                            <li><a href="https://www.youtube.com/channel/UCex8nfbWXZbuka8POUthQgA"><FaYoutube /> YouTube</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Sobre Nós</h5>
                        <p>Projeto com objetivo de diminuir o acúmulo de lixo nas ruas e em terrenos baldios, contribuindo para o bem-estar da população e a preservação do meio ambiente.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}