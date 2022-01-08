import React, { useState } from "react";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import Topbar from "../navbar/Topbar";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import classNames from "classnames";

const AddEmployee = () => {
  const [uploadCSV, setUploadCSV] = useState(false);
  const [files, setFiles] = useState([]);
  const [showResponse, setShowResponse] = useState({ show: false, msg: "", isError: false });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    axios.post("http://localhost:5000/employees/create", data).then((res) => {
      let msg = "";
      if (res.status === 200) {
        msg = res.data.message;
        setShowResponse({ show: true, msg: msg, isError: false });
        e.target.reset();
      } else {
        msg = res.data.error.message;
        setShowResponse({ show: true, msg: msg, isError: true });
      }
    });
  };

  const helloLog = () => {
    setFiles(null);
  };

  return (
    <>
      <Topbar title="Add Employee" />

      <Button onClick={() => setUploadCSV(!uploadCSV)} variant="outline-warning" className="mb-4">
        {uploadCSV ? "Add With Form" : "Upload with CSV"}
      </Button>
      {uploadCSV ? (
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          oninit={() => helloLog()}
          server={{
            url: "http://localhost:5000/employees/createbulk",
            process: {
              onerror: (error) => {
                const parsedError = JSON.parse(error);
                setShowResponse({ show: true, msg: parsedError.error.message, isError: true });
              },
              onload: (res) => {
                const parsedRes = JSON.parse(res);
                setShowResponse({ show: true, msg: parsedRes.message, isError: false });
              },
            },
            revert: (uniqueFileId, load, error) => {
              setFiles([]);

              error(() => {
                setShowResponse({ show: true, msg: "Something went wrong", isError: true });
              });

              load();
            },
          }}
          name="file"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>. (Only CSV file)'
        />
      ) : (
        <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
          <Row className="g-4">
            <Col md={6}>
              <Form.Group controlId="fName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" {...register("firstName", { required: true })} />
                {errors.firstName && <small className="text-danger">First name is required</small>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" {...register("lastName", { required: true })} />
                {errors.lastName && <small className="text-danger">Last name is required</small>}
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="email">
                <Form.Label>Email Name</Form.Label>
                <Form.Control type="email" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                {errors.email && <small className="text-danger">Email is required with proper format</small>}
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      )}

      <Toast
        className={classNames("position-fixed end-0 top-0 mt-3 me-4", {
          "bg-success": !showResponse.isError,
          "bg-danger": showResponse.isError,
        })}
        onClose={() => setShowResponse({ ...showResponse, show: false })}
        show={showResponse.show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto text-dark">Employee Status</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{showResponse.msg}</Toast.Body>
      </Toast>
    </>
  );
};

export default AddEmployee;
