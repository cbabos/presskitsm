import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import EntityDetail from '../../src/components/EntityDetail';

import { getEntityBy } from '../../src/utils/entity_crud';

test('It should render the title and the intro of the entity', () => {
	const testEntry = getEntityBy(2); 

	render(<EntityDetail entity={testEntry} />);

	const name = screen.getByTestId('entity-name');
	expect(name.textContent).toEqual(testEntry.name);

	const description = screen.getByTestId('entity-description');
	expect(description.textContent).toEqual(testEntry.description);
});
