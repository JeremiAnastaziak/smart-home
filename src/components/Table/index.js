import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TableToolbar from '../TableToolbar';
import TableRowCustom from '../TableRow';

const TableCustom = ({ records, isFetching, alarmTable }) => {
    return (
        <Card className="row-margins">
            <TableToolbar isAlarmTable={alarmTable}/>
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Temperature</TableHeaderColumn>
                        <TableHeaderColumn>Humidity</TableHeaderColumn>
                        <TableHeaderColumn>Handle</TableHeaderColumn>
                        <TableHeaderColumn>Alarms</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                    {isFetching && <CircularProgress style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>}
                    {records &&
                        records.map(record => (
                            <TableRowCustom key={record.date} record={record} isFetching={isFetching}/>
                        ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default TableCustom;
