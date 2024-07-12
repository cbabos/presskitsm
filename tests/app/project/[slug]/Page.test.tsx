import { tEntity } from '@/app/entity/types';
import ProjectDetails from '@/app/project/[slug]/page';
import data from '@/../tests/mockEntities.json';
import { render, screen } from '@testing-library/react';

describe('Project details', () => {
  it('should render the selected entity as an EntityDetail', () => {
    const rootEntity: tEntity = data[0].children[0];

    render(<ProjectDetails />);
    const entityDetail = screen.getByTestId('projectDetails');
    expect(entityDetail).toBeInTheDocument();

    const entityName = entityDetail.getElementsByTagName('h1');
    expect(entityName.length).toBe(1);
    expect(entityName[0].textContent).toEqual(rootEntity.name);
  });
});
