import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotificationState(state, action) {
            return action.payload;
        }
    }
});

export const { setNotificationState } = notificationSlice.actions;

export const setNotification = (notification, timeoutSec) => {
    return async (dispatch) => {
        dispatch(setNotificationState(notification));
        setTimeout(() => dispatch(setNotificationState('')), timeoutSec * 1000);
    };
};

export default notificationSlice.reducer;
