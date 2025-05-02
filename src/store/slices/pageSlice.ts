import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
    currentPage: string;
}

const initialState: PageState = {
    currentPage: 'language-selection',
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        },
        resetCurrentPage(state) {
            state.currentPage = 'language-selection';
        }
    },
});

export const { setCurrentPage, resetCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
