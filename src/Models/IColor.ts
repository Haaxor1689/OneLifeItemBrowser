import { cloneDeep } from 'lodash'

export default interface IColor {
    r: number;
    g: number;
    b: number;
}

const emptyColor: IColor = {
    r: 0,
    g: 0,
    b: 0,
}

export const getEmptyColor = () => cloneDeep(emptyColor);