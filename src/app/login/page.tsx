'use client';
import { useState } from 'react';
import { handleLogin } from './actions';

function LoginBtn({ pending }: { pending: boolean }) {
  return <>{!pending && <button type="submit">Log in</button>}</>;
}

export default function Login() {
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const handleAuthentication = async function (formData: FormData) {
    setPending(true);
    const success = await handleLogin(
      formData.get('user') as string,
      formData.get('password') as string
    );
    setError(!success ? 'Invalid username or password' : '');
    setPending(false);
  };

  return (
    <form className="login" action={handleAuthentication}>
      <input type="text" name="user" placeholder="Your username" required />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        required
      />
      {error && <p>{error}</p>}
      <LoginBtn pending={pending} />
    </form>
  );
}
