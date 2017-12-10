import React from 'react';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarTitle
} from 'material-ui/Toolbar';

import AlarmPagination from '../AlarmPagination';
import MainPagination from '../MainPagination';
import Sort from '../Sort';
import Filter from '../Filter';
import Limit from '../Limit';
import { connect } from 'react-redux';
import { filterRecords } from '../../actions/dashboard-actions';
import './index.css';

const mapStateToProps = ({ dashboard }) => {
    return {
        activeFilter: dashboard.activeFilter,
        handles: dashboard.handles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFilterChange: filterBy => dispatch(filterRecords(filterBy))
    };
};

const TableToolbar = ({ isAlarmTable, activeFilter, handles, onFilterChange }) => {
    return (
        <Toolbar className="toolbar">
            <ToolbarGroup>
                <ToolbarTitle text="Klamki" />
            </ToolbarGroup>
            <ToolbarGroup className="toolbar-group--bottom" style={{justifyContent: 'flex-start'}}>
                <Filter showAll={true} activeFilter={activeFilter} handles={handles} onFilterChange={onFilterChange}/>
                <Sort />
                <Limit />
                {isAlarmTable ? <AlarmPagination /> : <MainPagination />}
            </ToolbarGroup>
        </Toolbar>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TableToolbar);
