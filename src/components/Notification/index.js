import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { hideNotification } from '../../actions/notification-actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ notification }) => {
    return {
        open: notification.show,
        text: notification.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeNotification: () => dispatch(hideNotification())
    };
};

const Notification = ({ text, open, closeNotification }) => {
    return (
        <Snackbar
            open={open}
            message={text}
            onRequestClose={closeNotification}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
