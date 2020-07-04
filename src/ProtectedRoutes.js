import React from 'react';
import ReportsView from './ReportsView'
import Table from './components/Table'

const protectedRoutes = [
	{
		name: 'reports',
		exact: true,
		path: '/reports',
		main: props => <ReportsView {...props} />,
		public: false,
	},
	{
		name: 'table',
		exact: true,
		path: '/table',
		main: props => <Table {...props} />,
		public: false,
	},
];

export default protectedRoutes;