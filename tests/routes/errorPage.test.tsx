import { expect, test } from 'vitest';
import routerConfiguration from '../../src/routes/routerConfiguration';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

test('It should render a common error page', async () => {
	const router = createMemoryRouter(routerConfiguration, {
		initialEntries: ['/asdf']
	});

	render(<RouterProvider router={router} />);

	await waitFor(() => screen.getByRole('heading', {level: 1}));
	const heading = screen.getByRole('heading', {level: 1});
	expect(heading.textContent).toEqual('Oops!');

	
});
