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
import { IconFrost } from '../../../assets/icons';
import renderIcons from '../icons';

const DashboardTileHandle = ({ device }) => {
    return (
        <div className="device-meta">
            <span className="device-meta-item">
                <h6 className="device-meta-item-header">Temperatura</h6>
                <span className="device-meta-item-text">
                    <IconTemp style={{ color: '#FFEB3B' }} />
                    {device.temperature.value + ' ' + device.temperature.unit}
                </span>
            </span>
            <span className="device-meta-item">
                <h6 className="device-meta-item-header">Moc sygnału</h6>
                <span className="device-meta-item-text">
                    <IconSound />
                    {device.soundLevel.value + ' ' + device.soundLevel.unit}
                </span>
            </span>
        </div>
    );
};

export default DashboardTileHandle;
