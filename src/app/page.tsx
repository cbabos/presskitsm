import EntityDetail from '@/components/entityDetail';

// @todo Using EntityDetail render the root Entity.
export default function Home() {

  return (
    <>
      <div data-testid="homePage">
        <EntityDetail id={1} />
      </div>
    </>
  );
}
