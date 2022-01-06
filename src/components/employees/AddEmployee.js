import React, { useCallback, useState } from 'react';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Topbar from '../navbar/Topbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddEmployee = () => {
	const [uploadCSV, setUploadCSV] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [files, setFiles] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = async data => {
		try {
			const res = await axios.post('http://localhost:5000/employees/create', data);
			console.log(res);
			if (Object.keys(res).length !== 0) {
				setShowToast(true);
			}
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<>
			<Topbar title='Add Employee' />

			<Button onClick={() => setUploadCSV(!uploadCSV)} variant='outline-warning' className='mb-4'>
				{uploadCSV ? 'Add With Form' : 'Upload with CSV'}
			</Button>
			{uploadCSV ? (
				<FilePond
					files={files}
					onupdatefiles={setFiles}
					allowMultiple={false}
					server='http://localhost:5000/employees/create'
					name='file'
					labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>. (Only CSV file)'
				/>
			) : (
				<Form className='mb-5' onSubmit={handleSubmit(onSubmit)}>
					<Row className='g-4'>
						<Col md={6}>
							<Form.Group controlId='fName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control type='text' {...register('firstName', { required: true })} />
								{errors.firstName && <small className='text-danger'>First name is required</small>}
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group controlId='lName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type='text' {...register('lastName', { required: true })} />
								{errors.lastName && <small className='text-danger'>Last name is required</small>}
							</Form.Group>
						</Col>
						<Col md={12}>
							<Form.Group controlId='email'>
								<Form.Label>Email Name</Form.Label>
								<Form.Control type='email' {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} />
								{errors.email && <small className='text-danger'>Email is required with proper format</small>}
							</Form.Group>
						</Col>
						<Col md={12}>
							<Button type='submit' variant='primary'>
								Submit
							</Button>
						</Col>
					</Row>
				</Form>
			)}

			<Toast className='position-fixed end-0 top-0 mt-3 me-4 bg-success' onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
				<Toast.Header>
					<img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
					<strong className='me-auto text-dark'>Employee Added</strong>
				</Toast.Header>
				<Toast.Body className='text-dark'>1 employee has been added</Toast.Body>
			</Toast>
		</>
	);
};

export default AddEmployee;
