import React, { Component } from 'react';
import LockedIcon from 'material-ui/svg-icons/action/lock';
import UnLockedIcon from 'material-ui/svg-icons/action/lock-open';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { changeSettingsAction } from '../../../actions/settings-actions';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';

const mapStateToProps = ({ settings }) => {
    return {
        settings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeSettings: settings => dispatch(changeSettingsAction(settings))
    };
};

class HeaderIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            alarm: props.settings.alarmEnabled
        };
    }

    toggleDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    };

    submitDialog = () => {
        this.props.changeSettings({
            alarmEnabled: this.state.alarm,
            minTemperature: this.state.temp || this.props.settings.minTemperature
        });
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

        return (
            <div>
                <IconButton tooltip="Ustawienia" onClick={() => this.toggleDialog()}>
                    <SettingsIcon color="#fff" />
                </IconButton>
                <Dialog
                    title="Ustawienia"
                    modal={false}
                    open={this.state.dialog}
                    actions={actions}
                    contentStyle={{maxWidth: '300px'}}
                >
                    <List>
                        <ListItem
                            primaryText="Uzbrojenie"
                            rightToggle={
                                <Toggle
                                    onToggle={(e, value) =>
                                        this.setState({ alarm: value })}
                                    defaultToggled={this.state.alarm || this.props.settings.alarmEnabled}
                                />
                            }
                        />
                        <ListItem
                            primaryText="Minimalna temperatura"
                            rightToggle={
                                <TextField
                                    defaultValue={this.props.settings.minTemperature}
                                    onChange={(e, value) =>
                                        this.setState({ temp: value })}
                                    type="number"
                                    defaultValue={this.props.settings.minTemperature}
                                    name="minTemp"
                                />
                            }
                        />
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderIcon);
