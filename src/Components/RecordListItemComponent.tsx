import * as React from 'react';
import ObjectRecord from 'src/Models/ObjectRecord';

interface IObjectRecordListItemComponentProps {
    objectRecord: ObjectRecord,
    onSelected: (objectRecord: ObjectRecord) => void;
}

export default class RecordListItemComponent extends React.Component<IObjectRecordListItemComponentProps, {}> {
    public render = () => {
        return (
            <tr onClick={() => this.props.onSelected(this.props.objectRecord)}>
                <th scope="row">{this.props.objectRecord.id}</th>
                <td>{this.props.objectRecord.description}</td>
                <td>{this.props.objectRecord.displaySize()}</td>
                <td>
                    {this.props.objectRecord.isEdible() && <span className="glyphicon glyphicon-apple"></span>}
                    {this.props.objectRecord.isClothing() && <span className="glyphicon glyphicon-sunglasses"></span>}
                    {this.props.objectRecord.rideable && <span className="glyphicon glyphicon-plane"></span>}
                    {this.props.objectRecord.permanent && <span className="glyphicon glyphicon-tower"></span>}
                </td>
                <td>Placeholder actions</td>
            </tr>
        );
    }
}