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
import DashboardTileCSV from '../DashboardTileCSV';
import { IconFrost } from '../../../assets/icons';
import renderIcons from '../icons';

const DashboardTile = ({
    device,
    loadGraphData,
    loadTableData,
    deviceType,
    children
}) => {
    return (
        <Card style={{ textAlign: 'center', paddingRight: 0 }} className="device">
            <CardTitle
                title={device.name || device.handleName || device.nodeName}
                style={{ textAlign: 'center', paddingBottom: '0 16px' }}
            />
            <DashboardTileCSV device={device} deviceType={deviceType}/>
            {renderIcons(device)}
            <CardText
                style={{ textAlign: 'center', padding: 0, minHeight: '180px' }}
            >
                <label className="device-label">Ostatni pomiar:</label>
                <h3 className="device-date">{device.date}</h3>
                {children}
            </CardText>
            <CardActions className="device-footer">
                <Link
                    to="/graphs"
                    onClick={() =>
                        loadGraphData({ ...device, deviceType })}
                >
                    <FlatButton label="Wykresy" primary icon={<IconGraphs />} />
                </Link>
                <Link
                    to="/measurements"
                    onClick={() =>
                        loadTableData({ ...device, deviceType })}
                >
                    <FlatButton label="Pomiary" primary icon={<IconRecords />} />
                </Link>
            </CardActions>
        </Card>
    );
};

export default DashboardTile;
