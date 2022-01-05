import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import AddEmployee from '../components/employees/AddEmployee';
import Employees from '../components/employees/Employees';

const MainRoutes = () => (
	<Routes>
		<Route path='/' element={<Dashboard />} />
		<Route path='/employees' element={<Employees />} />
		<Route path='/add-employee' element={<AddEmployee />} />
	</Routes>
);

export default MainRoutes;
