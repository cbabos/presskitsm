import { useFormState } from 'react-hook-form';

const handleAuthentication = async (
  _currentState: unknown,
  formData: FormData
) => {
  'use server';
  console.log(_currentState);
  console.log(formData);

  !!(Math.random() % 2);
};

function LoginBtn() {
  return <button type="submit">Log in</button>;
}

export default function Login() {
  const { ErrorMessage } = useFormState(handleAuthentication);
  return (
    <form className="login" action={handleAuthentication}>
      <input type="text" name="user" placeholder="Your username" required />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        required
      />
      {ErrorMessage && <p className="error">{ErrorMessage}</p>}
      <LoginBtn />
    </form>
  );
}
