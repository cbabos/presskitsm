import { isNotFoundError } from "next/dist/client/components/not-found";
import { tEntity } from "./types";
import mockData from '@/../tests/mockEntities.json';

const flattenData = (allEntities: tEntity[]) => {
    const flatten = (entities: tEntity[]): tEntity[] => {
        return entities.reduce((accum: tEntity[], currentEntity: tEntity): tEntity[] => {
            accum.push(currentEntity);
            if (currentEntity.children && currentEntity.children.length > 0) {
                accum = accum.concat(flatten(currentEntity.children));
            }

            return accum;
        }, [] as tEntity[])
    }

    return flatten(allEntities)
}

export function getEntityBy(id: number) {
    const selectedEntity = flattenData(getAllItems()).find((item) => item.id === id);
    if (selectedEntity === undefined) {
        throw new Error(`Entity with id:${id} was not found.`);
    }

    return selectedEntity;
}

export function getAllItems(): tEntity[] {
    return mockData;
}