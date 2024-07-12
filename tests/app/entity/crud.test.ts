import mockData from '@/../tests/mockEntities.json';
import { getAllItems, getEntityBy } from '@/app/entity/crud';

describe('crud', () => {
  it('should return all available data', () => {
    const result = getAllItems();

    expect(result).toStrictEqual(mockData);
  });

  it('should return the second child of the root entity', () => {
    const result = getEntityBy(3);

    expect(result).toStrictEqual(mockData[0].children[1]);
  });

  it('should throw an error when an item is not found', () => {
    const caller = () => {
      return getEntityBy(666);
    };

    expect(caller).toThrow(Error);
  });
});
