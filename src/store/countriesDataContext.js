import React from "react";

const CountriesContext = React.createContext({
    countries: [],
    queriedCountries: [],
    queried: false,
    isDetailsPageShown: false,
    details: {},
    isLightMode: true,
    toggleTheme: () => { },
    filterByName: (name) => { },
    filterByRegion: (region) => { },
    findByName: (name) => { },
    hideDetailsPage: () => { }
})

export default CountriesContext;