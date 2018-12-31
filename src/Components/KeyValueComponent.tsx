import * as React from 'react';

interface IKeyValueComponentProps {
    keyStr: string;
    value: any;
}

export default class KeyValueComponent extends React.Component<IKeyValueComponentProps, {}> {
    public render() {
        return (
            <div>
                <span className="font-weight-bold key-str">
                    {this.props.keyStr}:
                </span>
                <span>
                    {this.props.value}
                </span>
            </div>
        );
    }
}