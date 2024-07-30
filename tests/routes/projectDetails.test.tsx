import { render } from '@testing-library/react';
import { test } from 'vitest';
import ProjectDetails from '../../src/routes/projectDetails';

test('It should render the project detail page', () => {
	render(<ProjectDetails />);
});
