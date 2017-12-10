import React, { PureComponent } from 'react';
import Chart from '../Chart';
import { connect } from 'react-redux';
import {
    loadGraphData,
    graphsViewChange,
    changeGraphFilter
} from '../../actions/graph-actions';
import CircularProgress from 'material-ui/CircularProgress';
import GraphsTiles from './GraphsTiles';
import GraphsToolbar from './GraphsToolbar';

const mapStateToProps = ({ graphs }) => {
    console.log(graphs);
    return {
        active: graphs.active,
        data: graphs.active && graphs.fields[graphs.active].data,
        tiles: Object.keys(graphs.fields),
        isFetching: graphs.isFetching,
        filters:  graphs.active && graphs.fields[graphs.active].filters
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
    tiles,
    isFetching,
    reloadGraphData,
    changeGraphView,
    changeGraphFilter,
    filters
}) => {
    if (!data) return false;
    return (
        <div>
            <GraphsTiles
                tiles={tiles}
                changeGraphView={changeGraphView}
                active={active}
            />
            <Chart title={active} measurements={data} isFetching={isFetching}>
                <GraphsToolbar
                    changeGraphFilter={changeGraphFilter}
                    field={active}
                    reloadGraphData={reloadGraphData}
                    isFetching={isFetching}
                    filters={filters}
                />
            </Chart>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Graphs);
