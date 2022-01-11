import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination, Placeholder, Table } from 'react-bootstrap';
import usePagination from '../../hooks/usePagination';
import Topbar from '../navbar/Topbar';
import { apiConfig } from '../../config';

const Employees = () => {
	const [employees, setEmployees] = useState([]);
	const [totalEmployee, setTotalEmployee] = useState(0);
	const { next, prev, currentPage, firstPage, lastPage } = usePagination(totalEmployee);

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(`${apiConfig.url}employees/count`);
			setTotalEmployee(res.data);
		}

		const cleanUp = fetchData();

		return cleanUp;
	}, []);

	useEffect(() => {
		setEmployees([]);
		axios
			.get(`${apiConfig.url}employees/view?page=${currentPage}`)
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
					{employees.length ? (
						employees.map(employee => (
							<tr key={employee.id}>
								<td>{employee.firstName}</td>
								<td>{employee.lastName}</td>
								<td>{employee.email}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={3}>
								<Placeholder as='p' animation='glow'>
									<Placeholder size='sm' xs={12} />
								</Placeholder>
								<Placeholder as='p' animation='wave'>
									<Placeholder size='sm' xs={12} />
								</Placeholder>
								<Placeholder as='p' animation='wave'>
									<Placeholder size='sm' xs={12} />
								</Placeholder>
								<Placeholder as='p' animation='wave'>
									<Placeholder size='sm' xs={12} />
								</Placeholder>
								<Placeholder as='p' animation='wave'>
									<Placeholder size='sm' xs={12} />
								</Placeholder>
							</td>
						</tr>
					)}
				</tbody>
			</Table>
			<Pagination>
				<Pagination.Prev disabled={firstPage ? true : false} onClick={prev}>
					Prev
				</Pagination.Prev>
				<Pagination.Next disabled={lastPage ? true : false} onClick={next}>
					Next
				</Pagination.Next>
			</Pagination>
			<small>
				Showing {totalEmployee >= 5 ? 5 : totalEmployee} Results of {totalEmployee}
			</small>
		</>
	);
};

export default Employees;
