import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routerConfiguration from './routes/routerConfiguration';

const router = createBrowserRouter(routerConfiguration);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} /> 
	</React.StrictMode>,
);
