import { auth } from '@/auth';
import EntityDetail from '@/components/entityDetail';

// @todo Using EntityDetail render the root Entity.
export default async function Home() {
  const session = await auth();

  return (
    <>
      <div>
        <pre>{JSON.stringify(session)}</pre>

      </div>
      <div data-testid="homePage">
        <EntityDetail id={1} />
      </div>
    </>
  );
}
