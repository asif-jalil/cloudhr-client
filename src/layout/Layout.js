import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../components/navbar/Sidebar";
import MainRoutes from "./MainRoutes";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Container fluid>
          <MainRoutes />
        </Container>
      </div>
    </>
  );
};

export default Layout;
