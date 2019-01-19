import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAppleAlt, faTshirt, faHorse, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

import ObjectRecord from './../Models/ObjectRecord';

interface IObjectRecordListItemComponentProps {
    objectRecord: ObjectRecord,
    onSelected: (objectRecord: ObjectRecord) => void;
}

export default class RecordListItem extends React.Component<IObjectRecordListItemComponentProps> {
    private getClass = (active: boolean): string => `trait-icon trait-icon-${active ? "active" : "inactive"}`;

    public render = () => {
        library.add(faAppleAlt, faTshirt, faHorse, faWeightHanging);
        return (
            <tr onClick={() => this.props.onSelected(this.props.objectRecord)}>
                <th scope="row">{this.props.objectRecord.id}</th>
                <td>{this.props.objectRecord.description}</td>
                <td>{this.props.objectRecord.containable ? String(this.props.objectRecord.containSize) : "\u221e"}</td>
                <td>
                    <FontAwesomeIcon icon="apple-alt" title="Edible" size="2x" className={this.getClass(this.props.objectRecord.foodValue > 0)} />
                    <FontAwesomeIcon icon="tshirt" title="Equipable" size="2x" className={this.getClass(this.props.objectRecord.clothing !== 'n')} />
                    <FontAwesomeIcon icon="horse" title="Rideable" size="2x" className={this.getClass(this.props.objectRecord.rideable)} />
                    <FontAwesomeIcon icon="weight-hanging" title="Permanent" size="2x" className={this.getClass(this.props.objectRecord.permanent)} />
                </td>
            </tr>
        );
    }
}