import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const TableData = () => {
    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Temperature</TableHeaderColumn>
                    <TableHeaderColumn>Humidity</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>5</TableRowColumn>
                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default TableData;
