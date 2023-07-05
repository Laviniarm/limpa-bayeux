import { useRouter } from 'next/router';

import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/components/LocalNavbar.module.css'

export default function LocalNavbar() {

    const router = useRouter()

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
            <Container>
                <Navbar.Brand href="#home" className={styles.logo}>LIMPABAYEUX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={`me-3 ${styles.navLink} ${router.pathname === '/' ? styles.navLinkActive : styles.navLink}`}>HOME</Nav.Link>
                        <Nav.Link href="/solicite-cacamba" className={`me-3 ${styles.navLink} ${router.pathname === '/solicite-cacamba' ? styles.navLinkActive : styles.navLink}`}>SOLICITE CAÇAMBA</Nav.Link>
                        <Nav.Link href="/descarte-correto" className={`me-3 ${styles.navLink} ${router.pathname === '/descarte-correto' ? styles.navLinkActive : styles.navLink}`}>DESCARTE CORRETO</Nav.Link>
                        <Nav.Link href="/sobre-a-prefeitura" className={`me-3 ${styles.navLink} ${router.pathname === '/sobre-a-prefeitura' ? styles.navLinkActive : styles.navLink}`}>SOBRE A PREFEITURA</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
