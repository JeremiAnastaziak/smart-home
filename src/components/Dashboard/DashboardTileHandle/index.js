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
import {IconFrost} from '../../../assets/icons';

const DashboardTileHandle = ({ device, loadGraphData, loadTableData }) => {
    return (
        <Card style={{ textAlign: 'center', paddingRight: 0 }} className="device">
            <CardTitle
                title={device.name || device.handleName}
                style={{ textAlign: 'center', paddingBottom: '0 16px' }}
            />
            <DashboardTilesMenu device={device} />
            {device.alarm.frost && <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="40px" height="40px" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
<path fill="#90CAF9" d="M6,10.001C10,10,10,34,12,34s3-22,6-22s5,30,7,30s4-29,7-29s3,12,5,12s2-14.999,5-14.999
	C40,10,10,10,6,10.001z"/>
<rect x="6" y="6" fill="#DD2C00" width="36" height="4"/>
<g>
	<path fill="#2196F3" d="M25,10.002V42c2,0,4-29,7-29v-2.999C29.806,10.001,27.417,10.001,25,10.002z"/>
	<path fill="#2196F3" d="M42,10.001c-0.512,0-2.369,0-5,0V25C39,25,39,10.001,42,10.001z"/>
	<path fill="#2196F3" d="M18,10.002c-2.719,0-5.305,0-6,0V34c2,0,3-22,6-22V10.002z"/>
</g>
</svg>}
{device.alarm.fire &&
<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px"
	 viewBox="0 0 48 48" enable-background="new 0 0 48 48">
<path fill="#F44336" d="M10,42h28c2.2,0,4-1.8,4-4V15.7c0-1.6-1-3.1-2.6-3.7L24,6L8.6,12C7,12.6,6,14.1,6,15.7V38
	C6,40.2,7.8,42,10,42z"/>
<path fill="#FFC107" d="M30.6,19.6c0,0.2-0.6,3.8-2.4,5.4c2.4-7.7-4.2-12-4.2-12s-1,5.7-3,7.8c-0.1-2.5-1.5-4-1.5-4
	c-1,4.4-4.5,8.3-4.5,11.1c0,5,4,9,9,9s9-4,9-9C33,24.4,32,21.8,30.6,19.6z"/>
<path fill="#FFF9C4" d="M27,32.5c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.7,3-7.5,3-7.5S27,30.8,27,32.5z"/>
</svg>
}

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
                    to="/measurements"
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
