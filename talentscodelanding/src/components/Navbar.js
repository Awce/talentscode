import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import Contact from "./Contact";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" variant="light" bg="light">
      <Container>
        <Navbar.Brand>
          <h1 style={{ color: "#f810e3" }}>Purificaly</h1>
        </Navbar.Brand>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Renta de despachadores
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Venta de despachadores
                </NavDropdown.Item>
              </NavDropdown>
              <Contact />
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
