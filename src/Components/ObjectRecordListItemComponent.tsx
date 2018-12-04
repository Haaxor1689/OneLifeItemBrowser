import * as React from 'react';
import IObjectRecord from 'src/Models/IObjectRecord';

interface IObjectRecordListItemComponentProps {
    objectRecord: IObjectRecord,
    onSelected: (objectRecord: IObjectRecord) => void;
}

export default class ObjectRecordListItemComponent extends React.Component<IObjectRecordListItemComponentProps, {}> {
    public render = () => {
        return (
            <tr onClick={() => this.props.onSelected(this.props.objectRecord)}>
                <th scope="row">{this.props.objectRecord.id}</th>
                <td>{this.props.objectRecord.description}</td>
                <td>{this.props.objectRecord.containable ? this.props.objectRecord.containSize : "\u221e"}</td>
                <td>Placeholder actions</td>
            </tr>
        );
    }
}