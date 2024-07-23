import Link from 'next/link';
import LoginBtn from './LoginBtn';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <LoginBtn />
        </li>
      </ul>
    </nav>
  );
}
