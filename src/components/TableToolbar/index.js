import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from 'material-ui/Toolbar';

import AlarmPagination from '../AlarmPagination';
import MainPagination from '../MainPagination';

const TableToolbar = ({ isAlarmTable }) => {
    return (
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Latest records" />
            </ToolbarGroup>
            <ToolbarGroup>
                {isAlarmTable ? <AlarmPagination /> : <MainPagination />}
            </ToolbarGroup>
        </Toolbar>
    );
};

export default TableToolbar;
