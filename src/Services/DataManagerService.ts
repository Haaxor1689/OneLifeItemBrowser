import Api from 'src/Services/Api';
import { IObjectRecordContainer } from 'src/Models/ObjectRecord';
import IProgressInfo from 'src/Models/IProgressInfo';

export default class DataManagerService {
    public static initialize = async (onProgress: (progress: IProgressInfo) => void): Promise<IObjectRecordContainer> => {
        var response = await Api.getRecords();

        switch (response.outdated) {
        case false: 
            return response.records;
        case true:
        onProgress(response.progress);
            DataManagerService.waitForUpdate(onProgress);
            return {};
        }
    }

    private static sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    private static waitForUpdate = async (onProgress: (progress: IProgressInfo) => void) => {
        do {
            await DataManagerService.sleep(100);
            var response = await Api.getRecords();

            switch (response.outdated) {
            case false:
                return;
            case true:
                onProgress(response.progress);
            }
        } while (true);
    }
}