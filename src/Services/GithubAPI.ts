import * as $ from "jquery";

import IGithubContent from "src/Models/IGithubContent";
import IGithubCommit from "src/Models/IGithubCommit";
import IObjectMetadata from 'src/Models/IObjectMetadata';

export default class GithubAPI {
    private static dataRepositoryContent: IGithubContent[] = [];

    public static getCurrentCommit = async (): Promise<string> => {
        var response: IGithubCommit[] = await $.get("https://api.github.com/repos/jasonrohrer/OneLifeData7/commits?&path=objects");
        return response[0].sha;
    }
}