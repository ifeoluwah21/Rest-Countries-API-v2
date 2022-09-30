import { createSlice } from "@reduxjs/toolkit";

const countriesInitialState = {
    countries: [],
    queriedCountries: [],
    queried: false,
}

const countriesSlice = createSlice({
    name: `countries`,
    initialState: countriesInitialState,
    reducers: {
        fetchAll: (state, action) => {
            return {
                ...state,
                countries: action.payload.value,
            }
        },
        queryByName: (state, action) => {
            const newCountriesData = state.countries.filter(data => data.name.includes(action.payload.value) || data.name.toLowerCase().includes(action.payload.value));
            const queried = action.payload.value !== "" ? true : false;
            return {
                ...state,
                queriedCountries: newCountriesData,
                queried,

            }
        },
        queryByRegion: (state, action) => {
            const newCountriesData = state.countries.filter(data => data.region === action.payload.value);
            const queried = action.payload.value !== "" ? true : false;
            return {
                ...state,
                queriedCountries: newCountriesData,
                queried,
            }
        }
    }
})

export const countriesActions = countriesSlice.actions;



export default countriesSlice;