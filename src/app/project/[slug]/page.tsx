import EntityDetail from '@/components/entityDetail'

export default function ProjectDetails({
    params,
}: {
    params: { slug: string }
}) {
    const entityId = 2

    return (
        <>
            <EntityDetail id={entityId} />
        </>
    )
}
