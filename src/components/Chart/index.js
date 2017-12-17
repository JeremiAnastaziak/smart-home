import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    AreaChart,
    Area
} from 'recharts';
import './index.css';

const Chart = ({ measurements, title, isFetching, children }) => {
    return (
        <Card style={{ position: 'relative', margin: '10px' }}>
            ;
            {children}
            {isFetching && (
                <CircularProgress
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            )}
            {!isFetching &&
                !measurements.length && (
                    <span
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center'
                        }}
                    >
                        Brak pomiarów <br/>
                        Spróbuj wybrac inny zakres dat
                    </span>
                )}
            <ResponsiveContainer width="99%" aspect={1.8}>
                {measurements && (
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
                        <CircularProgress
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </AreaChart>
                )}
            </ResponsiveContainer>
        </Card>
    );
};

export default Chart;
