import GithubAPI from './GithubAPI';
import ObjectRecordParser from './ObjectRecordParser';
import IObjectRecord from 'src/Models/IObjectRecord';

export default class DataManagerService {
    public static initializeAndUpdate = async (): Promise<boolean> => {
        var current: string = await GithubAPI.getCurrentCommit();
        var saved: string = await GithubAPI.getSavedCommit();

        if (current === saved) {
            return false;
        }
        
        GithubAPI.updateSavedCommit(current);
        return true;
    }

    public static loadObjects = async (onProgress: (percentage: number) => void) => {
        var objectRecords: IObjectRecord[] = [];
        var count = await GithubAPI.getObjectCount();

        for (var i = 0; i < count; ++i) {
            await GithubAPI.getObjectById(i)
                .then((response) => objectRecords.push(ObjectRecordParser.parse(response)))
                .catch(() => --count);
            onProgress(objectRecords.length / count);
            if (objectRecords.length === count) {
                return;
            }
        }
    }
}