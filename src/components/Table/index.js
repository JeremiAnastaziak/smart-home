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

import { Card, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TableToolbar from '../TableToolbar';
import TableRowCustom from '../TableRow';
import './hack.css';

const TableCustom = ({ records, isFetching, alarmTable, content }) => {
    return (
        <Card
            style={{ position: 'relative', overflow: 'hidden', margin: '0 0 10px' }}
        >
            {!isFetching && !records.length ? (
                <CardText>Brak pomiarów</CardText>
            ) : (
                <div>
                    <TableToolbar isAlarmTable={alarmTable} />
                    <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
                        <Table
                            style={{ minWidth: '700px' }}
                            className="table-custom"
                        >
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                            >
                                <TableRow>
                                    {Object.keys(content).map(header => (
                                        <TableHeaderColumn>
                                            {content[header]}
                                        </TableHeaderColumn>
                                    ))}
                                </TableRow>
                            </TableHeader>

                            <TableBody displayRowCheckbox={false}>
                                {isFetching && <CircularProgress className="spinner-absolute"/>}
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
                </div>
            )}
        </Card>
    );
};

export default TableCustom;
