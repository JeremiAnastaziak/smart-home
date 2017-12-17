import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './index.css';
import { cyan500 } from 'material-ui/styles/colors';
import { sortRecords } from '../../actions/dashboard-actions';
import uuidv1 from 'uuid/v1';

const sortOptions = [
    { value: 'date_latest', text: 'Data najnowsze' },
    { value: 'date_latest', text: 'Data najstarsze' },
    { value: 'temp_asc', text: 'Temp rosnąco' },
    { value: 'temp_desc', text: 'Temp malejąco' },
    { value: 'sound_asc', text: 'Dźwięk rosnąco' },
    { value: 'sound_desc', text: 'Dźwięk malejąco' }
];

const mapStateToProps = ({ dashboard }) => {
    return {
        activeSort: dashboard.activeSort
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSortChange: sortBy => dispatch(sortRecords(sortBy))
    };
};

const Sort = ({ activeSort, onSortChange }) => {
    return (
        <div className="sort">
            <span className="sort-header" style={{ color: cyan500 }}>
                Sortowanie:
            </span>
            <DropDownMenu
                className="sort-select"
                value={activeSort}
                onChange={(e, index, value) => onSortChange(value)}
            >
                {sortOptions.map(option => {
                    <MenuItem
                        key={uuidv1()}
                        value={option.value}
                        primaryText={option.text}
                    />;
                })}
            </DropDownMenu>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
