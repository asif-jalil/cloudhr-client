import React, { useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";

const Topbar = ({ title }) => {
  const [show, setShow] = useState(false);
  return (
    <Row className="justify-content-between mb-5 mb-sm-4">
      <Col className="mb-4">
        <h4 className="ms-6 ms-xl-0">{title}</h4>
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <Dropdown onToggle={() => setShow(!show)}>
          <Dropdown.Toggle as="div" data-toggle="dropdown" bsPrefix="toggle">
            <Form>
              <Form.Control type="text" className="rounded-pill" placeholder="Search Employee" />
            </Form>
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            <div className="scrollbar py-2" style={{ maxHeight: "20rem" }}>
              <h6 className="mb-0 px-3">Nothing to show</h6>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Topbar;
