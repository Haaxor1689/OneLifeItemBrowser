import { cloneDeep } from 'lodash'

export default interface ISoundUsage {
    id: number;
    volume: number;
}

const emptySoundUsage: ISoundUsage = {
    id: -1,
    volume: 1.0,
}

export const getEmptySoundUsage = () => cloneDeep(emptySoundUsage);