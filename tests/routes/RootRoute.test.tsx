import { test } from 'vitest';
import Root from '../../src/routes/rootRoute'; 
import { render } from '@testing-library/react';


test('Renders the root layout', () => {
	render(<Root />);
});
