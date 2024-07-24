import { signIn, signOut } from '@/auth';

export async function doLogout() {
  await signOut();
}

export async function doLogin() {
  await signIn();
}
