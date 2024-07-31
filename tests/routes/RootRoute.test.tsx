import { expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { getEntityBy } from '../../src/utils/entity_crud';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routerConfiguration from '../../src/routes/routerConfiguration';


test('Renders the root layout', async () => {
	const rootEntity = getEntityBy(1); 
	const router = createMemoryRouter(routerConfiguration, {
		initialEntries: ['/']
	});

	render(<RouterProvider router={router} />);

	await waitFor(() => screen.getByRole('heading', {level: 1}));
	const heading = screen.getByRole('heading', {level: 1});
	expect(heading.textContent).toEqual(rootEntity.name);
});
