import React from 'react';
import MeasurementChart from '../MeasurementChart';
import './index.css';
import data from '../../api/dummy';

const MeasurementsDashboard = () => {
    return (
        <div className="row">
            {data.map(data => <MeasurementChart title={data.title} measurements={data.measurements} />)}
        </div>
    );
};

export default MeasurementsDashboard;
