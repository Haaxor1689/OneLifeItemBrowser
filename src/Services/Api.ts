import * as $ from "jquery";

import IGithubCommit from "src/Models/IGithubCommit";
import IRecordsResponse from 'src/Models/IRecordResponse';

export default class Api {
    private static readonly baseUrl: string = "http://localhost:3000/api/";

    public static getCurrentCommit = async (): Promise<string> => {
        var response: IGithubCommit[] = await $.get("https://api.github.com/repos/jasonrohrer/OneLifeData7/commits?&path=objects");
        return response[0].sha;
    }

    public static getRecords = async (): Promise<IRecordsResponse> => {
        return await $.get(Api.baseUrl + "records");
    }
}