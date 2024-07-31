import { getEntityBy } from '../utils/entity_crud';


export async function loader({ params }: { params: { project: string; }; }) {
    if (!params.project.match(/\d+/)) {
        throw new Response('', { status: 400 });
    }
    return { project: getEntityBy(parseInt(params.project)) };
}

