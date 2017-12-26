import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import uuidv1 from 'uuid/v1';

import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TableToolbar from '../TableToolbar';
import TableRowCustom from '../TableRow';
import './hack.css';

const TableCustom = ({ records, isFetching, alarmTable }) => {
    return (
        <Card
            className="row-margins"
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <TableToolbar isAlarmTable={alarmTable} />
            <div style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                <Table style={{ minWidth: '700px' }}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        {!isFetching && !records.length ? (
                            <p
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                Brak dostępnych pomiarów
                            </p>
                        ) : (
                            <TableRow>
                                <TableHeaderColumn>Data</TableHeaderColumn>
                                <TableHeaderColumn>Temperatura</TableHeaderColumn>
                                <TableHeaderColumn>Moc sygnału</TableHeaderColumn>
                                <TableHeaderColumn>Stan klamki</TableHeaderColumn>
                                <TableHeaderColumn>Alarmy</TableHeaderColumn>
                            </TableRow>
                        )}
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {isFetching && <CircularProgress />}
                        {records &&
                            records.map(record => (
                                <TableRowCustom
                                    key={uuidv1()}
                                    record={record}
                                    isFetching={isFetching}
                                />
                            ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
};

export default TableCustom;
