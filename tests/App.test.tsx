import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../src/App';

test('Should render the hello world app', async () => {
	render(<App />);
	
	const title = screen.getByText('Vite + React');
	expect(title.tagName).toBe('H1');
	
	const buttonToInc = screen.getByTestId('increase-btn');
	expect(buttonToInc).toBeVisible();
	buttonToInc.click();

	await screen.findByText('count is 1');
});
