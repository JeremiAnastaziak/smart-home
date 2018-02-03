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
import IconCO2 from 'material-ui/svg-icons/file/cloud-queue';
import IconHumidity from 'material-ui/svg-icons/action/invert-colors';
import IconSound from 'material-ui/svg-icons/action/settings-remote';
import IconLight from 'material-ui/svg-icons/action/lightbulb-outline';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import { red500, red400, red50 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import renderIcons from '../icons';

const DashboardTileNode = ({ device }) => {
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
                <h6 className="device-meta-item-header">Natężenie światła</h6>
                <span className="device-meta-item-text">
                    <IconLight color="#41e0e2de" />
                    {device.lightIntensity.value + ' ' + device.lightIntensity.unit}
                </span>
            </span>
            <span className="device-meta-item">
                <h6 className="device-meta-item-header">Stężenie dwutlenku węgla</h6>
                <span className="device-meta-item-text">
                    <IconCO2 style={{ color: '#ff8d7f' }} />
                    <span>
                        {device.carbonDioxide.value + ' ' + device.carbonDioxide.unit}
                    </span>
                </span>
            </span>
            <span className="device-meta-item">
                <h6 className="device-meta-item-header">Wilgotność względna</h6>
                <span className="device-meta-item-text">
                    <IconHumidity color="#03a9f4" />
                    {device.humidity.value + ' ' + device.humidity.unit}
                </span>
            </span>
        </div>
    );
};

export default DashboardTileNode;
