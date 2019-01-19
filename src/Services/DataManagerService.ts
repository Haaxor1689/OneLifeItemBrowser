import Api from './Api';
import { IObjectRecordContainer } from './../Models/ObjectRecord';
import IProgressInfo from './../Models/IProgressInfo';

export default class DataManagerService {
    public static initialize = async (onProgress: (progress?: IProgressInfo) => void, done: (objectRecords: IObjectRecordContainer) => void): Promise<IObjectRecordContainer> => {
        onProgress({
            percent: 1,
            message: "Fetching records...",
        })
        try {
            var response = await Api.updateRecords();

            switch (response.outdated) {
            case false:
                onProgress(undefined);
                return await Api.getRecords();
            case true:
                onProgress(response.progress);
                DataManagerService.waitForUpdate(onProgress, done);
                return {};
            }
        } catch {
            onProgress({
                percent: -1,
                message: "Unexpected error occured. Please refresh the page."
            })
            return {};
        }
        return {};
    }

    private static sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    private static waitForUpdate = async (onProgress: (progress?: IProgressInfo) => void, done: (objectRecords: IObjectRecordContainer) => void) => {
        try {
            do {
                await DataManagerService.sleep(3000);
                var response = await Api.updateRecords();
    
                switch (response.outdated) {
                case false:
                    onProgress(undefined);
                    done(await Api.getRecords());
                    return;
                case true:
                    onProgress(response.progress);
                }
            } while (true);
        } catch {
            onProgress({
                percent: -1,
                message: "Unexpected error occured. Please refresh the page."
            })
        }
    }
}