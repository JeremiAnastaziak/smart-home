import React, { Component } from 'react';
import LockedIcon from 'material-ui/svg-icons/action/lock';
import UnLockedIcon from 'material-ui/svg-icons/action/lock-open';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const mapStateToProps = () => {
    return {
        locked: false
    }
}


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

        const lockedScenario = (
            <div>
                <UnLockedIcon color="#fff" />
                <Dialog title="Ustaw uzbrojenie" modal={false} open={this.state.dialog} actions={actions}>
                    Twój dom nie jest teraz uzbrojony. Czy napewno chcesz go uzbroic?
                </Dialog>
            </div>
        )

        const unLockedScenario = (
            <div>
                <LockedIcon color="#fff" />
                <Dialog title="Ustaw uzbrojenie" modal={false} open={this.state.dialog} actions={actions}>
                    Twój dom jest uzbrojony. Czy napewno chcesz wyłączyc uzbrojenie?
                </Dialog>
            </div>
        )
        return (
            <div>
                <IconButton onClick={() => this.toggleDialog()}>
                    {false ? unLockedScenario : lockedScenario}
                </IconButton>

            </div>
        );
    }
}

export default HeaderIcon;
