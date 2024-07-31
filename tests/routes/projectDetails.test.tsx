import { expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { getEntityBy } from '../../src/utils/entity_crud';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routerConfiguration from '../../src/routes/routerConfiguration';


test('Renders the project details', async () => {
	const rootEntity = getEntityBy(2); 
	const router = createMemoryRouter(routerConfiguration, {
		initialEntries: ['/details/2']
	});

	render(<RouterProvider router={router} />);

	await waitFor(() => screen.getByRole('heading', {level: 1}));
	const heading = screen.getByRole('heading', {level: 1});
	expect(heading.textContent).toEqual(rootEntity.name);
});
