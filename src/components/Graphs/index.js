import React, { PureComponent } from 'react';
import Chart from '../Chart';
import { connect } from 'react-redux';
import {
    loadGraphData,
    graphsViewChange,
    changeGraphFilter
} from '../../actions/graph-actions';
import GraphsTiles from './GraphsTiles';
import GraphsToolbar from './GraphsToolbar';
import './index.css';

const mapStateToProps = ({ dashboard, graphs, devices }) => {
    return {
        active: graphs.active,
        data: graphs.active && graphs.fields[graphs.active].data,
        fields: Object.keys(graphs.fields),
        isFetching: graphs.isFetching,
        filters: graphs.active && graphs.filters,
        handles: dashboard.handles,
        deviceType: devices.selected.deviceType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reloadGraphData: () => dispatch(loadGraphData()),
        changeGraphView: field => dispatch(graphsViewChange(field)),
        changeGraphFilter: filter => dispatch(changeGraphFilter(filter))
    };
};

const Graphs = ({
    data,
    active,
    fields,
    isFetching,
    reloadGraphData,
    changeGraphView,
    changeGraphFilter,
    filters,
    handles,
    deviceType
}) => {
    return (
        <div>
            <GraphsTiles
                fields={fields}
                changeGraphView={changeGraphView}
                active={active}
                deviceType={deviceType}
            />
            {data && (
                <Chart title={active} measurements={data} isFetching={isFetching}>
                    <GraphsToolbar
                        changeGraphFilter={changeGraphFilter}
                        field={active}
                        reloadGraphData={reloadGraphData}
                        isFetching={isFetching}
                        filters={filters}
                        handles={handles}
                    />
                </Chart>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Graphs);
