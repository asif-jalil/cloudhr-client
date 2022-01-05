import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import NavbarTheme from '../components/navbar/NavbarTheme';
import MainRoutes from './MainRoutes';

const Layout = () => {
  return (
    <>
      <NavbarTheme />
      <Container>
        <MainRoutes />
      </Container>
    </>
  );
};

export default Layout;
