import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../src/App';

test('Should render the hello world app', () => {
	render(<App />);
	
	const title = screen.getByText('Vite + React');
	expect(title.tagName).toBe('H1');
});
