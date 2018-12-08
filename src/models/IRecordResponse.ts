import { IObjectRecordContainer } from "./ObjectRecord";

export interface IRecordResponse {
    outdated: false;
    records: IObjectRecordContainer;
}

export interface IUpdateResponse {
    outdated: true;
    progress: number;
    progressMessage: string;
}