import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE
} from '../actions/notification-actions';

const initialState = {
    show: false,
    text: ''
}

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATION_SHOW:
            return {
                ...state,
                text: action.text,
                show: true
            };
        case NOTIFICATION_HIDE:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}
