import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userInfo: {
        name: string,
        email: string,
        mobileNumber: string,
        picture: string,
    };
}

const initialState: UserState = {
    userInfo: {
        name: '',
        email: '',
        mobileNumber: '',
        picture: ''
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<UserState['userInfo']>) {
            state.userInfo = action.payload;
        },
        resetUserInfo(state) {
            state.userInfo = {
                name: '',
                email: '',
                mobileNumber: '',
                picture: ''
            };
        }
    },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
