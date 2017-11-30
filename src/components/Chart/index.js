import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

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

const mapStateToProps = ({ dashboard }) => {
    return {
        isFetching: dashboard.isFetching
    };
};

const Chart = ({ measurements, title, isFetching }) => {
    return (
        <Card>
            <CardTitle title={title} style={{ padding: '5px 10px 0' }} />
            <ResponsiveContainer width="99%" aspect={1.8}>
                {!isFetching ? (
                    <AreaChart
                        data={measurements}
                        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorValue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#F06292"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#F06292"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="date"
                            color="#9e9e9e"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis domain={['dataMin - 2', 'dataMax + 2']} hide />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#F06292"
                            isAnimationActive={false}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                ) : (
                    <CircularProgress />
                )}
            </ResponsiveContainer>
        </Card>
    );
};

export default connect(mapStateToProps, null)(Chart);
