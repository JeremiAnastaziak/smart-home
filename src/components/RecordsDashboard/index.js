import React from 'react';
import TableData from '../TableData';

const RecordsDashboard = ({ records }) => {
    return <TableData title="Ostatnie rekordy" records={records}/>;
};

export default RecordsDashboard;
