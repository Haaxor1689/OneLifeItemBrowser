import * as $ from 'jquery';

import Sprite from 'src/Models/Sprite';
import Position from 'src/Models/Position';

var tgaLib = require("../Lib/tga");

interface SpriteInfo {
    sprite: Sprite;
    canvas: HTMLCanvasElement;
}

export default class SpriteRendererService {
    private static imgUrl: string = "https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/sprites/";

    public static render = async (sprites: Sprite[], canvasId: string) => {
        if (sprites.length === 0) {
            return;
        }
        
        const canvas = $(canvasId).get()[0] as HTMLCanvasElement;
        canvas.width = 250;
        canvas.height = 500;

        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        var spritePromises = [];
        for (var i = 0; i < sprites.length; ++i) {
            spritePromises.push(SpriteRendererService.getCanvas(sprites[i]));
        }

        const spriteCanvases = await Promise.all(spritePromises);
        const spriteInfos = spriteCanvases.map((canvas, index): SpriteInfo => ({ sprite: sprites[index], canvas}));
        console.log(spriteInfos);
        for (var i = 0; i < sprites.length; ++i) {
            SpriteRendererService.addSprite(i, spriteInfos, context);
        }
    }

    private static getCanvas = async (sprite: Sprite): Promise<HTMLCanvasElement> => {
        return await new Promise<HTMLCanvasElement>((resolve, reject) => {
            var tga: any = new tgaLib.TGA();
            tga.open(SpriteRendererService.imgUrl + sprite.id + ".tga", () => {
                resolve(tga.getCanvas($("#" + sprite.id).get()[0]));
            });
        })
        .catch(err => {throw err});
    };

    private static addSprite = async (index: number, sprites: SpriteInfo[], context: CanvasRenderingContext2D) => {
        const { x, y } = SpriteRendererService.getPosition(sprites[index]);
        context.drawImage(sprites[index].canvas, 125 + x, 400 - y);
    }

    private static getPosition = (sprite: SpriteInfo): Position => {
        return {
            x: sprite.sprite.position.x - sprite.canvas.width / 2,
            y: sprite.sprite.position.y + sprite.canvas.height / 2,
        }
    }
}