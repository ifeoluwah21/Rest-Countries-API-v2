import { createSlice } from "@reduxjs/toolkit";


const detailsInitialState = {
    isDetailsPageShown: false,
    details: {}
}
const detailsSlice = createSlice({
    name: `details`,
    initialState: detailsInitialState,
    reducers: {
        getDetails: (state, action) => {
            const details = action.payload.allCountries.find(country => country.name === action.payload.value);
            return {
                details: details,
                isDetailsPageShown: true
            }
        },
        hideDetails: (state, action) => {
            state.details = {};
            state.isDetailsPageShown = false;
        }
    }
})


export const detailsActions = detailsSlice.actions;

export default detailsSlice;