import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import {apiConfig} from "../../config";

const Topbar = ({ title }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("No results to show");
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const handleSearch = async (searchTerm) => {
      setMessage("No results to show");
      if (searchTerm.length >= 3) {
        const res = await axios.get(`${apiConfig.url}/employees/search?searchTerm=${searchTerm}`);
        setEmployees(res.data);
      } else {
        setEmployees([]);
        setMessage("Type at least 3 letter to show result");
      }

      if (searchTerm.length === 0) {
        setMessage("No results to show");
      }
    };

    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <Row className="justify-content-between mb-5 mb-sm-4">
      <Col className="mb-4">
        <h4 className="ms-6 ms-xl-0">{title}</h4>
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <Dropdown onToggle={() => setShow(!show)} autoClose="outside">
          <Dropdown.Toggle as="div" data-toggle="dropdown" bsPrefix="toggle">
            <Form>
              <Form.Control
                type="text"
                onChange={(e) => setSearchTerm(e.target.value.trim())}
                className="rounded-pill"
                placeholder="Search Employee"
              />
            </Form>
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            <div className="scrollbar py-2" style={{ maxHeight: "20rem" }}>
              {employees.length ? (
                employees.map((employee, index) => (
                  <div key={employee.id}>
                    <p className="px-3">
                      {employee.firstName} {employee.lastName} - {employee.email}
                    </p>
                    {index !== employees.length - 1 && <hr />}
                  </div>
                ))
              ) : (
                <h6 className="mb-0 px-3">{message}</h6>
              )}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Topbar;
