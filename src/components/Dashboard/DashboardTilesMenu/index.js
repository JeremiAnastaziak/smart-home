import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { fetchRecords } from '../../../api/api-measurements';
import { exportCSVFile } from '../../../lib/csv.js';
import * as moment from 'moment';

const saveDataToCSV = device => {
    const params = {
        activeSort: 'date_latest',
        handles: 'F53E3101',
        // startDate: '2017-12-06 00:00',
        // endDate: '2017-12-26 00:00',
        handles: device.id
    };
    fetchRecords(params).then(response => {
        response.json().then(data => {
            var fileTitle = `${device.name}-pomiary`; // or 'my-unique-title'
            var headers = {
                date: 'Data'.replace(/,/g, ''), // remove commas to avoid errors
                handleName: 'Nazwa klamki',
                handlePosition: 'Pozycja klamki',
                temperature: 'Temperatura'
            };

            const itemsFormatted = data.measurements.map(item => {
                return {
                    date: moment(item.date).format('l') + ' ' + moment(item.date).format('LT'),
                    handleName: item.handleName,
                    handlePosition: item.handlePosition,
                    temperature: item.temperature.value
                };
            });

            exportCSVFile(headers, itemsFormatted, fileTitle);
        });
    });
};

const DashboardTilesMenu = ({ device }) => {
    return (
        <IconMenu
            className="device-more-icon"
            iconButtonElement={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
            <MenuItem
                primaryText="Eksport do CSV"
                onClick={() => saveDataToCSV(device)}
            />
        </IconMenu>
    );
};

{
    /* rightIcon={<ArrowDropRight />}
                menuItems={[
                    <MenuItem
                        primaryText="Ostatni miesiąc"
                        onClick={() => saveDataToCSV(device, 'month')}
                    />,
                    <MenuItem primaryText="Ostatni kwartał"
                    onClick={() => saveDataToCSV(device, 'quarter')}
                    />,
                    <MenuItem primaryText="Ostatni rok"
                    onClick={() => saveDataToCSV(device, 'year')}
                    />
                ]} */
}

export default DashboardTilesMenu;
