import Api from 'src/Services/Api';
import { IObjectRecordContainer } from 'src/Models/ObjectRecord';
import IProgressInfo from 'src/Models/IProgressInfo';

export default class DataManagerService {
    public static initialize = async (onProgress: (progress?: IProgressInfo) => void): Promise<IObjectRecordContainer> => {
        onProgress({
            percent: 0,
            message: "Fetching records...",
        })
        try {
            var response = await Api.getRecords();

            switch (response.outdated) {
            case false: 
                return response.records;
            case true:
                onProgress(response.progress);
                DataManagerService.waitForUpdate(onProgress);
                return {};
            }
        } catch {
            onProgress({
                percent: 1,
                message: "Unexpected error occured. Please refresh the page."
            })
        } finally {
            return {};
        }
    }

    private static sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    private static waitForUpdate = async (onProgress: (progress?: IProgressInfo) => void) => {
        try {
            do {
                await DataManagerService.sleep(3000);
                var response = await Api.getRecords();
    
                switch (response.outdated) {
                case false:
                    onProgress(undefined);
                    return;
                case true:
                    onProgress(response.progress);
                }
            } while (true);
        } catch {
            onProgress({
                percent: 1,
                message: "Unexpected error occured. Please refresh the page."
            })
        }
    }
}