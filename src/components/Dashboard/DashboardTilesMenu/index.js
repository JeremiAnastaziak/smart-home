import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { fetchRecords } from '../../../api/api-measurements';
import { formatDateSend } from '../../../api/helper';
import { exportCSVFile } from '../../../lib/csv.js';
import * as moment from 'moment';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FilterDate from '../../FilterDate';

const saveDataToCSV = (device, filter) => {
    console.log(device);
    const params = {
        activeSort: 'date_latest',
        handles: '123123'
    };
    if (filter.startDate) params.startDate = formatDateSend(filter.startDate);
    if (filter.endDate) params.endDate = formatDateSend(filter.endDate);

    fetchRecords(params).then(response => {
        response.json().then(data => {
            var fileTitle = `${device.handleName}-pomiary`; // or 'my-unique-title'
            var headers = {
                date: 'Data'.replace(/,/g, ''), // remove commas to avoid errors
                handleName: 'Nazwa klamki',
                handlePosition: 'Pozycja klamki',
                temperature: 'Temperatura'
            };

            const itemsFormatted = data.handleMeasurements.map(item => {
                return {
                    date:
                        moment(item.date).format('l') +
                        ' ' +
                        moment(item.date).format('LT'),
                    handleName: item.handleName,
                    handlePosition: item.handlePosition,
                    temperature: item.temperature.value
                };
            });

            exportCSVFile(headers, itemsFormatted, fileTitle);
        });
    });
};

class DashboardTilesMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dialog: false, startDate: '', endDate: '' };
    }

    toggleDialog = () => this.setState({dialog: !this.state.dialog});

    fetchData = () => {
        saveDataToCSV(this.props.device, this.state);
        this.toggleDialog();
    }

    render() {
        const actions = [
            <FlatButton
              label="Anuluj"
              primary={true}
              onClick={() => this.toggleDialog()}
            />,
            <FlatButton
              label="Pobierz"
              primary={true}
              keyboardFocused={true}
              onClick={() => this.fetchData()}
            />,
          ];
        return (
            <div>
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
                        onClick={() => this.toggleDialog()}
                    />
                </IconMenu>
                <Dialog
                    title="Eksport danych do CSV"
                    actions={actions}
                    modal={false}
                    open={this.state.dialog}
                    onRequestClose={this.handleClose}
                    >
                    Wybierz przedział czasu
                    <FilterDate hint="Dane od dnia" onDateChange={(date) => this.setState({startDate: date})}/>
                    <FilterDate hint="Dane do dnia" onDateChange={(date) => this.setState({endDate: date})}/>
                </Dialog>
            </div>
        );
    }
}

export default DashboardTilesMenu;
