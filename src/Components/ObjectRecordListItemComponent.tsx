import * as React from 'react';
import IObjectMetadata from 'src/Models/IObjectMetadata';

interface IObjectRecordListItemComponentProps {
    objectMetadata: IObjectMetadata,
    onSelected: (objectMetadata: IObjectMetadata) => void;
}

export default class ObjectRecordListItemComponent extends React.Component<IObjectRecordListItemComponentProps, {}> {
    public render = () => {
        return (
            <tr onClick={() => this.props.onSelected(this.props.objectMetadata)}>
                <th scope="row">{this.props.objectMetadata.id}</th>
                <td>{this.props.objectMetadata.description}</td>
                {/* <td>{this.props.objectMetadata.containable ? this.props.objectMetadata.containSize : "\u221e"}</td> */}
                <td>Placeholder actions</td>
            </tr>
        );
    }
}