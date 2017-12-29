import { api } from './helper';

export const fetchRecords = (params) =>
    api('/users/measurements/handles', params);
