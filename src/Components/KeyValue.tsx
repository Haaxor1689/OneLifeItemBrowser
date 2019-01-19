import * as React from 'react';

interface IKeyValueComponentProps {
    keyStr: string;
    value: any;
}

export default class KeyValue extends React.Component<IKeyValueComponentProps> {
    public render = (): JSX.Element => (
        <div>
            <span className="font-weight-bold key-str">
                {this.props.keyStr}:
            </span>
            <span>
                {JSON.stringify(this.props.value)}
            </span>
        </div>
    );
}