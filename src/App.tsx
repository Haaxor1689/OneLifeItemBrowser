import * as React from 'react';

import IObjectRecord from './Models/IObjectRecord';
import ObjectRecordListComponent from './Components/ObjectRecordListComponent';
import DataLoadingComponent from './Components/DataLoadingComponent';
import NavbarComponent from './Components/NavbarComponent';
import PageControlComponent from './Components/PageControlComponent';
import DataManagerService from './Services/DataManagerService';
import IObjectMetadata from './Models/IObjectMetadata';

interface IAppState {
    objectMetadata: IObjectMetadata[];
    objectRecords: IObjectRecord[];

    filter: string;
    filteredCount: number;

    itemsPerPage: number;
    currentPage: number;

    loadingProgress: number;
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        objectMetadata: [],
        objectRecords: [],
        filter: "",
        filteredCount: 0,
        itemsPerPage: 25,
        currentPage: 0,
        loadingProgress: 0,
    };

    constructor(props: {}) {
        super(props);
        this.initialize();
    }

    private initialize = async () => {
        var objectMetadata = await DataManagerService.initializeAndUpdate(this.onLoadingProgress)
        this.setState((prevState) => ({
            ...prevState,
            objectMetadata
        }));
    }

    private getFilteredObjects = (): IObjectMetadata[] => this.state.objectMetadata
            .filter((object) => App.stringContains(object.description, this.state.filter))
            .slice(this.state.currentPage * this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage + this.state.itemsPerPage);

    private isLoading = (): boolean => this.state.objectMetadata.length === 0;

    private static stringContains = (source: string, substr: string): boolean => source.toLowerCase().indexOf(substr.toLowerCase()) >= 0;

    private onSearchSubmit = (filter: string) => {
        this.setState((prevState) => ({
            ...prevState,
            filter,
            filteredCount: prevState.objectMetadata.filter((object) => App.stringContains(object.description, filter)).length,
            currentPage: 0
        }));
    }

    private onChangePage = (newPage: number) => {
        this.setState((prevState) => ({
            ...prevState,
            currentPage: newPage
        }));
    }

    private onLoadingProgress = (progress: number) => {
        this.setState((prevState) => ({
            ...prevState,
            loadingProgress: progress
        }));
    }

    private onObjectSelected = (objectMetadata: IObjectMetadata) => {
        console.log("Clicked object " + objectMetadata);
    }

    public render() {
        return (
            <div>
                <NavbarComponent onSearch={this.onSearchSubmit}/>
                <main role="main">
                    <div className="container">
                        <div className="row">
                            { this.isLoading()
                                ? <DataLoadingComponent progress={this.state.loadingProgress} /> 
                                : <ObjectRecordListComponent objectMetadata={this.getFilteredObjects()} onObjectSelected={this.onObjectSelected} /> }
                        </div>
                        <div className="row">
                            { !this.isLoading() && 
                                <PageControlComponent 
                                    currentPage={this.state.currentPage} 
                                    pageCount={Math.ceil(this.state.filteredCount / this.state.itemsPerPage) - 1}
                                    changePage={this.onChangePage} /> }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
