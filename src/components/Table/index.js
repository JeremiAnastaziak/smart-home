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
                        <TableHeaderColumn>Temperatura</TableHeaderColumn>
                        <TableHeaderColumn>Poziom dzwieku</TableHeaderColumn>
                        <TableHeaderColumn>Stan klamki</TableHeaderColumn>
                        <TableHeaderColumn>Alarmy</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                    {isFetching && <CircularProgress />}
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
