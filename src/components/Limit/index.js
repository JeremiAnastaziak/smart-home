import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { cyan500 } from 'material-ui/styles/colors';
import { changeLimit } from '../../actions/dashboard-actions';
import './index.css';

const mapStateToProps = ({dashboard}) => {
    return {
        activeLimit: dashboard.limit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLimitChange: (limit) => dispatch(changeLimit(limit))
    }
}

const Limit = ({ activeLimit, onLimitChange }) => {
    return (
        <div className="limit">
            <span className="limit-header" style={{color: cyan500}}>Limit:</span>
            <DropDownMenu className="limit-select" value={activeLimit} onChange={(e, index, value) => onLimitChange(value)}>
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={50} primaryText="50" />
            </DropDownMenu>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Limit);
