import dummyData from './dummyApi';

function delay(time) {
    return new Promise((resolve) => setTimeout(() => resolve(dummyData), time));
}

export const fetchRecords = () => delay(1000 + Math.random() * 2000)
