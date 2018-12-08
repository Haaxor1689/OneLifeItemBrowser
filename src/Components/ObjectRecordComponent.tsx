import * as $ from 'jquery';
import * as React from 'react';

import IObjectRecord from 'src/Models/ObjectRecord';
import ISprite from 'src/Models/Sprite';

var tgaLib = require("../Lib/tga");
const imgUrl = "https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/sprites/";

export default class ObjectRecordComponent extends React.Component<IObjectRecord, {}> {
    constructor(props: IObjectRecord) {
        super(props);
        this.props.sprites.map(this.downloadSprite)
    }

    private downloadSprite = async (sprite: ISprite) => {
        var tga: any = new tgaLib.TGA();
        tga.open(imgUrl + sprite.id + ".tga", () => {
            $("#" + this.props.id + "_" + sprite.id).replaceWith(tga.getCanvas());
        });
    };

    public render() {
        return (
            <div className="row">
                <div className="col">
                    <h2>{this.props.description}</h2>
                </div>
                <div className="w-100"></div>
                <div className="col-md-10">
                    <p>{this.props.id}</p>
                </div>
                <div className="col">
                    {this.props.sprites.map((sprite) => <canvas id={this.props.id + "_" + sprite.id}/>)}
                </div>
            </div>
        );
    }
}