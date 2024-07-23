// TODO: Create dynamic login information
export async function handleLogin(
  username: string,
  password: string
): Promise<boolean> {
  if (username === 'cbabos' && password === 'x') return true;
  return false;
}
