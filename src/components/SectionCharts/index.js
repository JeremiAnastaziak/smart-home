import React from 'react';
import Chart from '../Chart';
import './index.css';

const SectionCharts = ({ data }) => {
    return (
        <div className="row">
            {Object.keys(data).map(key => (
                <Chart
                    key={key}
                    title={key}
                    measurements={data[key]}
                />
            ))}
        </div>
    );
};

export default SectionCharts;
