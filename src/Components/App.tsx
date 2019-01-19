import * as React from 'react';
import { Container } from 'reactstrap';

import RecordList from './RecordList';
import DataLoading from './DataLoading';
import NavbarComponent from './NavbarComponent';
import PageControl, { IPageControlProps } from './PageControl';
import DataManagerService from '../Services/DataManagerService';
import IProgressInfo from '../Models/IProgressInfo';
import ObjectRecord from './ObjectRecord';

import ObjectRecordModel, { IObjectRecordContainer } from '../Models/ObjectRecord';

interface IAppState {
    objectRecords: IObjectRecordContainer;

    selectedRecord?: number;

    filter: string;
    filteredCount: number;

    itemsPerPage: number;
    currentPage: number;

    progress?: IProgressInfo;
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        objectRecords: {},
        selectedRecord: undefined,
        filter: "",
        filteredCount: 0,
        itemsPerPage: 25,
        currentPage: 0,
    };

    componentDidMount = async () => {
        const objectRecords = await DataManagerService.initialize(this.onLoadingProgress, this.onLoadingDone);
        this.setState((prevState) => ({
            ...prevState,
            objectRecords,
            filteredCount: Object.keys(objectRecords).length,
        }));
    }

    private getFilteredObjects = (): ObjectRecordModel[] => Object.values(this.state.objectRecords)
            .filter((object) => App.stringContains(object.description, this.state.filter))
            .slice(this.state.currentPage * this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage + this.state.itemsPerPage);

    private getPageControlProps = (): IPageControlProps => ({
        currentPage: this.state.currentPage,
        pageCount: Math.ceil(this.state.filteredCount / this.state.itemsPerPage) - 1,
        changePage: this.onChangePage,
    });

    private showLoading = (): boolean => this.state.progress !== undefined;

    private static stringContains = (source: string, substr: string): boolean => source.toLowerCase().indexOf(substr.toLowerCase()) >= 0;

    private onSearchSubmit = (filter: string) => {
        this.setState((prevState) => ({
            ...prevState,
            filter,
            filteredCount: Object.values(prevState.objectRecords).filter((object) => App.stringContains(object.description, filter)).length,
        }));
    }

    private onChangePage = (newPage: number) => {
        this.setState((prevState) => ({
            ...prevState,
            currentPage: newPage,
        }));
    }

    private onLoadingProgress = (progress?: IProgressInfo) => {
        this.setState((prevState) => ({
            ...prevState,
            progress,
        }));
    }

    private onLoadingDone = (objectRecords: IObjectRecordContainer) => {
        this.setState((prevState) => ({
            ...prevState,
            objectRecords,
            filteredCount: Object.keys(objectRecords).length,
        }));
    }

    private onObjectSelected = (objectRecord: ObjectRecordModel) => {
        this.setState((prevState) => ({
            ...prevState,
            selectedRecord: objectRecord.id,
        }));
    }

    private onObjectClosed = () => {
        this.setState((prevState) => ({
            ...prevState,
            selectedRecord: undefined,
        }));
    }

    private renderTabel = (): JSX.Element => (
        <Container>
            <RecordList objectRecord={this.getFilteredObjects()} onObjectSelected={this.onObjectSelected} />
            { this.state.filteredCount > this.state.itemsPerPage && <PageControl { ...this.getPageControlProps() } /> }
        </Container>
    )

    private renderObjectRecord = (): JSX.Element => (
        <ObjectRecord objectRecord={this.state.objectRecords[this.state.selectedRecord!]} close={this.onObjectClosed} />
    )

    public render = (): JSX.Element => (
        <div>
            <NavbarComponent onSearch={this.onSearchSubmit}/>
            <main role="main">
                { this.showLoading() && <DataLoading progress={this.state.progress!} /> }
                { this.state.selectedRecord ? this.renderObjectRecord() : this.renderTabel() }
            </main>
        </div>
    );
}
