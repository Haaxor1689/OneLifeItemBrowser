import * as $ from "jquery";

import IGithubContent from "src/Models/IGithubContent";
import IGithubCommit from "src/Models/IGithubCommit";
import IObjectMetadata from 'src/Models/IObjectMetadata';

export default class GithubAPI {
    private static token = "0e8f5fd4ce70daf7fc67039573f8469d874f6c4a";
    private static dataRepositoryContent: IGithubContent[] = [];

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

    private static getSavedRepositoryContent = async (): Promise<IGithubContent[]> => {
        return $.get("https://api.github.com/repos/haaxor1689/onelifeitembrowserdata/contents");
    }

    private static getSavedCommitContent = async (): Promise<IGithubContent> => {
        if (GithubAPI.dataRepositoryContent.length === 0) {
            GithubAPI.dataRepositoryContent = await GithubAPI.getSavedRepositoryContent();
        }
        return GithubAPI.dataRepositoryContent.find((item) => item.name === "commit.txt") as IGithubContent;
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

    private static getSavedMetadataContent = async (): Promise<IGithubContent> => {
        if (GithubAPI.dataRepositoryContent.length === 0) {
            GithubAPI.dataRepositoryContent = await GithubAPI.getSavedRepositoryContent();
        }
        return GithubAPI.dataRepositoryContent.find((item) => item.name === "objectMetadata.json") as IGithubContent;
    }

    public static getSavedMetadata = async (): Promise<IObjectMetadata[]> => {
        var response = await $.get((await GithubAPI.getSavedMetadataContent()).download_url);
        return JSON.parse(response);
    }

    public static updateSavedMetadata = async (data: IObjectMetadata[]) => {
        $.ajax({
            type: "PUT",
            dataType: "application/json",
            url: "https://api.github.com/repos/haaxor1689/onelifeitembrowserdata/contents/objectMetadata.json",
            headers: { "Authorization": "token " + GithubAPI.token },
            data: JSON.stringify({
                message: "Update metadata",
                content: btoa(JSON.stringify(data)),
                sha: (await GithubAPI.getSavedMetadataContent()).sha
            }),
        });
    }
}