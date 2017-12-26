import React, { Component } from 'react';
import LockedIcon from 'material-ui/svg-icons/action/lock';
import UnLockedIcon from 'material-ui/svg-icons/action/lock-open';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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

    render() {
        const actions = [
            <FlatButton
              label="Anuluj"
              primary={true}
              onClick={this.toggleDialog}
            />,
            <FlatButton
              label="Potwierdź"
              primary={true}
              onClick={this.toggleDialog}
            />,
          ];
        return (
            <div>
                <IconButton onClick={() => this.toggleDialog()}>
                    {this.props.locked ? (
                        <LockedIcon color="#fff" />
                    ) : (
                        <UnLockedIcon color="#fff" />
                    )}
                </IconButton>
                <Dialog title="Ustaw uzbrojenie" modal={false} open={this.state.dialog} actions={actions}>
                    Twój dom nie jest teraz uzbrojony. Czy napewno chcesz go uzbroic?
                </Dialog>
            </div>
        );
    }
}

export default HeaderIcon;
