import React from 'react';
import Chart from '../Chart';
import { Link } from 'react-router-dom';
import './index.css';



const SectionCharts = ({ data, chartsViewClick, isFetching }) => {
    console.log(data);
    const sectionTitle = (key, title, unit) => {
        return (
            <div className="chart-title">
                <span>{`${title} [${unit}] `}</span>
                <Link to={`/graphs`} onClick={() => chartsViewClick(key, title)}>
                    więcej
                </Link>
            </div>
        )
    }

    return (
        <div className="row">
            {Object.keys(data).map(key => (
                <Chart
                    key={key}
                    title={sectionTitle(key, data[key].title, data[key].unit)}
                    measurements={data[key].items}
                    isFetching={isFetching}
                />
            ))}
        </div>
    );
};

export default SectionCharts;
