import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./countries-slice";
import detailsSlice from "./details-slice";
import statusSlice from "./status-slice";
import themeSlice from "./theme-slice";


const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer,
        theme: themeSlice.reducer,
        details: detailsSlice.reducer,
        status: statusSlice.reducer,
    }
})

export default store;