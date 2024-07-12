import EntityDetail from '@/components/entityDetail';

export default function ProjectDetails() {
  const entityId = 2;

  return (
    <>
      <div data-testid="projectDetails">
        <EntityDetail id={entityId} />
      </div>
    </>
  );
}
