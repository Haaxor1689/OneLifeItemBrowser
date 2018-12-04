import { cloneDeep } from 'lodash'

export default interface IPosition {
    x: number;
    y: number;
}

const emptyPosition: IPosition = {
    x: 0,
    y: 0,
}

export const getEmptyPosition = () => cloneDeep(emptyPosition);