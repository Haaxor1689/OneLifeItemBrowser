import * as React from 'react';
import { Col, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

export interface IPageControlProps {
    currentPage: number;
    pageCount: number;
    changePage: (newPage: number) => void;
}

export default class PageControl extends React.Component<IPageControlProps> {

    private isFirstPage = (): boolean => this.props.currentPage === 0;
    private isSecondPage = (): boolean => this.props.currentPage === 1;
    private isLastPage = (): boolean => this.props.currentPage === this.props.pageCount - 1;
    private isSecondLastPage = (): boolean => this.props.currentPage === this.props.pageCount - 2;

    private getMiddleNumber = (): number => this.isFirstPage() || this.isSecondPage() 
        ? 2 
        : this.isLastPage() || this.isSecondLastPage() 
            ? this.props.pageCount - 3 
            : this.props.currentPage;

    private renderPage = (page: number): JSX.Element | null => page < this.props.pageCount ? (
        <PaginationItem active={page === this.props.currentPage}>
            <PaginationLink onClick={() => this.props.changePage(page)}>{page + 1}</PaginationLink>
        </PaginationItem>
    ) : null;

    private renderDots = (): JSX.Element => (
        <PaginationItem disabled>
            <PaginationLink>...</PaginationLink>
        </PaginationItem>
    )

    public render = (): JSX.Element => (
        <Row className="justify-content-center">
            <Col xs="auto">
                <Pagination className="page-control">
                    <PaginationItem disabled={this.isFirstPage()}>
                        <PaginationLink previous onClick={() => this.props.changePage(this.props.currentPage - 1)} />
                    </PaginationItem>
                    { this.props.currentPage > 2 && this.renderPage(0) }
                    { this.props.currentPage > 3 && this.renderPage(1) }
                    { this.props.currentPage > 3 && this.renderDots() }
                    { this.renderPage(this.getMiddleNumber() - 2) }
                    { this.renderPage(this.getMiddleNumber() - 1) }
                    { this.renderPage(this.getMiddleNumber()) }
                    { this.renderPage(this.getMiddleNumber() + 1) }
                    { this.renderPage(this.getMiddleNumber() + 2) }
                    { this.props.currentPage < this.props.pageCount - 4 && this.renderDots() }
                    { this.props.currentPage < this.props.pageCount - 4 && this.renderPage(this.props.pageCount - 2) }
                    { this.props.currentPage < this.props.pageCount - 3 && this.renderPage(this.props.pageCount - 1) }
                    <PaginationItem disabled={this.isLastPage()}>
                        <PaginationLink next onClick={() => this.props.changePage(this.props.currentPage + 1)} />
                    </PaginationItem>
                </Pagination>
            </Col>
        </Row>
    );
}