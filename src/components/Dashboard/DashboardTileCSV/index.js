import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { saveDataToCSV } from '../../../lib/csv.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FilterDate from '../../FilterDate';
import { red500 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { formatHandleData } from '../../../lib/csv-handle';
import { formatNodeData } from '../../../lib/csv-node';
import { exportCSVFile } from '../../../lib/csv-export';
import { showNotification } from '../../../actions/notification-actions';

const mapDispatchToProps = dispatch => {
    return {
        showNotification: (text, error) => dispatch(showNotification(text, error))
    };
};

class DashboardTileCSV extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dialog: false, startDate: null, endDate: null };
    }

    toggleDialog = () => this.setState({ dialog: !this.state.dialog });

    fetchData = () => {
        const { device, deviceType, showNotification } = this.props;

        saveDataToCSV(device, deviceType, this.state).then(data => {
            if (!data.measurements.length) {
                return showNotification(
                    'Brak pomiarów w zadanym przedziale czasu',
                    true
                );
            }
            const { fileTitle, headers, itemsFormatted } =
                deviceType === 'HANDLE'
                    ? formatHandleData(data, device)
                    : formatNodeData(data, device);

            exportCSVFile(headers, itemsFormatted, fileTitle);
            showNotification(
                'Utworzony plik csv został zapisany w pamięci urządzenia'
            );
        });
        this.toggleDialog();
    };

    render() {
        const minDate = new Date();
        const maxDate = new Date();

        const startDateNumber = this.state.startDate
            ? new Date(this.state.startDate).getTime()
            : new Date(minDate.setDate(minDate.getDate() - 1)).getTime();

        const endDateNumber = this.state.endDate
            ? new Date(this.state.endDate).getTime()
            : new Date().getTime();

        const actions = [
            <FlatButton
                label="Anuluj"
                onClick={() => {
                    this.toggleDialog();
                    this.setState({
                        startDate: '',
                        endDate: ''
                    });
                }}
            />,
            <RaisedButton
                label="Pobierz"
                primary={true}
                keyboardFocused={true}
                disabled={startDateNumber > endDateNumber}
                onClick={() => this.fetchData()}
            />
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
                    <FilterDate
                        hint="Dane od dnia"
                        onDateChange={date => this.setState({ startDate: date })}
                        min
                    />
                    <FilterDate
                        hint="Dane do dnia"
                        onDateChange={date => this.setState({ endDate: date })}
                    />
                    {startDateNumber > endDateNumber && (
                        <p style={{ color: red500 }}>
                            Data zakończenia nie może być starsza od daty rozpoczęcia
                        </p>
                    )}
                </Dialog>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(DashboardTileCSV);
