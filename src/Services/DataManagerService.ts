import GithubAPI from './GithubAPI';
import ObjectRecordParser from './ObjectRecordParser';
import IObjectRecord from 'src/Models/IObjectRecord';
import IObjectMetadata from 'src/Models/IObjectMetadata';

export default class DataManagerService {
    public static initializeAndUpdate = async (onProgress: (percentage: number) => void): Promise<IObjectMetadata[]> => {
        var current: string = await GithubAPI.getCurrentCommit();
        var saved: string = await GithubAPI.getSavedCommit();

        if (current === saved) {
            return await GithubAPI.getSavedMetadata();
        }
        
        await GithubAPI.updateSavedCommit(current);
        var records = await DataManagerService.loadObjects(onProgress);
        return await DataManagerService.updateMetadata(records);
    }

    public static loadObjects = async (onProgress: (percentage: number) => void) => {
        var objectRecords: IObjectRecord[] = [];
        var count = await GithubAPI.getObjectCount();

        for (var i = 0; i < count; ++i) {
            await GithubAPI.getObjectById(i)
                .then((response) => objectRecords.push(ObjectRecordParser.parse(response)))
                .catch(() => --count);
            onProgress(objectRecords.length / count);
        }
        return objectRecords;
    }

    public static updateMetadata = async (objectRecords: IObjectRecord[]): Promise<IObjectMetadata[]> => {
        var objectMetadata = objectRecords.map((record) => ({ 
            id: record.id,
            description: record.description
        }));

        await GithubAPI.updateSavedMetadata(objectMetadata);
        return objectMetadata;
    }
}