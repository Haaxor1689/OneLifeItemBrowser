import * as React from 'react';

import ObjectRecord from 'src/Models/ObjectRecord';
import KeyValueComponent from './KeyValueComponent';
import SpriteRendererService from 'src/Services/SpriteRendererService';
import SpriteInfoComponent from './SpriteInfoComponent';


interface IObjectRecordComponentProps {
    objectRecord: ObjectRecord;
    close: () => void;
}

export default class ObjectRecordComponent extends React.Component<IObjectRecordComponentProps, {}> {
    componentDidMount() {
        SpriteRendererService.render(this.props.objectRecord.sprites, "#" + this.mainCanvasId());
    }

    private mainCanvasId = (): string => this.props.objectRecord.id.toString();

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-8">
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
                    <div className="col-md-5 col-lg-4">
                        <div className="sprite-preview border rounded">
                            <canvas id={this.mainCanvasId()} className="sprite" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>All sprites:</h3>
                    </div>
                </div>
                <div className="row">
                    {this.props.objectRecord.sprites.map((sprite) => <SpriteInfoComponent {...sprite} />)}
                </div>
            </div>
        );
    }
}