import * as $ from 'jquery';
import * as React from 'react';

import ObjectRecord from 'src/Models/ObjectRecord';
import Sprite from 'src/Models/Sprite';

var tgaLib = require("../Lib/tga");
const imgUrl = "https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/sprites/";

interface IObjectRecordComponentProps {
    objectRecord: ObjectRecord;
    close: () => void;
}

export default class ObjectRecordComponent extends React.Component<IObjectRecordComponentProps, {}> {
    constructor(props: IObjectRecordComponentProps) {
        super(props);
        this.props.objectRecord.sprites.map(this.downloadSprite)
    }

    private downloadSprite = async (sprite: Sprite) => {
        var tga: any = new tgaLib.TGA();
        tga.open(imgUrl + sprite.id + ".tga", () => {
            $("#" + this.props.objectRecord.id + "_" + sprite.id).replaceWith(tga.getCanvas());
        });
    };

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{this.props.objectRecord.description}</h2>
                    </div>
                    <div className="w-100"></div>
                    <button type="button" className="btn btn-outline-dark" onClick={this.props.close}>Close</button>
                    <div className="col-md-10">
                        <p>{this.props.objectRecord.id}</p>
                    </div>
                </div>
                <div className="row">
                    <h3>Sprites:</h3>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.objectRecord.sprites.map((sprite) => <canvas id={this.props.objectRecord.id + "_" + sprite.id}/>)}
                    </div>
                </div>
            </div>
        );
    }
}