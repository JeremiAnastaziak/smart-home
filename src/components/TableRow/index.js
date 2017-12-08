import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import './index.css';

const TableRowColumnCustom = ({ data, fire, burglary, frost }) => {
    const renderData = !data // if alarm column renders
        ? ''
              .concat(fire ? 'FIRE ' : '')
              .concat(frost ? 'FROST ' : '')
              .concat(burglary ? 'BURGLARY' : '')
        : data;

    return (
        <TableRowColumn>
            <span>
            {renderData}
            </span>
        </TableRowColumn>
    );
};

const TableRowCustom = ({ record, isFetching }) => {
    return (
        <TableRow className={isFetching ? 'apply-placeholder' : ''}>
            <TableRowColumnCustom data={record.date} />
            <TableRowColumnCustom data={record.temperature.value} />
            <TableRowColumnCustom data={record.soundLevel.value} />
            <TableRowColumnCustom data={record.handlePosition} />
            <TableRowColumnCustom {...record.alarm} />
        </TableRow>
    );
};

export default TableRowCustom;
