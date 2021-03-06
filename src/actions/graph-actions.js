import { loadGraph } from '../api/api-graphs';
import { messageGraphData } from '../api/helper';
import { showNotification } from './notification-actions';
import { selectDevice } from './device-actions';
export const GRAPHS_SET_FIELD = 'GRAPHS_SET_FIELD';
export const GRAPHS_LOAD_DATA = 'GRAPHS_LOAD_DATA';
export const GRAPHS_LOAD_DATA_SUCCESS = 'GRAPHS_LOAD_DATA_SUCCESS';
export const GRAPHS_LOAD_DATA_ERROR = 'GRAPHS_LOAD_DATA_ERROR';
export const GRAPHS_FILTER_CHANGE = 'GRAPHS_FILTER_CHANGE';

export function graphsViewChange(selectedField) {
    return (dispatch, getState) => {
        const { graphs } = getState();
        if (graphs.active === selectedField) return false;
        dispatch({ type: GRAPHS_SET_FIELD, name: selectedField });
        if (!graphs.fields[selectedField].data.length)
            loadGraphData()(dispatch, getState);
    };
}

export function graphsViewClick(device) {
    return (dispatch, getState) => {
        const { devices } = getState();
        selectDevice(device)(dispatch, getState);
    };
}

export function loadGraphData() {
    return (dispatch, getState) => {
        const { graphs, devices } = getState();

        if (!graphs.active) return false;

        const startDateNumber = new Date(graphs.filters.startDate).getTime();
        const endDateNumber = new Date(graphs.filters.endDate).getTime();
        if(startDateNumber > endDateNumber) return false;
        dispatch({ type: GRAPHS_LOAD_DATA });

        return loadGraph(devices.selected.deviceType, {
            fieldName: graphs.active,
            ...graphs.filters,
            deviceId: devices.selected && devices.selected.id
        }).then(data => {
            if (data.data.length) data = data;
            dispatch({
                type: GRAPHS_LOAD_DATA_SUCCESS,
                data: data.data,
                fieldName: graphs.active
            });
        });
    };
}

export function changeGraphFilter(filter) {
    return (dispatch, getState) => {

        dispatch({ type: GRAPHS_FILTER_CHANGE, filter });

        const { filters } = getState().graphs;

        const minDate = new Date();
        const maxDate = new Date();

        const startDateNumber = filters.startDate ?
            new Date(filters.startDate).getTime() :
            new Date(minDate.setDate(minDate.getDate() - 1)).getTime();

        const endDateNumber = filters.endDate ?
            new Date(filters.endDate).getTime() :
            new Date().getTime();

        if(startDateNumber > endDateNumber) {
            return false;
        }

        loadGraphData()(dispatch, getState);
    };
}
