import { api } from './helper';

export const fetchRecords = (deviceType, params) =>
    api(`/users/measurements/${deviceType === 'HANDLE' ? 'handles' : 'nodes'}`, params);
