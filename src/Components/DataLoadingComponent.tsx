import * as React from 'react';

interface IDataLoadingComponent {
    progress: number;
}

export default class DataLoadingComponent extends React.Component<IDataLoadingComponent, {}> {
    public render = () => {
        return (
            <div className="col data-loading">
                <p className="text-center">Loading, please wait...</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar"
                        aria-valuenow={this.props.progress * 100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{flex: this.props.progress}}></div>
                </div>
            </div>
        );
    }
}