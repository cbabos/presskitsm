import { signIn } from '@/auth';

async function doLogin() {
  "use server"

  await signIn("github");
}

export default function Login() {
  return (
    <div className='login'>
      <form action={doLogin}>
        <button>Sign in with GH!</button>
      </form>
    </div >);
}
