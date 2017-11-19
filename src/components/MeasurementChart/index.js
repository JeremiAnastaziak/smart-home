import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

import {
    ResponsiveContainer,
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

const MeasurementChart = ({ measurements, title }) => {
    return (
        <Card>
            <CardTitle title={title} style={{padding: "5px 10px 0"}}/>
            <ResponsiveContainer width="99%" aspect={1.8}>
            <AreaChart data={measurements}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F06292" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#F06292" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" color="#9e9e9e" style={{fontSize: '12px'}}/>
            <YAxis domain={['dataMin - 2', 'dataMax + 2']} hide/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#F06292" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default MeasurementChart;
