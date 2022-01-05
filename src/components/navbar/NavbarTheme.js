import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import OffcanvasMenu from './OffcanvasMenu';

const NavbarTheme = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Cloud HR</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <OffcanvasMenu />
      </Container>
    </Navbar>
  );
};

export default NavbarTheme;
