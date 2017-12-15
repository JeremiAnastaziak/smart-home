import React from 'react';
import { Card, CardTitle, CardHeader, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconDate from 'material-ui/svg-icons/action/date-range';
import IconTemp from 'material-ui/svg-icons/image/wb-sunny';
import IconGraphs from 'material-ui/svg-icons/action/trending-up';
import IconRecords from 'material-ui/svg-icons/editor/format-align-left';
import IconSound from 'material-ui/svg-icons/action/settings-remote';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import { red500, red400, red50 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import './index.css';

const SectionDevices = ({ devices, loadGraphData, selectDevice }) => {
    return (
        <div className="row">
            <Card style={{ backgroundColor: red500 }}>
                <CardHeader style={{color: '#fff'}}
                    title="Alarm pali sie!"
                />
            </Card>
            {devices.map(device => (
                <Card
                    style={{ textAlign: 'center', paddingRight: 0 }}
                    className="device"
                >
                    <CardTitle
                        title={device.name}
                        style={{ textAlign: 'center', paddingBottom: '0 16px'}}
                    />
                    <IconFire  style={{color: red500}} />
                    <CardText style={{ textAlign: 'center', padding: 0 }}>
                        <p className="device-label">Ostatni pomiar:</p>
                        <h3 className="device-date">
                            12/12/17 22:30
                        </h3>
                        <h3 className="device-row">
                            <IconTemp style={{color: '#FFEB3B'}}/><span>22 °C</span>
                        </h3>
                        <h3 className="device-row">
                            <IconSound/><span>-34 dB</span>
                        </h3>

                    </CardText>
                    <CardActions className="device-footer">
                        <Link to='/graphs' onClick={() => loadGraphData(device)}>
                            <FlatButton label="Wykresy" primary icon={<IconGraphs />}/>
                        </Link>
                        <Link to='/table' onClick={() => selectDevice(device.id)}>
                            <FlatButton label="Pomiary" primary icon={<IconRecords />}/>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default SectionDevices;
