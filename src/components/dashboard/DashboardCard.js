import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = ({ value, title, variant }) => {
	return (
		<Card className={`bg-${variant}`}>
			<Card.Body className='d-flex flex-center'>
				<h2 className='text-white mb-0 me-3'>{value}</h2>
				<p className='mb-0 text-white fw-medium'>{title}</p>
			</Card.Body>
		</Card>
	);
};

export default DashboardCard;
