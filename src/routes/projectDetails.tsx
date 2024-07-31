import { Link, useLoaderData } from 'react-router-dom';
import EntityDetails from '../components/EntityDetail';
import { tEntity } from '../types/entity.types';

export default function ProjectDetails() {
	const { project: entity } = useLoaderData() as { project: tEntity } ; 

	return (
		<>
		<EntityDetails entity={entity} />
		<Link to={'/'}>Back</Link>
		</>
	);
}
