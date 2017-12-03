export const NOTIFICATION_SHOW = 'NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE = 'NOTIFICATION_HIDE';

export const hideNotification = () => ({
    type: NOTIFICATION_HIDE
});

export const showNotification = text => {
    return dispatch => {
        dispatch({
            type: NOTIFICATION_SHOW,
            text
        });

        setTimeout(() => dispatch({type: NOTIFICATION_HIDE}), 3000);
    };
};
