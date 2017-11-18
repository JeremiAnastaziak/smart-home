import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TableData from '../TableData';

const RecordsDashboard = () => {
    return (
        <Card>
            <CardTitle title="Ostatnie rekordy" />
            <TableData />
        </Card>
    );
};

export default RecordsDashboard;
