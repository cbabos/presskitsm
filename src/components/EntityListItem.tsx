import { Link } from 'react-router-dom';
import { tEntity } from '../types/entity.types';

export default function EntityListItem({ entity } : { entity: tEntity }) { 
	return (
		<>
		<div className="entityListItem">
			<header>
				<img src={entity.logo} alt={`logo of ${entity.name}`} />
				<strong data-testid="list-item-name">{entity.name}</strong>
			</header>
			<p>{entity.description}</p>
			<Link to={`/details/${entity.id}`}>Check out more</Link> 
		</div>
		</>
	);

}
