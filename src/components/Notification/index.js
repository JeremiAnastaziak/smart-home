import React, { Component } from 'react';
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
            style={{
                top: 0,
                bottom: 'auto',
                left: (window.innerWidth - 288) / 2,
                transform: text
                    ? 'translate3d(0, 0, 0)'
                    : `translate3d(0, -50px, 0)`
            }}
            open={open}
            message={text}
            onRequestClose={closeNotification}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
