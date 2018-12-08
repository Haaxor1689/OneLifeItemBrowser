import * as React from 'react';
import ObjectRecordListItemComponent from './ObjectRecordListItemComponent';
import ObjectRecord, { IObjectRecordContainer } from 'src/Models/ObjectRecord';

interface IObjectRecordListComponentProps {
    objectRecord: IObjectRecordContainer;
    onObjectSelected: (objectRecord: ObjectRecord) => void;
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
                    {Object.values(this.props.objectRecord)
                        .sort((lhs, rhs) => lhs.id - rhs.id)
                        .map((objectRecord) => <ObjectRecordListItemComponent onSelected={this.props.onObjectSelected}  objectRecord={objectRecord} />)}
                </tbody>
            </table>
        );
    }
}