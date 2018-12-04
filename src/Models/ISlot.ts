import { cloneDeep } from 'lodash'

import IPosition, { getEmptyPosition } from './IPosition';

export default interface ISlot {
    position: IPosition;

    // should objects be flipped vertically?
    flipped: boolean;
    
    // index of this slot's parent in the sprite list
    // or -1 if this slot doesn't follow the motion of a sprite
    parent: number;
}

const emptySlot: ISlot = {
    position: getEmptyPosition(),
    flipped: false,
    parent: -1,
}

export const getEmptySlot = () => cloneDeep(emptySlot);