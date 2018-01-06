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

const DashboardTileHandle = ({ device, loadGraphData, loadTableData }) => {
    return (
        <Card style={{ textAlign: 'center', paddingRight: 0 }} className="device">
            <CardTitle
                title={device.name || device.handleName}
                style={{ textAlign: 'center', paddingBottom: '0 16px' }}
            />
            <DashboardTilesMenu device={device} />
            <IconFire style={{ color: red500, marginBottom: '10px' }} />
            <CardText
                style={{ textAlign: 'center', padding: 0, minHeight: '180px' }}
            >
                <h6 className="device-row-item-header">Ostatni pomiar:</h6>
                <h3 className="device-date">{device.date}</h3>
                <h3 className="device-row">
                    <span className="flex1">
                        <h6 className="device-row-item-header">Temperatura</h6>
                        <span className="device-row-item">
                            <IconTemp style={{ color: '#FFEB3B' }} />
                            {device.temperature.value +
                                ' ' +
                                device.temperature.unit}
                        </span>
                    </span>
                    <span className="flex1">
                        <h6 className="device-row-item-header">Moc sygnału</h6>
                        <span className="device-row-item">
                            <IconSound />
                            {device.soundLevel.value + ' ' + device.soundLevel.unit}
                        </span>
                    </span>
                </h3>
            </CardText>
            <CardActions className="device-footer" style={{ padding: 0 }}>
                <Link
                    to="/graphs"
                    onClick={() =>
                        loadGraphData({ ...device, deviceType: 'HANDLE' })}
                >
                    <FlatButton label="Wykresy" primary icon={<IconGraphs />} />
                </Link>
                <Link
                    to="/table"
                    onClick={() =>
                        loadTableData({ ...device, deviceType: 'HANDLE' })}
                >
                    <FlatButton label="Pomiary" primary icon={<IconRecords />} />
                </Link>
            </CardActions>
        </Card>
    );
};

export default DashboardTileHandle;
