import IObjectRecord, { getEmptyObjectRecord } from 'src/Models/IObjectRecord';
import ISprite, { getEmptySprite } from 'src/Models/ISprite';

export default class ObjectRecordParser {

    public static parse(data: string): IObjectRecord {
        var record = getEmptyObjectRecord();

        var lines = data.split('\n');
        var i = 0;

        var match;
        match = lines[i].match('id=(.+)');
        if (match !== null) {
            record.id = parseInt(match[1]);
            ++i;
        }

        match = lines[i].match('(.+)');
        if (match !== null) {
            record.description = match[1];
            ++i;
        }

        match = lines[i].match('containable=(.+)');
        if (match !== null) {
            record.containable = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('containSize=(.+),vertSlotRot=(.+)');
        if (match !== null) {
            record.containSize = parseFloat(match[1]);
            record.vertContainRotationOffset = parseFloat(match[2]);
            ++i;
        }

        match = lines[i].match('permanent=(.+),minPickupAge=(.+)');
        if (match !== null) {
            record.permanent = parseInt(match[1]) === 1;
            record.minPickupAge = parseInt(match[2]);
            ++i;
        }

        match = lines[i].match('noFlip=(.+)');
        if (match !== null) {
            record.noFlip = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('sideAccess=(.+)');
        if (match !== null) {
            record.sideAccess = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('heldInHand=(.+)');
        if (match !== null) {
            var value = parseInt(match[1]);
            record.heldInHand = value === 1;
            record.rideable = value === 2;
            ++i;
        }

        match = lines[i].match('blocksWalking=(.+)');
        if (match !== null) {
            record.blocksWalking = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('leftBlockingRadius=(.+),rightBlockingRadius=(.+)');
        if (match !== null) {
            record.leftBlockingRadius = parseInt(match[1]);
            record.rightBlockingRadius = parseInt(match[2]);
            record.wide = record.leftBlockingRadius > 0 || record.rightBlockingRadius > 0;
            ++i;
        }

        match = lines[i].match('drawBehindPlayer=(.+)');
        if (match !== null) {
            record.drawBehindPlayer = record.wide || parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('mapChance=(.+)(?:#biomes_(.+))?');
        if (match !== null) {
            record.mapChance = parseFloat(match[1]);
            record.biomes = match.length === 3
                ? match[2].split(',').map((val) => parseInt(val)) 
                : [0];
            ++i;
        }

        match = lines[i].match('heatValue=(.+)');
        if (match !== null) {
            record.heatValue = parseInt(match[1]);
            ++i;
        }

        match = lines[i].match('rValue=(.+)');
        if (match !== null) {
            record.rValue = parseFloat(match[1]);
            ++i;
        }

        match = lines[i].match('person=(.+),noSpawn=(.+)');
        if (match !== null) {
            record.race = parseInt(match[1]);
            record.person = record.race > 0;
            record.personNoSpawn = parseInt(match[2]) === 1;
            ++i;
        }

        match = lines[i].match('male=(.+)');
        if (match !== null) {
            record.male = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('deathMarker=(.+)');
        if (match !== null) {
            record.deathMarker = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('homeMarker=(.+)');
        if (match !== null) {
            record.homeMarker = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('floor=(.+)');
        if (match !== null) {
            record.floor = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('floorHugging=(.+)');
        if (match !== null) {
            record.floorHugging = parseInt(match[1]) === 1;
            ++i;
        }

        match = lines[i].match('foodValue=(.+)');
        if (match !== null) {
            record.foodValue = parseInt(match[1]);
            ++i;
        }

        match = lines[i].match('speedMult=(.+)');
        if (match !== null) {
            record.speedMult = parseFloat(match[1]);
            ++i;
        }

        match = lines[i].match('heldOffset=(.+),(.+)');
        if (match !== null) {
            record.heldOffset = { 
                x: parseFloat(match[1]),
                y: parseFloat(match[2])
            };
            ++i;
        }

        match = lines[i].match('clothing=(.+)');
        if (match !== null) {
            record.clothing = match[1];
            ++i;
        }

        match = lines[i].match('clothingOffset=(.+),(.+)');
        if (match !== null) {
            record.clothingOffset = { 
                x: parseFloat(match[1]),
                y: parseFloat(match[2])
            };
            ++i;
        }

        match = lines[i].match('deadlyDistance=(.+)');
        if (match !== null) {
            record.deadlyDistance = parseInt(match[1]);
            ++i;
        }

        match = lines[i].match('useDistance=(.+)');
        if (match !== null) {
            record.useDistance = parseInt(match[1]);
            ++i;
        }
        
        match = lines[i].match('numSprites=(.+)');
        while (match === null) {
            ++i;
            match = lines[i].match('numSprites=(.+)');
        }
        ++i;

        for (var i = 0; i < Number(match[1]); ++i) {
            record.sprites.push(this.parseSprite(lines, i));
        }

        return record;
    }

    private static parseSprite(lines: string[], line: number): ISprite {
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

        return sprite;
    }
}