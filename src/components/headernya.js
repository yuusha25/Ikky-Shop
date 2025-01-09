import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">IkkyShop</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Pulsa</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>Paket Data</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>username</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
 
export default Header;