import mockData from '../mocks/entityMocks.json'; 
import { getAllItems, getEntityBy } from '../../src/utils/entity_crud';
import { describe, expect, it } from 'vitest';

describe('crud', () => {
  it('should return all available data', () => {
    const result = getAllItems();

    expect(result).toStrictEqual(mockData);
  });

  it('should return the second child of the root entity', () => {
    const result = getEntityBy(4);

    expect(result).toStrictEqual(mockData[0].children[2]);
  });

  it('should throw an error when an item is not found', () => {
    const caller = () => {
      return getEntityBy(666);
    };

    expect(caller).toThrow(Error);
  });
});
