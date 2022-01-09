import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import usePagination from '../../hooks/usePagination';
import Topbar from '../navbar/Topbar';

const Employees = () => {
	const [employees, setEmployees] = useState([]);
	const [totalEmployee, setTotalEmployee] = useState(0);
	const { next, prev, currentPage } = usePagination(totalEmployee);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}employees/count`);
			setTotalEmployee(res.data);
		}

		const cleanUp = fetchData();
		
		return cleanUp
	}, []);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}employees/view?page=${currentPage}`)
			.then(res => {
				setEmployees(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, [currentPage]);

	return (
		<>
			<Topbar title='Employees' />

			<Table bordered className='border-300'>
				<thead className='bg-200'>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{employees.map(employee => (
						<tr key={employee.id}>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.email}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Pagination>
				<Pagination.Prev onClick={prev}>Prev</Pagination.Prev>
				<Pagination.Next onClick={next}>Next</Pagination.Next>
			</Pagination>
			<small>Showing {totalEmployee >=5 ? 5 : totalEmployee} Results of {totalEmployee}</small>
		</>
	);
};

export default Employees;
