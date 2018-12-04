import IObjectRecord, { getEmptyObjectRecord } from 'src/Models/IObjectRecord';
import ISprite, { getEmptySprite } from 'src/Models/ISprite';

export default class ObjectRecordParser {

    public static parse(data: string): IObjectRecord {
        var objectRecord = getEmptyObjectRecord();

        var lines = data.split('\n');
        var line = 0;

        var match;
        match = lines[line].match('id=(.+)');
        if (match !== null) {
            objectRecord.id = parseInt(match[1]);
            ++line;
        }

        match = lines[line].match('(.+)');
        if (match !== null) {
            objectRecord.description = match[1];
            ++line;
        }

        
        match = lines[line].match('numSprites=(.+)');
        while (match === null) {
            ++line;
            match = lines[line].match('numSprites=(.+)');
        }
        ++line;

        for (var i = 0; i < Number(match[1]); ++i) {
            objectRecord.sprites.push(this.parseSprite(lines, line));
        }

        return objectRecord;
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