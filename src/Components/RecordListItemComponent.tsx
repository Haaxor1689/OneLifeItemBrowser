import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAppleAlt, faTshirt, faHorse, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

import ObjectRecord from 'src/Models/ObjectRecord';

interface IObjectRecordListItemComponentProps {
    objectRecord: ObjectRecord,
    onSelected: (objectRecord: ObjectRecord) => void;
}

export default class RecordListItemComponent extends React.Component<IObjectRecordListItemComponentProps, {}> {
    public render = () => {
        library.add(faAppleAlt, faTshirt, faHorse, faWeightHanging);
        return (
            <tr onClick={() => this.props.onSelected(this.props.objectRecord)}>
                <th scope="row">{this.props.objectRecord.id}</th>
                <td>{this.props.objectRecord.description}</td>
                <td>{this.props.objectRecord.containable ? String(this.props.objectRecord.containSize) : "\u221e"}</td>
                <td>
                    <i className="trait-icon" title="Edible">
                        <FontAwesomeIcon icon="apple-alt" className={this.props.objectRecord.foodValue > 0 ? "text-light" : "text-muted"}/>
                    </i>
                    <i className="trait-icon" title="Equipable">
                    <FontAwesomeIcon icon="tshirt" className={this.props.objectRecord.clothing !== 'n' ? "text-light" : "text-muted"}/>
                    </i>
                    <i className="trait-icon" title="Rideable">
                    <FontAwesomeIcon icon="horse" className={this.props.objectRecord.rideable ? "text-light" : "text-muted"}/>
                    </i>
                    <i className="trait-icon" title="Permanent">
                    <FontAwesomeIcon icon="weight-hanging" className={this.props.objectRecord.permanent ? "text-light" : "text-muted"}/>
                    </i>
                </td>
            </tr>
        );
    }
}