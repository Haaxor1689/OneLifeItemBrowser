import * as React from 'react';
import { Col, Alert, Progress, Container, Row } from 'reactstrap';

import IProgressInfo from 'src/Models/IProgressInfo';

interface IDataLoadingComponent {
    progress: IProgressInfo;
}

export default class DataLoading extends React.Component<IDataLoadingComponent> {
    private bgColor = (): string => this.props.progress.percent < 0 ? "danger" : "info";

    private getProgress = (): number => (this.props.progress.percent < 0 ? 1 : this.props.progress.percent) * 100;

    public render = (): JSX.Element => (
        <Container>
            <Row>
                <Col className="data-loading">
                    <Alert color={this.bgColor()}>
                        <p>{this.props.progress.message}</p>
                        <Progress value={this.getProgress()} color={this.bgColor()} striped animated />
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}