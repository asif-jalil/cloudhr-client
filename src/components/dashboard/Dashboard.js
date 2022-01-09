import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Topbar from '../navbar/Topbar';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
	const [employees, setEmployees] = useState(0);
	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(`${process.env.REACT_APP_API_URL}employees/count`);
			setEmployees(res.data);
		}

		fetchData();
	}, []);
	return (
		<>
			<Topbar title='Dashboard' />
			<Row>
				<Col lg={3} md={4} sm={6}>
					<DashboardCard value={employees} title='Total Employee' variant='primary' />
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
