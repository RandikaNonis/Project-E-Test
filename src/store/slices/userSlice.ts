import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userInfo: object;
}

const initialState: UserState = {
    userInfo: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<object>) {
            state.userInfo = action.payload;
        },
        resetUserInfo(state) {
            state.userInfo = {};
        }
    },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
