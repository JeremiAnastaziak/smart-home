import React from 'react';
import {
    Card,
    CardTitle,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconDate from 'material-ui/svg-icons/action/date-range';
import IconTemp from 'material-ui/svg-icons/image/wb-sunny';
import IconGraphs from 'material-ui/svg-icons/action/trending-up';
import IconRecords from 'material-ui/svg-icons/editor/format-align-left';
import IconSound from 'material-ui/svg-icons/action/settings-remote';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import { red500, red400, red50 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import DashboardTilesMenu from '../DashboardTilesMenu';
import './index.css';

const DashboardTile = ({ device, loadGraphData, selectDevice }) => {
    return (
        <Card style={{ textAlign: 'center', paddingRight: 0 }} className="device">
            <CardTitle
                title={device.name || device.handleName}
                style={{ textAlign: 'center', paddingBottom: '0 16px' }}
            />
            <DashboardTilesMenu device={device} />
            <IconFire style={{ color: red500 }} />
            <CardText style={{ textAlign: 'center', padding: 0 }}>
                <p className="device-label">Ostatni pomiar:</p>
                <h3 className="device-date">{device.date}</h3>
                <h3 className="device-row">
                    <IconTemp style={{ color: '#FFEB3B' }} />
                    <span>
                        {device.temperature.value + ' ' + device.temperature.unit}
                    </span>
                </h3>
                <h3 className="device-row">
                    <IconSound />
                    <span>
                        {device.soundLevel.value + ' ' + device.soundLevel.unit}
                    </span>
                </h3>
            </CardText>
            <CardActions className="device-footer">
                <Link to="/graphs" onClick={() => loadGraphData(device)}>
                    <FlatButton label="Wykresy" primary icon={<IconGraphs />} />
                </Link>
                <Link to="/table" onClick={() => selectDevice(device)}>
                    <FlatButton label="Pomiary" primary icon={<IconRecords />} />
                </Link>
            </CardActions>
        </Card>
    );
};

export default DashboardTile;
