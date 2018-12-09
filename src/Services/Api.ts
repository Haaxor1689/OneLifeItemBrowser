import * as $ from "jquery";

import IRecordsResponse from 'src/Models/IRecordResponse';

export default class Api {
    private static readonly baseUrl: string = "http://localhost:3000/api/";

    public static getRecords = async (): Promise<IRecordsResponse> => {
        return await $.get(Api.baseUrl + "records");
    }
}