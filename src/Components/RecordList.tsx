import * as React from 'react';
import { Table, Row } from 'reactstrap';

import ObjectRecord, { IObjectRecordContainer } from './../Models/ObjectRecord';
import RecordListItem from './RecordListItem';

interface IObjectRecordListComponentProps {
    objectRecord: IObjectRecordContainer;
    onObjectSelected: (objectRecord: ObjectRecord) => void;
}

export default class RecordList extends React.Component<IObjectRecordListComponentProps> {
    public render = (): JSX.Element => (
        <Row>
            <Table striped dark hover>
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Traits</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(this.props.objectRecord)
                        .sort((lhs, rhs) => lhs.id - rhs.id)
                        .map((objectRecord) => <RecordListItem key={objectRecord.id} onSelected={this.props.onObjectSelected}  objectRecord={objectRecord} />)}
                </tbody>
            </Table>
        </Row>
    );
}