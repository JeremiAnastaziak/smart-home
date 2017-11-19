import React from 'react';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const CustomTableRow = ({ record }) => {
    return (
        <TableRow>
            <TableRowColumn>{record.date}</TableRowColumn>
            <TableRowColumn>{record.measurements.temperature.value}</TableRowColumn>
            <TableRowColumn>{record.measurements.sound.value}</TableRowColumn>
            <TableRowColumn>{record.handlePosition}</TableRowColumn>
            <TableRowColumn>
                {record.alarm.fire ? 'FIRE ' : ''}
                {record.alarm.frost ? 'FROST ' : ''}
                {record.alarm.burglary ? 'BURGLARY' : ''}
            </TableRowColumn>
        </TableRow>
    );
};

export default CustomTableRow;
