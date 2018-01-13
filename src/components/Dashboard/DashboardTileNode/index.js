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
import DashboardTilesMenu from '../DashboardTilesMenu';
import renderIcons from '../icons';

const DashboardTileNode = ({ device, loadGraphData, loadTableData }) => {
    return (
        <Card style={{ textAlign: 'center', paddingRight: 0 }} className="device">
            <CardTitle
                title={device.nodeName}
                style={{ textAlign: 'center', paddingBottom: '0 16px' }}
            />
            <DashboardTilesMenu device={device} />
            {renderIcons(device)}
            <CardText style={{ textAlign: 'center', padding: 0, minHeight: '180px' }}>
                <h6 className="device-row-item-header">Ostatni pomiar:</h6>
                <h3 className="device-date">{device.date}</h3>
                <h3 className="device-row">
                <span className="flex1">
                        <h6 className="device-row-item-header">Temperatura</h6>
                    <span className="device-row-item">
                        <IconTemp style={{ color: '#FFEB3B' }} />
                        {device.temperature.value + ' ' + device.temperature.unit}
                    </span>
                    </span>
                    <span className="flex1">
                        <h6 className="device-row-item-header">Światło</h6>
                    <span className="device-row-item">
                        <IconLight color="#41e0e2de"/>
                        {device.lightIntensity.value + ' ' + device.lightIntensity.unit}
                    </span>
                    </span>
                </h3>
                <h3 className="device-row">
                <span className="flex1">
                        <h6 className="device-row-item-header">Dwutlenek węgla</h6>
                    <span className="device-row-item">
                        <IconCO2 style={{ color: '#ff8d7f' }} />
                        <span>{device.carbonDioxide.value + ' ' + 'CO'}<sup>2</sup></span>
                    </span>
                    </span>
                    <span className="flex1">
                        <h6 className="device-row-item-header">Wilgotność</h6>
                    <span className="device-row-item">
                        <IconHumidity color="#03a9f4"/>
                        {device.humidity.value + ' ' + device.humidity.unit}
                    </span>
                    </span>
                </h3>
            </CardText>
            <CardActions className="device-footer">
                <Link to="/graphs" onClick={() => loadGraphData({ ...device, deviceType: 'NODE'})}>
                    <FlatButton label="Wykresy" primary icon={<IconGraphs />} />
                </Link>
                <Link to="/measurements" onClick={() => loadTableData({ ...device, deviceType: 'NODE'})}>
                    <FlatButton label="Pomiary" primary icon={<IconRecords />} />
                </Link>
            </CardActions>
        </Card>
    );
};

export default DashboardTileNode;
