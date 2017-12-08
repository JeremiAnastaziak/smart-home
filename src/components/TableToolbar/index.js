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

const TableToolbar = ({ isAlarmTable }) => {
    return (
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Latest records" />
            </ToolbarGroup>
            <ToolbarGroup>
                <Filter />
                <Sort />
                <Limit />
                {isAlarmTable ? <AlarmPagination /> : <MainPagination />}
            </ToolbarGroup>
        </Toolbar>
    );
};

export default TableToolbar;
