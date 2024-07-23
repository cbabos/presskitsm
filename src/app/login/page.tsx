import { signIn } from '@/auth';
import { redirect, RedirectType } from 'next/navigation';

async function doLogin() {
  'use server';

  await signIn('github');
  redirect('/', RedirectType.replace);
}

export default function Login() {
  return (
    <div className="login">
      <form action={doLogin}>
        <button>Sign in with GH!</button>
      </form>
    </div>
  );
}
