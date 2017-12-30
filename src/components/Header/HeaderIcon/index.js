import React, { Component } from 'react';
import LockedIcon from 'material-ui/svg-icons/action/lock';
import UnLockedIcon from 'material-ui/svg-icons/action/lock-open';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { changeSettingsAction } from '../../../actions/settings-actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ settings }) => {
    return {
        locked: settings.alarmEnabled
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleAlarm: (settings) => dispatch(changeSettingsAction(settings))
    };
};

class HeaderIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false
        };
    }

    toggleDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    };

    submitDialog = () => {
        this.props.toggleAlarm({ alarmEnabled: !this.props.locked });
        this.toggleDialog();
    };

    render() {
        const actions = [
            <FlatButton label="Anuluj" onClick={this.toggleDialog} />,
            <FlatButton
                label="Potwierdź"
                primary={true}
                onClick={this.submitDialog}
            />
        ];

        const lockedScenario = (
            <div>
                <UnLockedIcon color="#fff" />
                <Dialog
                    title="Ustaw uzbrojenie"
                    modal={false}
                    open={this.state.dialog}
                    actions={actions}
                >
                    Twój dom nie jest teraz uzbrojony. Czy napewno chcesz go uzbroic?
                </Dialog>
            </div>
        );

        const unLockedScenario = (
            <div>
                <LockedIcon color="#fff" />
                <Dialog
                    title="Ustaw uzbrojenie"
                    modal={false}
                    open={this.state.dialog}
                    actions={actions}
                >
                    Twój dom jest uzbrojony. Czy napewno chcesz wyłączyc uzbrojenie?
                </Dialog>
            </div>
        );
        return (
            <div>
                <IconButton onClick={() => this.toggleDialog()}>
                    {this.props.locked ? unLockedScenario : lockedScenario}
                </IconButton>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);
