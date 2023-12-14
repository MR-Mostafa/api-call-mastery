import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '~/layouts/mainLayout';
import NotFoundPage from '~/pages/404';

export const router = () =>
	createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					path: '/*',
					element: <NotFoundPage />,
				},
			],
		},
	]);
