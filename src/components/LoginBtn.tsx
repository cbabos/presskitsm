import { auth } from "@/auth";
import { doLogin, doLogout } from "@/utils/auth/actions";

export default async function LoginBtn() {
  const session = await auth();
  const label = session === null ? "Log me In" : "Let me out";
  const doAuthAction = async () => {
    'use server';
    const action = session === null ? doLogin : doLogout;
    await action();
  }

  return (
    <>
      <form action={doAuthAction}>
        <button>{label}</button>
      </form>
    </>
  );
}
