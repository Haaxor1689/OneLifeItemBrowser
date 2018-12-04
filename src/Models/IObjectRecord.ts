import { cloneDeep } from 'lodash'

import IPosition, { getEmptyPosition } from './IPosition';
import ISprite from './ISprite';

export default interface IObjectRecord {

    id: number;

    description: string;

    // can it go into a container
    containable: boolean;
    // how big of a slot is needed to contain it
    containSize: number;

    // by default, when placed in a vertical container slot,
    // objects rotate 90 deg clockwise
    // this is an offset from that angle (default 0)
    vertContainRotationOffset: number;


    // can it not be picked up
    permanent: boolean;

    // true if this object should never be drawn flipped
    // (objects that have text on them, for example)
    // Note that some permanent objects are never drawn flipped 
    // automatically (those that block walking or are drawn behind player)
    noFlip: boolean;

    // for objects that can only be accessed from the east and west
    // (no actions triggered from north or south)
    sideAccess: boolean;


    // age you have to be to to pick something up
    minPickupAge: number;


    // true for smaller objects that have heldOffsets relative to
    // front, moving hand
    // non-handheld objects held relative to body
    heldInHand: boolean;

    // true for huge objects that are ridden when held (horses, cars, etc.)
    // held offset is not relative to any body part, but relative to
    // ground under body
    // note that objects cannot be BOTH heldInHand and rideable
    // (rideable overrides heldInHand)
    rideable: boolean;



    // true for objects that cannot be walked through
    blocksWalking: boolean;

    // true if sticks out and blocks on left or right of center tile
    wide: boolean;

    leftBlockingRadius: number;
    rightBlockingRadius: number;


    // true for objects that are forced behind player
    // wide objects have this set to true automatically
    drawBehindPlayer: boolean;

    // for individual sprite indices that are drawn behind
    // when whole object is not drawn behind
    anySpritesBehindPlayer: boolean;
    spriteBehindPlayer: string;

    // biome numbers where this object will naturally occur according
    // to mapChance below
    biomes: number[];


    // chance of occurrence naturally on map
    // value between 0 and 1 inclusive
    // Note that there's an overall chance-of-anything that is applied
    // first (controls density of map), so even if an object's value is
    // 1, it will not appear everywhere.
    // Furthermore, this value is a weight that is a fraction of the
    // total sum weight of all objects.
    mapChance: number;

    heatValue: number;

    // between 0 and 1, how much heat is transmitted
    rValue: number;

    person: boolean;
    // true if this person should never spawn
    // (a person for testing, a template, etc.)
    personNoSpawn: boolean;

    male: boolean;

    // if a person, what race number?  1, 2, 3, ....
    // 0 if not a person
    race: number;

    // true if this object can be placed by server to mark a death
    deathMarker: boolean;

    // true if this object can serve as a home marker
    // (remembered by client when a player makes it, and client points
    //  HOME arrow back toward it).
    homeMarker: boolean;


    // floor objects are drawn under everything else
    // and can have other objects in the same cell
    floor: boolean;

    // for vertical walls, neighboring floors auto-extended to meet
    // them
    floorHugging: boolean;


    foodValue: number;

    // multiplier on walking speed when holding
    speedMult: number;

    // how far to move object off center when held
    // (for right-facing hold)
    // if 0, held dead center on person center
    heldOffset: IPosition;

    // n = not wearable
    // s = shoe
    // t = tunic
    // h = hat
    // b = bottom
    // p = backpack
    clothing: string;

    // offset of clothing from it's default location
    // (hats is slightly above head, shoes is centered on feet,
    //  tunics is centered on body)
    clothingOffset: IPosition;

    // how many cells away this object can kill
    // 0 for non-deadly objects
    deadlyDistance: number;

    // for non-deadly uses of this object, how far away can it reach?
    // (example:  lasso an animal, but has no effect on a person)
    useDistance: number;


    // SoundUsage creationSound;
    // SoundUsage usingSound;
    // SoundUsage eatingSound;
    // SoundUsage decaySound;

    // true if creation sound should only be triggered
    // on player-caused creation of this object (not automatic,
    // decay-caused creation).
    creationSoundInitialOnly: boolean;

    // true if creation sound should always play, even if other
    // same-trigger sounds are playing
    creationSoundForce: boolean;


    // if it is a container, how many slots?
    // 0 if not a container
    numSlots: number;

    // how big of a containable can fit in each slot?
    slotSize: number;

    slotPos: IPosition;

    // should objects be flipped vertically?
    slotVert: string;

    // index of this slot's parent in the sprite list
    // or -1 if this slot doesn't follow the motion of a sprite
    slotParent: string;


    // does being contained in one of this object's slots
    // adjust the passage of decay time?
    // 1.0 means normal time rate
    // > 1.0 means decay time passes faster
    // < 1.0 means longer decay times
    // must be larger than 0.0001
    slotTimeStretch: number;

    // true if nothing can be added/removed from container
    slotsLocked: boolean;

    sprites: ISprite[];

    // offset of eyes from head in main segment of life
    // derrived automatically from whatever eyes are visible at age 30
    // (old eyes may have wrinkles around them, so they end up
    //  getting centered differently)
    // only filled in if sprite bank has been loaded before object bank
    mainEyesOffset: IPosition;



    // number of times this object can be used before
    // something different happens
    numUses: number;

    // chance that using this object will make the use count
    // decrement.  1.0 means it always decrements.
    useChance: number;

    // flags for sprites that vanish with additional
    // use of this object
    // (example:  berries getting picked)
    spriteUseVanish: string;

    // sprites that appear with use
    // (example:  wear marks on an axe head)
    spriteUseAppear: string;


    // NULL unless we are auto-populating use dummy objects
    // then contains ( numUses - 1 ) ids for auto-generated dummy objects
    // with dummy_1 at index 0, dummy_2 at index 1, etc.
    useDummyIDs: string;

    // flags to manipulate which sprites of an object should be drawn
    // not saved to disk.  Defaults to all false for an object.
    spriteSkipDrawing: string;

    // dummy objects should not be left permanently in map database
    // because they can become invalid after a data update
    isUseDummy: boolean;

    useDummyParent: number;

    // -1 if not set
    // used to avoid recomputing height repeatedly at client/server runtime
    cachedHeight: number;

    apocalypseTrigger: boolean;

    monumentStep: boolean;
    monumentDone: boolean;
    monumentCall: boolean;



    // NULL unless we are auto-populating variable objects
    // then contains ( N ) ids for auto-generated variable dummy objects
    // with dummy_1 at index 0, dummy_2 at index 1, etc.
    numVariableDummyIDs: number;
    variableDummyIDs: string;

    isVariableDummy: boolean;
    variableDummyParent: number;

    isVariableHidden: boolean;


    // flags derived from various &flags in object description
    written: boolean;
    writable: boolean;

    mayHaveMetadata: boolean;
}

const emptyObjectRecord: IObjectRecord = {
    id: -1,
    description: "",
    containable: false,
    containSize: 1,
    vertContainRotationOffset: 0,
    permanent: false,
    noFlip: false,
    sideAccess: false,
    minPickupAge: 3,
    heldInHand: false,
    rideable: false,
    blocksWalking: false,
    wide: false,
    leftBlockingRadius: 0,
    rightBlockingRadius: 0,
    drawBehindPlayer: false,
    anySpritesBehindPlayer: false,
    spriteBehindPlayer: '',
    biomes: [],
    mapChance: 0,
    heatValue: 0,
    rValue: 0,
    person: false,
    personNoSpawn: false,
    male: false,
    race: 0,
    deathMarker: false,
    homeMarker: false,
    floor: false,
    floorHugging: false,
    foodValue: 0,
    speedMult: 0,
    heldOffset: getEmptyPosition(),
    clothing: '',
    clothingOffset: getEmptyPosition(),
    deadlyDistance: 0,
    useDistance: 0,
    creationSoundInitialOnly: false,
    creationSoundForce: false,
    numSlots: 0,
    slotSize: 0,
    slotPos: getEmptyPosition(),
    slotVert: '',
    slotParent: '',
    slotTimeStretch: 0,
    slotsLocked: false,
    sprites: [],
    mainEyesOffset: getEmptyPosition(),
    numUses: 0,
    useChance: 0,
    spriteUseVanish: '',
    spriteUseAppear: '',
    useDummyIDs: '',
    spriteSkipDrawing: '',
    isUseDummy: false,
    useDummyParent: 0,
    cachedHeight: 0,
    apocalypseTrigger: false,
    monumentStep: false,
    monumentDone: false,
    monumentCall: false,
    numVariableDummyIDs: 0,
    variableDummyIDs: '',
    isVariableDummy: false,
    variableDummyParent: 0,
    isVariableHidden: false,
    written: false,
    writable: false,
    mayHaveMetadata: false,
}

export const getEmptyObjectRecord = () => cloneDeep(emptyObjectRecord);
