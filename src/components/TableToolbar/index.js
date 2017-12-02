import React from 'react';
import {
    Toolbar,
    ToolbarGroup,
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
