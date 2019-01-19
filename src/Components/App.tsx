import * as React from 'react';
import { Container, Row } from 'reactstrap';

import ObjectRecord, { IObjectRecordContainer } from '../Models/ObjectRecord';
import RecordListComponent from './RecordListComponent';
import DataLoadingComponent from './DataLoadingComponent';
import NavbarComponent from './NavbarComponent';
import PageControlComponent from './PageControlComponent';
import DataManagerService from '../Services/DataManagerService';
import IProgressInfo from '../Models/IProgressInfo';
import ObjectRecordComponent from './ObjectRecordComponent';

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
        }));
    }

    private getFilteredObjects = (): ObjectRecord[] => Object.values(this.state.objectRecords)
            .filter((object) => App.stringContains(object.description, this.state.filter))
            .slice(this.state.currentPage * this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage + this.state.itemsPerPage);

    private showLoading = (): boolean => this.state.progress !== undefined;

    private showPageControll = (): boolean => Object.keys(this.state.objectRecords).length > this.state.itemsPerPage;

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

    private onObjectSelected = (objectRecord: ObjectRecord) => {
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

    public render = (): JSX.Element => (
        <div>
            <NavbarComponent onSearch={this.onSearchSubmit}/>
            <main role="main">
                <Container>
                    <Row>
                        { this.showLoading() &&
                            <DataLoadingComponent progress={this.state.progress!} /> }
                    </Row>
                </Container>
                { !this.state.selectedRecord 
                ?
                    <Container>
                        <Row>
                            <RecordListComponent objectRecord={this.getFilteredObjects()} onObjectSelected={this.onObjectSelected} />
                        </Row>
                        <Row>
                            { this.showPageControll() &&
                                <PageControlComponent 
                                    currentPage={this.state.currentPage} 
                                    pageCount={Math.ceil(this.state.filteredCount / this.state.itemsPerPage) - 1}
                                    changePage={this.onChangePage} /> }
                        </Row>
                    </Container>
                :
                    <ObjectRecordComponent objectRecord={this.state.objectRecords[this.state.selectedRecord]} close={this.onObjectClosed} />
                }
            </main>
        </div>
    );
}
