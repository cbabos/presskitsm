import { LoginButton } from "@/components/LoginBtn";
import { render, screen } from "@testing-library/react";
import { signIn, signOut } from '../mocks/auth';


describe('LoginBtn', () => {
	it('should render login btn as the user is not logged in', () => {
		const mockSession = null;
		const btn = render(<LoginButton session={mockSession} />);
		const submitBtn = screen.getByText('Log me In');

		expect(submitBtn).toBeInTheDocument();
		expect(submitBtn).toHaveAttribute('href', '/api/auth/signin');
	});

	it('should render logout btn as the user is logged in', async () => {
		const mockSession = {
			user: {
				name: 'test-user'
			}
		};
		const btn = render(<LoginButton session={mockSession} />);
		const submitBtn = screen.getByText('Let me out');

		expect(submitBtn).toBeInTheDocument();
		expect(submitBtn).toHaveAttribute('href', '/api/auth/signout');


	});
});
