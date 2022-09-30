import { createSlice } from "@reduxjs/toolkit";


const statusInitialState = {
    isLoading: false,
    errorMsg: ``,
}
const statusSlice = createSlice({
    name: `status`,
    initialState: statusInitialState,
    reducers: {
        loading: (state, action) => {
            state.isLoading = true;
            state.errorMsg = "";
        },
        done: (state, action) => {
            state.errorMsg = "";
            state.isLoading = false;
        },
        error: (state, action) => {
            state.isLoading = false;
            state.errorMsg = action.payload.value;
        }
    }
})

export const statusActions = statusSlice.actions;

export default statusSlice;