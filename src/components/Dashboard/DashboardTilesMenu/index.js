import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { saveDataToCSV } from '../../../lib/csv.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FilterDate from '../../FilterDate';

class DashboardTilesMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dialog: false, startDate: '', endDate: '' };
    }

    toggleDialog = () => this.setState({ dialog: !this.state.dialog });

    fetchData = () => {
        saveDataToCSV(this.props.device, this.state);
        this.toggleDialog();
    };

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
                    />
                    <FilterDate
                        hint="Dane do dnia"
                        onDateChange={date => this.setState({ endDate: date })}
                    />
                </Dialog>
            </div>
        );
    }
}

export default DashboardTilesMenu;
