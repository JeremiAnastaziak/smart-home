import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './index.css';
import { cyan500 } from 'material-ui/styles/colors';
import { sortRecords } from '../../actions/dashboard-actions';
import uuidv1 from 'uuid/v1';

const commonSortOptions = [
    { value: 'date_latest', text: 'Data najnowsze' },
    { value: 'date_oldest', text: 'Data najstarsze' },
    { value: 'temp_asc', text: 'Temperatura rosnąco' },
    { value: 'temp_desc', text: 'Temperatura malejąco' }
];

const handleSortOptions = [
    { value: 'sound_asc', text: 'Moc sygnału rosnąco' },
    { value: 'sound_desc', text: 'Moc sygnału malejąco' }
];

const nodeSortOptions = [
    { value: 'hum_asc', text: 'Wilgotność względna rosnąco' },
    { value: 'hum_desc', text: 'Wilgotność względna malejąco' },
    { value: 'light_asc', text: 'Natężenie światła rosnąco' },
    { value: 'light_desc', text: 'Natężenie światła malejąco' },
    { value: 'carbon_asc', text: 'Stężenie dwutlenku węgla rosnąco' },
    { value: 'carbon_desc', text: 'Stężenie dwutlenku węgla malejąco' }
];

const mapStateToProps = ({ dashboard, devices }) => {
    return {
        activeSort: dashboard.activeSort,
        deviceType: devices.selected && devices.selected.deviceType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSortChange: sortBy => dispatch(sortRecords(sortBy))
    };
};

const Sort = ({ activeSort, deviceType, onSortChange }) => {

    const options = commonSortOptions.concat(
        deviceType === 'HANDLE' ? handleSortOptions : nodeSortOptions
    );

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
                {options.map(option => (
                    <MenuItem
                        key={uuidv1()}
                        value={option.value}
                        primaryText={option.text}
                    />
                ))}
            </DropDownMenu>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
