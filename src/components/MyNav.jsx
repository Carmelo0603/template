import { Nav, Container, Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar className="border">
      <Container>
        <Navbar.Brand href="#home">EpiciBooks</Navbar.Brand>
        <Nav className="d-flex">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
