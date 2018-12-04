import { cloneDeep } from 'lodash'

import IPosition, { getEmptyPosition } from './IPosition';
import IColor, { getEmptyColor } from './IColor';

export default interface ISprite {
    id: number;
    position: IPosition;
    rotation: number;
    hFlip: boolean;
    color: IColor;

    // -1,-1 if sprite present whole life
    ageStart: number;
    ageEnd: number;

    // index in this sprite list of sprite that is motion parent of this 
    // sprite, or -1 if this sprite doesn't follow the motion of another
    parent: number;
    
    // for person objects, is this sprite a hand?
    // (the name is left over from older implementations that made the
    //  entire arm disappear when holding something large.  This name
    //  persists in the object data files, so it's best to keep it
    //  matching in the code as well)
    invisibleHeld: boolean;

    // 1 for parts of clothing that disappear when clothing put on
    // 2 for parts of clothing that disappear when clothing taken off
    // all 0 for non-clothing objects
    invisibleWorn: boolean;

    behindSlots: boolean;

    // derrived automatically for person objects from sprite name
    // tags (if they contain Eyes or Mouth)
    // only filled in if sprite bank has been loaded before object bank
    isEyes: boolean;
    isMouth: boolean;
}

const emptySprite: ISprite = {
    id: 0,
    position: getEmptyPosition(),
    rotation: 0,
    hFlip: false,
    color: getEmptyColor(),
    ageStart: -1,
    ageEnd: -1,
    parent: -1,
    invisibleHeld: false,
    invisibleWorn: false,
    behindSlots: false,
    isEyes: false,
    isMouth: false,
}

export const getEmptySprite = () => cloneDeep(emptySprite);
