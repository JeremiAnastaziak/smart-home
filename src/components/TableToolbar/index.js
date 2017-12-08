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
import './index.css';

const TableToolbar = ({ isAlarmTable }) => {
    return (
        <Toolbar className="toolbar">
            <ToolbarGroup>
                <ToolbarTitle text="Ostatnie pomiary" />
            </ToolbarGroup>
            <ToolbarGroup className="toolbar-group--bottom" style={{justifyContent: 'flex-start'}}>
                <Filter />
                <Sort />
                <Limit />
                {isAlarmTable ? <AlarmPagination /> : <MainPagination />}
            </ToolbarGroup>
        </Toolbar>
    );
};

export default TableToolbar;
