import { tEntity } from '@/app/entity/types';
import Home from '@/app/page';
import data from '../mockEntities.json';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
  it('should render the root entity as an EntityDetail', () => {
    const rootEntity: tEntity = data[0];

    render(<Home />);
    const entityDetail = screen.getByTestId('homePage');
    expect(entityDetail).toBeInTheDocument();

    const entityName = entityDetail.getElementsByTagName('h1');
    expect(entityName.length).toBe(1);
    expect(entityName[0].textContent).toEqual(rootEntity.name);
  });
});
