import { api } from './helper';

export const initialFetch = () => {
    return api('/users/measurements/latest')
}
