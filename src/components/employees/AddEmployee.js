import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const AddEmployee = () => {
  const [uploadCSV, setUploadCSV] = useState(false);
  const [files, setFiles] = useState([]);

  return (
    <section className="py-5">
      <h1>hello</h1>
      <h2 className="mb-4">Add Employee</h2>

      {uploadCSV ? (
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          server="/api"
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      ) : (
        <Form className="mb-5">
          <Row className="g-3">
            <Col md={6}>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col md={6}>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
            <Col md={6}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
            <Col md={6}>
              <Button className="w-100">Submit</Button>
            </Col>
          </Row>
        </Form>
      )}

      <Button
        onClick={() => setUploadCSV(!uploadCSV)}
        variant="outline-success"
        size="lg"
      >
        {uploadCSV ? 'Add With Form' : 'Upload with CSV'}
      </Button>
    </section>
  );
};

export default AddEmployee;
