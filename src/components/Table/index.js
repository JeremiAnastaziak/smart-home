import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import uuidv1 from 'uuid/v1';

import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TableToolbar from '../TableToolbar';
import TableRowCustom from '../TableRow';
import './hack.css';

const TableCustom = ({ records, isFetching, alarmTable, content }) => {
    const renderTableHeader = () => {
        if (!isFetching && !records.length) {
            return (
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Brak dostępnych pomiarów
                </p>
            );
        }

        return (
            <TableRow>
                {Object.keys(content).map(header => (
                    <TableHeaderColumn>{content[header]}</TableHeaderColumn>
                ))}
            </TableRow>
        );
    };

    return (
        <Card
            style={{ position: 'relative', overflow: 'hidden', margin: "0 0 10px" }}
        >
            <TableToolbar isAlarmTable={alarmTable} />
            <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
                <Table style={{ minWidth: '700px' }} className="table-custom">
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        {renderTableHeader()}
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {isFetching && <CircularProgress />}
                        {records &&
                            records.map(record => (
                                <TableRowCustom
                                    key={uuidv1()}
                                    record={record}
                                    isFetching={isFetching}
                                    content={content}
                                />
                            ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
};

export default TableCustom;
