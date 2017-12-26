import React from 'react';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarTitle
} from 'material-ui/Toolbar';

import MainPagination from '../MainPagination';
import Sort from '../Sort';
import Limit from '../Limit';
import { connect } from 'react-redux';
import { selectDevice } from '../../actions/device-actions';
import './index.css';

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        activeFilter: devices.selected,
        handles: dashboard.handles,
        shouldShown: dashboard.records.measurements.length
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFilterChange: deviceId => dispatch(selectDevice(deviceId))
    };
};

const TableToolbar = ({ activeFilter, handles, shouldShown, onFilterChange }) => {
    if (!shouldShown) return false;
    return (
        <Toolbar className="toolbar">
            <ToolbarGroup className="toolbar-group--bottom" style={{justifyContent: 'flex-start'}}>
                <Sort />
                <Limit />
                <MainPagination />
            </ToolbarGroup>
        </Toolbar>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TableToolbar);
