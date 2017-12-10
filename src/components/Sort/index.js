import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import './index.css';
import { cyan500 } from 'material-ui/styles/colors';
import { sortRecords } from '../../actions/dashboard-actions';
import uuidv1 from 'uuid/v1';

const mapStateToProps = ({dashboard}) => {
    return {
        activeSort: dashboard.activeSort
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: (sortBy) => dispatch(sortRecords(sortBy))
    }
}

const Sort = ({ activeSort, onSortChange }) => {
    return (
        <div className="sort">
            <span className="sort-header" style={{color: cyan500}}>Sortowanie:</span>
            <DropDownMenu className="sort-select" value={activeSort} onChange={(e, index, value) => onSortChange(value)}>
                <MenuItem key={uuidv1()} value={'date_latest'} primaryText="Data najnowsze" />
                <MenuItem key={uuidv1()} value={'date_oldest'} primaryText="Data najstarsze" />
                <MenuItem key={uuidv1()} value={'temp_asc'} primaryText="Temp rosnąco" />
                <MenuItem key={uuidv1()} value={'temp_desc'} primaryText="Temp malejąco" />
                <MenuItem key={uuidv1()} value={'sound_asc'} primaryText="Dźwięk rosnąco" />
                <MenuItem key={uuidv1()} value={'sound_desc'} primaryText="Dźwięk malejąco" />
            </DropDownMenu>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
