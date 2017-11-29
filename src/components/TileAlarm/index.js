import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AnimatedNumber from 'react-animated-number';
import './index.css';

const TileAlarm = ({ title, alarmCounts, icon }) => {
    return (
        <Link to={`/alarms/${title.toLowerCase().slice(0, title.indexOf(' '))}`}>
            <Card className="tile card">
                <CardTitle title={title} />
                {icon}
                <CardTitle
                    title={
                        <AnimatedNumber
                            component="text"
                            value={alarmCounts}
                            style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                transitionProperty:
                                    'background-color, color, opacity'
                            }}
                            stepPrecision={0}
                            frameStyle={perc =>
                                perc === 100 ? {} : { backgroundColor: '#fff' }}
                            duration={0}
                        />
                    }
                    style={{ padding: '0' }}
                />
                <CardText>records</CardText>
                <Divider />
                <FlatButton label="Show Details" primary fullWidth />
            </Card>
        </Link>
    );
};

export default TileAlarm;
