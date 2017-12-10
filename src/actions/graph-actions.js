import { loadGraph } from '../api/api-graphs';
import { showNotification } from './notification-actions';

export const GRAPHS_SET_FIELD = 'GRAPHS_SET_FIELD';
export const GRAPHS_LOAD_DATA = 'GRAPHS_LOAD_DATA';
export const GRAPHS_LOAD_DATA_SUCCESS = 'GRAPHS_LOAD_DATA_SUCCESS';
export const GRAPHS_LOAD_DATA_ERROR = 'GRAPHS_LOAD_DATA_ERROR';
export const GRAPHS_FILTER_CHANGE = 'GRAPHS_FILTER_CHANGE';

export function graphsViewChange(selectedField) {
    console.log(selectedField)
    return (dispatch, getState) => {
        const { graphs } = getState();
        if(graphs.active === selectedField) return false;
        dispatch({ type: GRAPHS_SET_FIELD, name: selectedField });
        if (!graphs.fields[selectedField].data.length) loadGraphData()(dispatch, getState);
    };
}

export function loadGraphData(filters) {
    return (dispatch, getState) => {
        const { graphs } = getState();
        if(!graphs.active) return false;
        dispatch({ type: GRAPHS_LOAD_DATA });
        return loadGraph({ fieldName: graphs.active, ...filters}).then(response => {
            if (response.status === 200) {
                response.text().then(data => {
                    data = JSON.parse(data);
                    dispatch({ type: GRAPHS_LOAD_DATA_SUCCESS, data: data.data, fieldName: graphs.active });
                });
            } else if (response.status === 422) {
                dispatch({type: GRAPHS_LOAD_DATA_ERROR});
                showNotification('StartDate cant be after EndDate')(dispatch, getState);
            }
        });
    };
}

export function changeGraphFilter(filter) {
    return (dispatch, getState) => {
        dispatch({ type: GRAPHS_FILTER_CHANGE, filter });
        const { graphs } = getState();
        const activeFilters = graphs.fields[graphs.active].filters;
        loadGraphData(activeFilters)(dispatch, getState)
    }
}
