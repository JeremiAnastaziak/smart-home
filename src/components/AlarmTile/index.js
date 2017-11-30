import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import AnimatedNumber from 'react-animated-number';
import CircularProgress from 'material-ui/CircularProgress';
import { setAlarmView } from '../../actions/dashboard-alarm-actions';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = ({ dashboard }) => {
    return {
        isFetching: dashboard.isFetching
    };
};

const mapDispatchToProps = (dispatch, { title }) => {
    return {
        alarmViewClick: title => {
            dispatch(setAlarmView(title));
        }
    };
};

const AlarmTile = ({ title, alarmCounts, icon, alarmViewClick, isFetching }) => {
    const alarmType = title.toLowerCase().slice(0, title.indexOf(' '));
    return (
        <Link to={`/alarms/${alarmType}`} onClick={() => alarmViewClick(alarmType)}>
            <Card className="tile card">
                <CardTitle title={title} />
                {icon}
                <CardTitle
                    title={
                        !isFetching ? (
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
                        ) : (
                            <CircularProgress />
                        )
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

export default connect(mapStateToProps, mapDispatchToProps)(AlarmTile);
