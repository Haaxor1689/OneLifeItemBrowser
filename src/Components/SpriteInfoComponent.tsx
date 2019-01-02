import * as React from 'react';

import KeyValueComponent from './KeyValueComponent';
import Sprite from 'src/Models/Sprite';


export default class SpriteInfoComponent extends React.Component<Sprite, {}> {

    public render() {
        return (
            <div className="col-6 col-md-4 col-lg-3 sprite-info">
                <div className="sprite-info-preview border rounded">
                    <canvas id={this.props.id.toString()} className="sprite" />
                </div>
                <KeyValueComponent keyStr="Id" value={this.props.id} />
                <KeyValueComponent keyStr="Parent" value={this.props.parent} />
                <KeyValueComponent keyStr="Pos" value={this.props.position} />
            </div>
        );
    }
}