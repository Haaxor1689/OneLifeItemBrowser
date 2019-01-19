import $ from "jquery";

import IRecordsResponse from './../Models/IRecordResponse';

export default class Api {
    private static readonly baseUrl: string = false//location.hostname === "localhost" 
    ? "http://localhost:3000/api/" : "https://onelifeitembrowser.herokuapp.com/api/";

    public static getRecords = async (): Promise<IRecordsResponse> => {
        return await $.get(Api.baseUrl + "records");
    }
}