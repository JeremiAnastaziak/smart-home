import React from 'react';
import MeasurementChart from '../MeasurementChart';
import './index.css';

const mock = [1, 2, 3];
const data =
    '[{"name":"A","uv":400,"pv":240,"amt":2400},{"name":"B","uv":300,"pv":456,"amt":2400},{"name":"C","uv":300,"pv":139,"amt":2400},{"name":"D","uv":200,"pv":980,"amt":2400},{"name":"E","uv":278,"pv":390,"amt":2400},{"name":"F","uv":189,"pv":480,"amt":2400}]';

const MeasurementsDashboard = () => {
    return (
        <div className="row">
            {mock.map(chart => <MeasurementChart data={JSON.parse(data)} />)}
        </div>
    );
};

export default MeasurementsDashboard;
