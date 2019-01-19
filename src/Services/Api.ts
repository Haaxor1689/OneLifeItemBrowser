import $ from "jquery";

import IRecordsResponse from './../Models/IRecordResponse';
import { IObjectRecordContainer } from "../Models/ObjectRecord";

export default class Api {
    private static readonly baseUrl: string = false//location.hostname === "localhost" 
    ? "http://localhost:3000/api/" : "https://onelifeitembrowser.herokuapp.com/api/";

    public static getRecords = async (): Promise<IObjectRecordContainer> => {
        const response = await $.get("https://raw.githubusercontent.com/Haaxor1689/OneLifeItemBrowser/master/data/records.json");
        return JSON.parse(response);
    }

    public static updateRecords = async (): Promise<IRecordsResponse> => {
        return await $.get(Api.baseUrl + "records");
    }
}