export const NOTIFICATION_SHOW = 'NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE = 'NOTIFICATION_HIDE';

export const hideNotification = () => ({
    type: NOTIFICATION_HIDE
});

export const showNotification = (text, error) => {
    return dispatch => {
        dispatch({
            type: NOTIFICATION_SHOW,
            error,
            text
        });

        setTimeout(() => dispatch({type: NOTIFICATION_HIDE}), 3000);
    };
};
