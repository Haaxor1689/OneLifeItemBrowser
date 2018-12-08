import Sprite from './Sprite';
import Slot from './Slot';
import Position from './Position';
import SoundUsage from './SoundUsage';

export interface IObjectRecordContainer {
    [id: number]: ObjectRecord;
}

export default class ObjectRecord {
    id: number = -1;

    description: string = '';

    // can it go into a container
    containable: boolean = false;

    // how big of a slot is needed to contain it
    containSize: number = 1;

    // by default, when placed in a vertical container slot,
    // objects rotate 90 deg clockwise
    // this is an offset from that angle (default 0)
    vertContainRotationOffset: number = 0;

    // can it not be picked up
    permanent: boolean = false;

    // true if this object should never be drawn flipped
    // (objects that have text on them, for example)
    // Note that some permanent objects are never drawn flipped 
    // automatically (those that block walking or are drawn behind player)
    noFlip: boolean = false;

    // for objects that can only be accessed from the east and west
    // (no actions triggered from north or south)
    sideAccess: boolean = false;

    // age you have to be to to pick something up
    minPickupAge: number = 3;

    // true for smaller objects that have heldOffsets relative to
    // front, moving hand
    // non-handheld objects held relative to body
    heldInHand: boolean = false;

    // true for huge objects that are ridden when held (horses, cars, etc.)
    // held offset is not relative to any body part, but relative to
    // ground under body
    // note that objects cannot be BOTH heldInHand and rideable
    // (rideable overrides heldInHand)
    rideable: boolean = false;

    // true for objects that cannot be walked through
    blocksWalking: boolean = false;

    // true if sticks out and blocks on left or right of center tile
    wide = (): boolean => this.leftBlockingRadius > 0 || this.rightBlockingRadius > 0;

    leftBlockingRadius: number = 0;
    rightBlockingRadius: number = 0;

    // true for objects that are forced behind player
    // wide objects have this set to true automatically
    drawBehindPlayer: boolean = false;

    // for individual sprite indices that are drawn behind
    // when whole object is not drawn behind
    anySpritesBehindPlayer: boolean = false;
    spritesBehindPlayer: string = '';

    // biome numbers where this object will naturally occur according
    // to mapChance below
    biomes: number[] = [];

    // chance of occurrence naturally on map
    // value between 0 and 1 inclusive
    // Note that there's an overall chance-of-anything that is applied
    // first (controls density of map), so even if an object's value is
    // 1, it will not appear everywhere.
    // Furthermore, this value is a weight that is a fraction of the
    // total sum weight of all objects.
    mapChance: number = 0;

    heatValue: number = 0;

    // between 0 and 1, how much heat is transmitted
    rValue: number = 0;

    person = (): boolean => this.race > 0;

    // true if this person should never spawn
    // (a person for testing, a template, etc.)
    personNoSpawn: boolean = false;

    male: boolean = false;

    // if a person, what race number?  1, 2, 3, ....
    // 0 if not a person
    race: number = 0;

    // true if this object can be placed by server to mark a death
    deathMarker: boolean = false;

    // true if this object can serve as a home marker
    // (remembered by client when a player makes it, and client points
    //  HOME arrow back toward it).
    homeMarker: boolean = false;

    // floor objects are drawn under everything else
    // and can have other objects in the same cell
    floor: boolean = false;

    // for vertical walls, neighboring floors auto-extended to meet them
    floorHugging: boolean = false;

    foodValue: number = 0;

    // multiplier on walking speed when holding
    speedMult: number = 0;

    // how far to move object off center when held
    // (for right-facing hold)
    // if 0, held dead center on person center
    heldOffset: Position = new Position();

    // n = not wearable
    // s = shoe
    // t = tunic
    // h = hat
    // b = bottom
    // p = backpack
    clothing: string = '';

    // offset of clothing from it's default location
    // (hats is slightly above head, shoes is centered on feet,
    //  tunics is centered on body)
    clothingOffset: Position = new Position();

    // how many cells away this object can kill
    // 0 for non-deadly objects
    deadlyDistance: number = 0;

    // for non-deadly uses of this object, how far away can it reach?
    // (example:  lasso an animal, but has no effect on a person)
    useDistance: number = 0;

    creationSound: SoundUsage = new SoundUsage();
    usingSound: SoundUsage = new SoundUsage();
    eatingSound: SoundUsage = new SoundUsage();
    decaySound: SoundUsage = new SoundUsage();

    // true if creation sound should only be triggered
    // on player-caused creation of this object (not automatic,
    // decay-caused creation).
    creationSoundInitialOnly: boolean = false;

    // true if creation sound should always play, even if other
    // same-trigger sounds are playing
    creationSoundForce: boolean = false;

    slotSize: number = 1;

    // if it is a container, how many slots?
    // 0 if not a container
    slots: Slot[] = [];

    // does being contained in one of this object's slots
    // adjust the passage of decay time?
    // 1.0 means normal time rate
    // > 1.0 means decay time passes faster
    // < 1.0 means longer decay times
    // must be larger than 0.0001
    slotTimeStretch: number = 1.0;

    // true if nothing can be added/removed from container
    slotsLocked: boolean = false;

    sprites: Sprite[] = [];

    // offset of eyes from head in main segment of life
    // derrived automatically from whatever eyes are visible at age 30
    // (old eyes may have wrinkles around them, so they end up
    //  getting centered differently)
    // only filled in if sprite bank has been loaded before object bank
    mainEyesOffset: Position = new Position();

    // number of times this object can be used before
    // something different happens
    numUses: number = 0;

    // chance that using this object will make the use count
    // decrement.  1.0 means it always decrements.
    useChance: number = 0;

    // flags for sprites that vanish with additional
    // use of this object
    // (example:  berries getting picked)
    spriteVanishIndexes: number[] = [ -1 ];

    // sprites that appear with use
    // (example:  wear marks on an axe head)
    spriteAppearIndexes: number[] = [ -1 ];

    // NULL unless we are auto-populating use dummy objects
    // then contains ( numUses - 1 ) ids for auto-generated dummy objects
    // with dummy_1 at index 0, dummy_2 at index 1, etc.
    useDummyIDs: string = '';

    // flags to manipulate which sprites of an object should be drawn
    // not saved to disk.  Defaults to all false for an object.
    spriteSkipDrawing: string = '';

    // dummy objects should not be left permanently in map database
    // because they can become invalid after a data update
    isUseDummy: boolean = false;

    useDummyParent: number = 0;

    // -1 if not set
    // used to avoid recomputing height repeatedly at client/server runtime
    cachedHeight: number = 0;

    apocalypseTrigger = (): boolean => this.description === 'The Apocalypse';

    monumentStep = (): boolean => this.description.indexOf('monumentStep') !== -1;
    monumentDone = (): boolean => this.description.indexOf('monumentDone') !== -1;
    monumentCall = (): boolean => this.description.indexOf('monumentCall') !== -1;

    // NULL unless we are auto-populating variable objects
    // then contains ( N ) ids for auto-generated variable dummy objects
    // with dummy_1 at index 0, dummy_2 at index 1, etc.
    numVariableDummyIDs: number = 0;
    variableDummyIDs: string = '';

    isVariableDummy: boolean = false;
    variableDummyParent: number = 0;

    isVariableHidden: boolean = false;

    // flags derived from various &flags in object description
    written: boolean = false;
    writable: boolean = false;

    mayHaveMetadata: boolean = false;
}
