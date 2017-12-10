import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './index.css';
import { cyan500 } from 'material-ui/styles/colors';

const Filter = ({ activeFilter, handles, onFilterChange, showAll }) => {
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
                {showAll && <MenuItem value={null} primaryText="wszystkie" />}
                {handles && handles.map(handle => (
                    <MenuItem value={handle.id} primaryText={handle.name} />
                ))}
            </DropDownMenu>
        </div>
    );
};

export default Filter;
