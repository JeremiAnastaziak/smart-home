import React from 'react';
import TableData from '../TableData';

const AlarmDetails = ({alarmType}) => {
    return (
        <div>
            <h1>{`Details from ${alarmType} alarm`}</h1>
            <TableData />
        </div>
    )
}

export default AlarmDetails;
