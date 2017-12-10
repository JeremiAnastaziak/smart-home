import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './index.css';
import { cyan500 } from 'material-ui/styles/colors';
import { filterRecords } from '../../actions/dashboard-actions';

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

const Sort = ({ activeFilter, handles, onFilterChange }) => {
    return (
        <div className="filter">
            <span className="filter-header" style={{ color: cyan500 }}>
                Klamka:
            </span>
            <DropDownMenu
                className="filter-select"
                value={activeFilter}
                onChange={(e, index, value) => onFilterChange(value)}
            >
                <MenuItem value={null} primaryText="wszystkie" />
                {handles && handles.map(handle => (
                    <MenuItem value={handle.id} primaryText={handle.name} />
                ))}
            </DropDownMenu>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
