import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import KeyValue from './KeyValue';

import SpriteRendererService from 'src/Services/SpriteRendererService';

import ObjectRecordModel from 'src/Models/ObjectRecord';
import Sprite from 'src/Models/Sprite';


interface IObjectRecordComponentProps {
    objectRecord: ObjectRecordModel;
    close: () => void;
}

export default class ObjectRecord extends React.Component<IObjectRecordComponentProps> {
    componentDidMount() {
        SpriteRendererService.render(this.props.objectRecord.sprites, "#" + this.mainCanvasId());
    }

    private mainCanvasId = (): string => this.props.objectRecord.id.toString();

    private renderSpriteInfo = (sprite: Sprite): JSX.Element => (
        <Col xs="6" md="4" lg="3" className="col-6 sprite-info">
            <div className="sprite-info-preview">
                <canvas id={sprite.toString()} className="sprite" />
            </div>
            <KeyValue keyStr="Id" value={sprite.id} />
            <KeyValue keyStr="Parent" value={sprite.parent} />
            <KeyValue keyStr="Pos" value={sprite.position} />
        </Col>
    );

    public render = (): JSX.Element => (
        <Container>
            <Row>
                <Col md="7" lg="8">
                    <Row>
                        <Button color="link" onClick={this.props.close}>&lt; Back to listing</Button>
                    </Row>
                    <Row>
                        <Col>
                            <h2>{this.props.objectRecord.description}</h2>
                            <KeyValue keyStr="Id" value={this.props.objectRecord.id} />
                        </Col>
                    </Row>
                </Col>
                <Col md="5" lg="4">
                    <div className="sprite-preview">
                        <canvas id={this.mainCanvasId()} className="sprite" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>All sprites:</h3>
                </Col>
            </Row>
            <Row>
                {this.props.objectRecord.sprites.map(this.renderSpriteInfo)}
            </Row>
        </Container>
    );
}