import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    ReferenceLine,
    ReferenceDot,
    Tooltip,
    CartesianGrid,
    Legend,
    Brush,
    ErrorBar,
    AreaChart,
    Area,
    Label,
    LabelList
} from 'recharts';

const MeasurementChart = ({ data }) => {
    return (
        <Card>
            <CardTitle title="Temperaturka" />
            <ResponsiveContainer width="99%" aspect={1.8}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default MeasurementChart;
