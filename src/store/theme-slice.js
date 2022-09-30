import { createSlice } from "@reduxjs/toolkit";


const themeInitialState = {
    isLightMode: true
}
const themeSlice = createSlice({
    name: `theme`,
    initialState: themeInitialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.isLightMode = !state.isLightMode
        }
    }
})

export const themeAction = themeSlice.actions;

export default themeSlice;