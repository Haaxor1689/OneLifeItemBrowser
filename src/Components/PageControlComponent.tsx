import * as React from 'react';

interface IPageControlComponent {
    currentPage: number;
    pageCount: number;
    changePage: (newPage: number) => void;
}

export default class PageControlComponent extends React.Component<IPageControlComponent, {}> {
    public render = () => {
        return (
            <div className="col text-center">
                <ul className="pagination">
                    <li className={"page-item" + (this.props.currentPage <= 0 ? " disabled" : "") }>
                        <a className="page-link" aria-label="Previous" onClick={() => this.props.changePage(this.props.currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">Page {this.props.currentPage} of {this.props.pageCount}</span>
                    </li>
                    <li className={"page-item" + (this.props.currentPage >= this.props.pageCount ? " disabled" : "") }>
                        <a className="page-link" aria-label="Next" onClick={() => this.props.changePage(this.props.currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}