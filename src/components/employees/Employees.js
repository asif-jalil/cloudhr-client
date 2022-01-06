import React from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Topbar from '../navbar/Topbar';

const Employees = () => {
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
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
			<Pagination>
				<Pagination.Prev>Prev</Pagination.Prev>
				<Pagination.Next>Next</Pagination.Next>
			</Pagination>
		</>
	);
};

export default Employees;
