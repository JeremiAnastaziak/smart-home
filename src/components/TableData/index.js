import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import { Card } from 'material-ui/Card';
import TableDataToolbar from '../TableDataToolbar';
import CustomTableRow from '../TableRow';

const TableData = ({ records }) => {
    return (
        <Card className="row-margins">
            <TableDataToolbar />
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
                    {records && records.map(record => <CustomTableRow key={record.date} record={record} />)}
                </TableBody>
            </Table>
        </Card>
    );
};

export default TableData;
