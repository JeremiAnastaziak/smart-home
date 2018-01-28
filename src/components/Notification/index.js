import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { hideNotification } from '../../actions/notification-actions';
import { connect } from 'react-redux';

const errorStyles = {
    backgroundColor: 'red',
    color: '#fff'
}

const mapStateToProps = ({ notification }) => {
    return {
        open: notification.show,
        text: notification.text,
        error: notification.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeNotification: () => dispatch(hideNotification())
    };
};

const Notification = ({ text, open, error, closeNotification }) => {
    return (
        <Snackbar
            open={open}
            message={text}
            onRequestClose={closeNotification}
            bodyStyle={error && errorStyles}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
