import dummyData from '../api/dummyApi';

export default function recordsReducer(state, action) {
    switch(action.type) {
        default:
            return dummyData;
    }
}
