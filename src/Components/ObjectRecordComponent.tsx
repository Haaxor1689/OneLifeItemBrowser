import * as $ from 'jquery';
import * as React from 'react';

import ObjectRecord from 'src/Models/ObjectRecord';
import Sprite from 'src/Models/Sprite';
import KeyValueComponent from './KeyValueComponent';

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
                    <div className="col-md-10">
                        <div className="row">
                            <button type="button" className="btn btn-link" onClick={this.props.close}>&lt; Back to listing</button>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>{this.props.objectRecord.description}</h2>
                                <KeyValueComponent keyStr="Id" value={this.props.objectRecord.id} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src="https://via.placeholder.com/120"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>All sprites:</h3>
                        {this.props.objectRecord.sprites.map((sprite) => <canvas id={this.props.objectRecord.id + "_" + sprite.id}/>)}
                    </div>
                </div>
            </div>
        );
    }
}