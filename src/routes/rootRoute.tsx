import EntityDetails from '../components/EntityDetail';
import { getEntityBy } from '../utils/entity_crud';

export default function Root() {
	const rootEntity = getEntityBy(1);

	return (
		<>
			<EntityDetails entity={rootEntity} />
		</>
	);
}
