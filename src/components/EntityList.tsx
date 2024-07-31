import { tEntity } from '../types/entity.types';
import EntityListItem from './EntityListItem';

export default function EntityList({ entities, limit = 2 } : { limit: number, entities : tEntity[] }) {
	return (
		<>
			<div className="entityList">
				{ entities && entities.slice(0, limit).map( entity => <EntityListItem entity={entity} key={`${entity.name}-listitem`} /> ) }
			</div>
		</>
	);
}
