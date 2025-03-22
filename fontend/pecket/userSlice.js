import { createSlice } from '@reduxjs/toolkit';

// Corrected initial state variable name
const initialState = {
    id: -1,
    username: '',
    realname: '',
    point: 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState, // Use the correct variable here
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.realname = action.payload.realname;
            state.point = action.payload.point;
        },
        logout: (state) => {
            state.id = -1;
            state.username = '';
            state.realname = '';
            state.point = 0;
        },
    },
});

// Export the actions and reducer
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;