import ObjectRecord, { IObjectRecord } from 'src/Models/IObjectRecord';
import ISprite, { getEmptySprite } from 'src/Models/ISprite';
import { getEmptySlot } from 'src/Models/ISlot';

export default class ObjectRecordParser {

    public static parse(data: string): IObjectRecord {
        var record = new ObjectRecord();

        var lines = data.split('\n');
        var lineCount = lines.length;
        var line = 0;

        var match;
        match = lines[line].match('id=(.+)');
        if (match !== null) {
            record.id = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('(.+)');
        if (match !== null) {
            record.description = match[1];
            ++line;
        }

        match = lines[line].match('containable=(.+)');
        if (match !== null) {
            record.containable = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('containSize=(.+),vertSlotRot=(.+)');
        if (match !== null) {
            record.containSize = parseFloat(match[1]);
            record.vertContainRotationOffset = parseFloat(match[2]);
            ++line;
        }

        match = lines[line].match('permanent=(.+),minPickupAge=(.+)');
        if (match !== null) {
            record.permanent = parseInt(match[1]) === 1;
            record.minPickupAge = parseInt(match[2]);
            ++line;
        }

        match = lines[line].match('noFlip=(.+)');
        if (match !== null) {
            record.noFlip = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('sideAccess=(.+)');
        if (match !== null) {
            record.sideAccess = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('heldInHand=(.+)');
        if (match !== null) {
            var value = parseInt(match[1]);
            record.heldInHand = value === 1;
            record.rideable = value === 2;
            ++line;
        }

        match = lines[line].match('blocksWalking=(.+),leftBlockingRadius=(.+),rightBlockingRadius=(.+),drawBehindPlayer=(.+)');
        if (match !== null) {
            record.blocksWalking = parseInt(match[1]) === 1;
            record.leftBlockingRadius = parseInt(match[2]);
            record.rightBlockingRadius = parseInt(match[3]);
            record.drawBehindPlayer = record.wide() || parseInt(match[4]) === 1;
            ++line;
        }

        match = lines[line].match('mapChance=([^#]+)(?:#biomes_(.+))?');
        if (match !== null) {
            record.mapChance = parseFloat(match[1]);
            record.biomes = match.length === 3
                ? match[2].split(',').map((val) => parseInt(val)) 
                : [0];
            ++line;
        }

        match = lines[line].match('heatValue=(.+)');
        if (match !== null) {
            record.heatValue = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('rValue=(.+)');
        if (match !== null) {
            record.rValue = parseFloat(match[1]);
            ++line;
        }

        match = lines[line].match('person=(.+),noSpawn=(.+)');
        if (match !== null) {
            record.race = parseInt(match[1]);
            record.personNoSpawn = parseInt(match[2]) === 1;
            ++line;
        }

        match = lines[line].match('male=(.+)');
        if (match !== null) {
            record.male = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('deathMarker=(.+)');
        if (match !== null) {
            record.deathMarker = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('homeMarker=(.+)');
        if (match !== null) {
            record.homeMarker = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('floor=(.+)');
        if (match !== null) {
            record.floor = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('floorHugging=(.+)');
        if (match !== null) {
            record.floorHugging = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('foodValue=(.+)');
        if (match !== null) {
            record.foodValue = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('speedMult=(.+)');
        if (match !== null) {
            record.speedMult = parseFloat(match[1]);
            ++line;
        }

        match = lines[line].match('heldOffset=(.+),(.+)');
        if (match !== null) {
            record.heldOffset = { 
                x: parseFloat(match[1]),
                y: parseFloat(match[2])
            };
            ++line;
        }

        match = lines[line].match('clothing=(.+)');
        if (match !== null) {
            record.clothing = match[1];
            ++line;
        }

        match = lines[line].match('clothingOffset=(.+),(.+)');
        if (match !== null) {
            record.clothingOffset = { 
                x: parseFloat(match[1]),
                y: parseFloat(match[2])
            };
            ++line;
        }

        match = lines[line].match('deadlyDistance=(.+)');
        if (match !== null) {
            record.deadlyDistance = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('useDistance=(.+)');
        if (match !== null) {
            record.useDistance = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('sounds=(.+):(.+),(.+):(.+),(.+):(.+),(.+):(.+)');
        if (match !== null) {
            record.creationSound = { id: parseInt(match[1]), volume: parseFloat(match[2]) };
            record.usingSound = { id: parseInt(match[3]), volume: parseFloat(match[4]) };
            record.eatingSound = { id: parseInt(match[5]), volume: parseFloat(match[6]) };
            record.decaySound = { id: parseInt(match[7]), volume: parseFloat(match[8]) };
            ++line;
        }

        match = lines[line].match('creationSoundInitialOnly=(.+)');
        if (match !== null) {
            record.creationSoundInitialOnly = parseInt(match[1]) === 1;
            ++line;
        }

        match = lines[line].match('creationSoundForce=(.+)');
        if (match !== null) {
            record.creationSoundForce = parseInt(match[1]) === 1;
            ++line;
        }

        var numSlots = 0;
        match = lines[line].match('numSlots=([^#]+)(?:#timeStretch=(.+))?');
        if (match !== null) {
            numSlots = parseInt(match[1]);
            record.slotTimeStretch = match.length === 3
                ? parseFloat(match[2]) 
                : 1.0;
            ++line;
        }

        match = lines[line].match('slotSize=(.+)');
        if (match !== null) {
            record.slotSize = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('slotsLocked=(.+)');
        if (match !== null) {
            record.slotsLocked = parseInt(match[1]) === 1;
            ++line;
        }

        for (var i = 0; i < numSlots; ++i) {
            var slot = getEmptySlot();
            match = lines[line].match('slotPos=(.+),(.+),vert=(.+),parent=(.+)');
            if (match !== null) {
                slot.position = {
                    x: parseFloat(match[1]),
                    y: parseFloat(match[2]),
                };
                slot.flipped = parseInt(match[3]) === 1;
                slot.parent = parseInt(match[4]);
            }
            record.slots.push(slot);
            ++line;
        }

        var numSprites = 0;
        match = lines[line].match('numSprites=(.+)');
        if (match !== null) {
            numSprites = parseInt(match[1]);
            ++line;
        }

        for (var i = 0; i < numSprites; ++i) {
            var ret = this.parseSprite(lines, line)
            record.sprites.push(ret.sprite);
            line = ret.line
        }

        // Skip head/body/foot indexes
        line += 4;
        
        match = lines[line].match('numUses=([^,]+)(?:,(.+))?');
        if (match !== null) {
            record.numUses = parseInt(match[1]);
            record.useChance = match[2] && parseFloat(match[2]) || 0;
            ++line;
        }
        
        match = lines[line].match('useVanishIndex=(.+)');
        if (match !== null) {
            record.spriteVanishIndexes = match[1].split(',').map((s) => parseInt(s));
            ++line;
        }
        
        match = lines[line].match('useAppearIndex=(.+)');
        if (match !== null) {
            record.spriteAppearIndexes = match[1].split(',').map((s) => parseInt(s));
            ++line;
        }
        
        match = lines[line].match('pixHeight=(.+)');
        if (match !== null) {
            record.cachedHeight = parseInt(match[1]);
            ++line;
        }

        console.log(record);
        if (line > lineCount) {
            throw "Line count doesn`t match up.";
        }

        return record;
    }

    private static parseSprite(lines: string[], line: number): { sprite: ISprite, line: number } {
        var sprite = getEmptySprite();
        
        var match;
        match = lines[line].match('spriteID=(.+)');
        if (match !== null) {
            sprite.id = parseInt(match[1]);
            ++line;
        }
        
        match = lines[line].match('pos=(.+),(.+)');
        if (match !== null) {
            sprite.position = { 
                x: parseFloat(match[1]),
                y: parseFloat(match[2])
            };
            ++line;
        }

        match = lines[line].match('rot=(.+)');
        if (match !== null) {
            sprite.rotation = parseFloat(match[1]);
            ++line;
        }

        match = lines[line].match('rot=(.+)');
        if (match !== null) {
            sprite.rotation = parseInt(match[1]);
            ++line;
        }
        
        match = lines[line].match('hFlip=(.+)');
        if (match !== null) {
            sprite.hFlip = parseInt(match[1]) === 1;
            ++line;
        }
        
        match = lines[line].match('color=(.+),(.+),(.+)');
        if (match !== null) {
            sprite.color = { 
                r: parseFloat(match[1]),
                g: parseFloat(match[2]),
                b: parseFloat(match[3])
            };
            ++line;
        }
        
        match = lines[line].match('ageRange=(.+),(.+)');
        if (match !== null) {
            sprite.ageStart = parseFloat(match[1]);
            sprite.ageEnd = parseFloat(match[2]);
            ++line;
        }
        
        match = lines[line].match('parent=(.+)');
        if (match !== null) {
            sprite.parent = parseInt(match[1]);
            ++line;
        }
        
        match = lines[line].match('invisHolding=(.+),invisWorn=(.+),behindSlots=(.+)');
        if (match !== null) {
            sprite.invisibleHeld = parseInt(match[1]) === 1;
            sprite.invisibleWorn = parseInt(match[2]) === 1;
            sprite.behindSlots = parseInt(match[3]) === 1;
            ++line;
        }

        return { sprite, line };
    }
}