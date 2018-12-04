import IPosition, { getEmptyPosition } from './IPosition';
import ISprite from './ISprite';
import ISoundUsage, { getEmptySoundUsage } from './ISoundUsage';
import ISlot from './ISlot';

export interface IObjectRecord {

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
    wide: () => boolean;

    leftBlockingRadius: number;
    rightBlockingRadius: number;

    // true for objects that are forced behind player
    // wide objects have this set to true automatically
    drawBehindPlayer: boolean;

    // for individual sprite indices that are drawn behind
    // when whole object is not drawn behind
    anySpritesBehindPlayer: boolean;
    spritesBehindPlayer: string;

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

    person: () => boolean;
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

    creationSound: ISoundUsage;
    usingSound: ISoundUsage;
    eatingSound: ISoundUsage;
    decaySound: ISoundUsage;

    // true if creation sound should only be triggered
    // on player-caused creation of this object (not automatic,
    // decay-caused creation).
    creationSoundInitialOnly: boolean;

    // true if creation sound should always play, even if other
    // same-trigger sounds are playing
    creationSoundForce: boolean;

    // if it is a container, how many slots?
    // 0 if not a container
    slots: ISlot[];

    // how big of a containable can fit in each slot?
    slotSize: number;

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
    spriteVanishIndexes: number[];

    // sprites that appear with use
    // (example:  wear marks on an axe head)
    spriteAppearIndexes: number[];

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

    apocalypseTrigger: () => boolean;

    monumentStep: () => boolean;
    monumentDone: () => boolean;
    monumentCall: () => boolean;

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

export default class ObjectRecord implements IObjectRecord {
    constructor(data?: IObjectRecord) { data && Object.assign(this, data); };

    id: number = -1;
    description: string = '';
    containable: boolean = false;
    containSize: number = 1;
    vertContainRotationOffset: number = 0;
    permanent: boolean = false;
    noFlip: boolean = false;
    sideAccess: boolean = false;
    minPickupAge: number = 3;
    heldInHand: boolean = false;
    rideable: boolean = false;
    blocksWalking: boolean = false;
    wide = (): boolean => this.leftBlockingRadius > 0 || this.rightBlockingRadius > 0;
    leftBlockingRadius: number = 0;
    rightBlockingRadius: number = 0;
    drawBehindPlayer: boolean = false;
    anySpritesBehindPlayer: boolean = false;
    spritesBehindPlayer: string = '';
    biomes: number[] = [];
    mapChance: number = 0;
    heatValue: number = 0;
    rValue: number = 0;
    person = (): boolean => this.race > 0;
    personNoSpawn: boolean = false;
    male: boolean = false;
    race: number = 0;
    deathMarker: boolean = false;
    homeMarker: boolean = false;
    floor: boolean = false;
    floorHugging: boolean = false;
    foodValue: number = 0;
    speedMult: number = 0;
    heldOffset: IPosition = getEmptyPosition();
    clothing: string = '';
    clothingOffset: IPosition = getEmptyPosition();
    deadlyDistance: number = 0;
    useDistance: number = 0;
    creationSound: ISoundUsage = getEmptySoundUsage();
    usingSound: ISoundUsage = getEmptySoundUsage();
    eatingSound: ISoundUsage = getEmptySoundUsage();
    decaySound: ISoundUsage = getEmptySoundUsage();
    creationSoundInitialOnly: boolean = false;
    creationSoundForce: boolean = false;
    slotSize: number = 1;
    slots: ISlot[] = [];
    slotTimeStretch: number = 1.0;
    slotsLocked: boolean = false;
    sprites: ISprite[] = [];
    mainEyesOffset: IPosition = getEmptyPosition();
    numUses: number = 0;
    useChance: number = 0;
    spriteVanishIndexes: number[] = [-1];
    spriteAppearIndexes: number[] = [-1];
    useDummyIDs: string = '';
    spriteSkipDrawing: string = '';
    isUseDummy: boolean = false;
    useDummyParent: number = 0;
    cachedHeight: number = 0;
    apocalypseTrigger = (): boolean => this.description === 'The Apocalypse';
    monumentStep = (): boolean => this.description.indexOf('monumentStep') !== -1;
    monumentDone = (): boolean => this.description.indexOf('monumentDone') !== -1;
    monumentCall = (): boolean => this.description.indexOf('monumentCall') !== -1;
    numVariableDummyIDs: number = 0;
    variableDummyIDs: string = '';
    isVariableDummy: boolean = false;
    variableDummyParent: number = 0;
    isVariableHidden: boolean = false;
    written: boolean = false;
    writable: boolean = false;
    mayHaveMetadata: boolean = false;
}
