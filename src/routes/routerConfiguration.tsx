import ErrorPage from './errorPage';
import ProjectDetails from './projectDetails';
import { loader as projectLoader } from './projectLoader';
import Root from './rootRoute';

export default [
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: '/details/:project',
		element: <ProjectDetails />,
		loader: projectLoader, 
	}
];
