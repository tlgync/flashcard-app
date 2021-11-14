import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

export const NavbarComponent = () => {
  console.log('hello');
  return (
    <Navbar style={{ width: '100%' }} bg="light" expand={false}>
      <Container>
        <Navbar.Brand href="#">FlashCards</Navbar.Brand>
        <span style={{ color: 'red' }}>Welcome Tolga</span>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Tolga Yonca</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Personal Dictionary</Nav.Link>
              <Nav.Link href="#action2">Notes</Nav.Link>
              <NavDropdown title="The Words" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Learned</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Learned Yet</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Form style={{ marginTop: 10 }} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
