import { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BiLogOut } from 'react-icons/bi';
import { BaseConfig } from '../config/BaseConfig';
import { Service } from '../services';
import { StorageData } from '../Types/User';

export const NavbarComponent = () => {
  const [user, setUser] = useState<StorageData>();

  const getUserDetail = async () => {
    const userDetail = await BaseConfig.utilities.user();
    setUser(userDetail.data);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <Navbar style={{ width: '100%' }} bg="light" expand={false}>
      <Container>
        <Navbar.Brand href="#">FlashCards</Navbar.Brand>
        <span style={{ color: 'red' }}>
          Welcome
          {' '}
          {user?.name}
          {' '}
          {user?.surname}
        </span>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              {user?.name}
              {' '}
              {user?.surname}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Personal Dictionary</Nav.Link>
              <Nav.Link href="#action2">Notes</Nav.Link>
              <NavDropdown title="The Words" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">The words you learned</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Words you didn't learn</NavDropdown.Item>
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
          <Nav.Link
            onClick={() => {
              Service.User.Logout();
            }}
            style={{ marginBottom: 100 }}
            href="#action2"
          >
            Log Out
            {' '}
            <BiLogOut />
          </Nav.Link>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
