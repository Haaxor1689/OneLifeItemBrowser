import * as $ from "jquery";

import IGithubContent from "src/Models/IGithubContent";
import IGithubCommit from "src/Models/IGithubCommit";

export default class GithubAPI {
    private static token = "0e8f5fd4ce70daf7fc67039573f8469d874f6c4a";

    public static getCurrentCommit = async (): Promise<string> => {
        var response: IGithubCommit[] = await $.get("https://api.github.com/repos/jasonrohrer/OneLifeData7/commits?&path=objects");
        return response[0].sha;
    }

    public static getObjectList = async (): Promise<IGithubContent[]> => {
        return $.get("https://api.github.com/repos/jasonrohrer/OneLifeData7/contents/objects");
    }

    public static getObjectCount = async (): Promise<number> => {
        var response = await $.get("https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/objects/nextObjectNumber.txt");
        return parseInt(response);
    }
    
    public static getObject = async (object: IGithubContent): Promise<string> => {
        return $.get(object.download_url);
    }

    public static getObjectById = async (id: number): Promise<string> => {
        return $.get("https://raw.githubusercontent.com/jasonrohrer/OneLifeData7/master/objects/" + id + ".txt");
    }

    private static getSavedCommitContent = async (): Promise<IGithubContent> => {
        var response: IGithubContent[] = await $.get("https://api.github.com/repos/haaxor1689/onelifeitembrowserdata/contents");
        return response.find((item) => item.name === "commit.txt") as IGithubContent;
    }

    public static getSavedCommit = async (): Promise<string> => {
        return $.get((await GithubAPI.getSavedCommitContent()).download_url);
    }

    public static updateSavedCommit = async (commit: string) => {
        $.ajax({
            type: "PUT",
            dataType: "application/json",
            url: "https://api.github.com/repos/haaxor1689/onelifeitembrowserdata/contents/commit.txt",
            headers: { "Authorization": "token " + GithubAPI.token },
            data: JSON.stringify({
                message: "Update commit",
                content: btoa(commit),
                sha: (await GithubAPI.getSavedCommitContent()).sha
            }),
        });
    }


}