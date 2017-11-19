import React from 'react';
import MeasurementChart from '../MeasurementChart';
import './index.css';

const MeasurementsDashboard = ({ data }) => {
    return (
        <div className="row">
            {Object.keys(data).map(key => (
                <MeasurementChart
                    key={key}
                    title={key}
                    measurements={data[key]}
                />
            ))}
        </div>
    );
};

export default MeasurementsDashboard;
