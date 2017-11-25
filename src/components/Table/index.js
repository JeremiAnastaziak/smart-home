import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import { Card } from 'material-ui/Card';
import TableToolbar from '../TableToolbar';
import TableRowCustom from '../TableRow';

const TableCustom = ({ records }) => {
    return (
        <Card className="row-margins">
            <TableToolbar />
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
                    {records && records.map(record => <TableRowCustom key={record.date} record={record} />)}
                </TableBody>
            </Table>
        </Card>
    );
};

export default TableCustom;
