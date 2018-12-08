import Position from './Position';
import Color from './Color';

export default class Sprite {
    id: number = 0;
    position: Position = new Position();
    rotation: number =  0;
    hFlip: boolean =  false;
    color: Color = new Color();
    
    // -1,-1 if sprite present whole life
    ageStart: number = -1;
    ageEnd: number = -1;

    // index in this sprite list of sprite that is motion parent of this 
    // sprite, or -1 if this sprite doesn't follow the motion of another
    parent: number = -1;
    
    // for person objects, is this sprite a hand?
    // (the name is left over from older implementations that made the
    //  entire arm disappear when holding something large.  This name
    //  persists in the object data files, so it's best to keep it
    //  matching in the code as well)
    invisibleHeld: boolean = false;

    // 1 for parts of clothing that disappear when clothing put on
    // 2 for parts of clothing that disappear when clothing taken off
    // all 0 for non-clothing objects
    invisibleWorn: boolean = false;

    behindSlots: boolean = false;

    // derrived automatically for person objects from sprite name
    // tags (if they contain Eyes or Mouth)
    // only filled in if sprite bank has been loaded before object bank
    isEyes: boolean = false;
    isMouth: boolean = false;
}
