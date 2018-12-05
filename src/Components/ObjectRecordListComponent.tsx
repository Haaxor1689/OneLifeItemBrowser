import * as React from 'react';
import ObjectRecordListItemComponent from './ObjectRecordListItemComponent';
import IObjectMetadata from 'src/Models/IObjectMetadata';

interface IObjectRecordListComponentProps {
    objectMetadata: IObjectMetadata[];
    onObjectSelected: (objectRecord: IObjectMetadata) => void;
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
                    {this.props.objectMetadata
                        .sort((lhs, rhs) => lhs.id - rhs.id)
                        .map((objectMetadata) => <ObjectRecordListItemComponent onSelected={this.props.onObjectSelected}  objectMetadata={objectMetadata} />)}
                </tbody>
            </table>
        );
    }
}