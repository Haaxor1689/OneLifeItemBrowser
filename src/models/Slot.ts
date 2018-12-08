import Position from './Position';

export default class Slot {
    position: Position = new Position();

    // should objects be flipped vertically?
    flipped: boolean = false;
    
    // index of this slot's parent in the sprite list
    // or -1 if this slot doesn't follow the motion of a sprite
    parent: number = -1;
}
