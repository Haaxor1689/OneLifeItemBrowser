import * as React from 'react';
import IObjectRecord from 'src/Models/IObjectRecord';
import ObjectRecordListItemComponent from './ObjectRecordListItemComponent';

interface IObjectRecordListComponentProps {
    objectRecords: IObjectRecord[];
    onObjectSelected: (objectRecord: IObjectRecord) => void;
}

export default class ObjectRecordListComponent extends React.Component<IObjectRecordListComponentProps, {}> {
    public render = () => {
        return (
            <table className="table table-striped table-dark table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Traits</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.objectRecords
                        .sort((lhs, rhs) => lhs.id - rhs.id)
                        .map((objectRecord) => <ObjectRecordListItemComponent onSelected={this.props.onObjectSelected}  objectRecord={objectRecord} />)}
                </tbody>
            </table>
        );
    }
}