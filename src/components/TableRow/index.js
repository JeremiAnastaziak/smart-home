import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import './index.css';

const TableRowCustom = ({ record, isFetching, content }) => {

    const renderAlarmInfo = alarm =>
        ''
            .concat(alarm.fire ? 'POŻAROWY ' : '')
            .concat(alarm.frost ? 'ZAMROZENIOWY ' : '')
            .concat(alarm.burglary ? 'WŁAMANIOWY' : '');

    return (
        <TableRow className={isFetching ? 'apply-placeholder' : ''}>
            {Object.keys(content).map(dataKey => record[dataKey] && (
                <TableRowColumn key={record.id}>
                    <span>
                        {record[dataKey].hasOwnProperty('value')
                            ? record[dataKey].value + ' ' + record[dataKey].unit
                            : record[dataKey].hasOwnProperty('fire')
                              ? renderAlarmInfo(record[dataKey])
                              : record[dataKey]}
                    </span>
                </TableRowColumn>
            ))}
        </TableRow>
    );
};

export default TableRowCustom;
