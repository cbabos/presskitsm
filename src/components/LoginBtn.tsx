import { auth } from '@/auth';
import Link from 'next/link';

export function LoginButton({ session }) {
  const label = session === null ? 'Log me In' : 'Let me out';
  const link = session === null ? '/api/auth/signin/' : '/api/auth/signout/';

  return (
    <>
      <li>
        <Link href={link}>{label}</Link>
      </li>
    </>
  );
}

export default async function LoginBtn() {
  const session = await auth();
  return <LoginButton session={session} />;
}
