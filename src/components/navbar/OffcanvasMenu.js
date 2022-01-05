import React from 'react';
import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../../router/router';

const OffcanvasMenu = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Cloud HR</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          {routes.map(route => (
            <Nav.Link as={NavLink} to={route.to}>
              {route.label}
            </Nav.Link>
          ))}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default OffcanvasMenu;
