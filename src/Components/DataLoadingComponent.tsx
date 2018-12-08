import * as React from 'react';
import IProgressInfo from 'src/Models/IProgressInfo';

interface IDataLoadingComponent {
    progress: IProgressInfo;
}

export default class DataLoadingComponent extends React.Component<IDataLoadingComponent, {}> {
    public render = () => {
        return (
            <div className="col data-loading">
                <p className="text-center">{this.props.progress.message}</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar"
                        aria-valuenow={this.props.progress.percent * 100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{flex: this.props.progress.percent}}></div>
                </div>
            </div>
        );
    }
}