import { useEffect, useReducer } from "react";
import CountriesContext from "./countriesDataContext";


const reducerFn = (state = initState, action) => {
    if (action.type === `FETCH_ALL`) {
        return {
            countriesData: action.value,
            queriedCountries: state.queriedCountries,
            queried: false,
            isDetailsPageShown: false,
            details: [],
            isLightMode: state.isLightMode
        }
    }
    if (action.type === `QUERY_BY_NAME`) {
        const newCountriesData = state.countriesData.filter(data => data.name.includes(action.value) || data.name.toLowerCase().includes(action.value));
        console.log(newCountriesData);
        const queried = action.value !== "" ? true : false;
        return {
            countriesData: state.countriesData,
            queriedCountries: newCountriesData,
            queried: queried,
            isDetailsPageShown: false,
            details: [], isLightMode: state.isLightMode
        }
    }
    if (action.type === `QUERY_BY_REGION`) {
        const newCountriesData = state.countriesData.filter(data => data.region === action.value);
        const queried = action.value !== "" ? true : false;
        return {
            countriesData: state.countriesData,
            queriedCountries: newCountriesData,
            queried: queried,
            isDetailsPageShown: false,
            details: [],
            isLightMode: state.isLightMode
        }
    }
    if (action.type === `FIND_BY_NAME`) {
        const details = state.countriesData.find(country => country.name === action.value)
        return {
            countriesData: state.countriesData,
            queriedCountries: state.queriedCountries,
            queried: state.queried,
            isDetailsPageShown: true,
            details,
            isLightMode: state.isLightMode
        }
    }
    if (action.type === `HIDE_DETAILS_PAGE`) {
        return {
            ...state,
            isDetailsPageShown: false,
            details: []
        }
    }
    if (action.type === `THEMING`) {
        return {
            ...state,
            isLightMode: !state.isLightMode
        }
    }

    return state;
}
const initState = {
    countriesData: [],
    queriedCountries: [],
    queried: false,
    isDetailsPageShown: false,
    isLightMode: true
}
const CountriesContextProvider = (props) => {
    const [datas, dispatchFn] = useReducer(reducerFn, initState)
    useEffect(() => {
        async function fetchCountriesData() {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const datas = await res.json();

            console.log(datas);
            const transformedDatas = datas.map(data => (
                {
                    name: data?.name.common,
                    flag: data?.flags?.png,
                    fifa: data?.cca3,
                    population: data?.population,
                    capital: data?.capital?.join(", "),
                    region: data?.region,
                    subRegion: data?.subregion,
                    domain: data?.tld?.join(", "),
                    get currencies() {
                        let result = [];
                        for (let key in data?.currencies) {
                            result.push(data?.currencies[key].name);
                        }

                        return result.join(", ");
                    },
                    get nativeName() {
                        let names = []
                        for (let key in data?.name?.nativeName) {
                            names.push(data?.name?.nativeName[key].common)
                        }
                        return names.join(", ");
                    }, get languages() {
                        let result = [];
                        for (let key in data?.languages) {
                            result.push(data?.languages[key])
                        }
                        return result.join(`, `)
                    },
                    borders: data?.borders
                }

            ))

            dispatchFn({ type: `FETCH_ALL`, value: transformedDatas })
        };
        fetchCountriesData();
    }, [])

    const filterByName = (name) => {
        dispatchFn({ type: `QUERY_BY_NAME`, value: name })
    }
    const filterByRegion = (region) => {
        dispatchFn({ type: `QUERY_BY_REGION`, value: region })
    }
    const findByName = name => {
        dispatchFn({ type: `FIND_BY_NAME`, value: name })
    }
    const hideDetailsPage = () => {
        dispatchFn({ type: `HIDE_DETAILS_PAGE` })
    }

    const toggleTheme = () => {
        dispatchFn({ type: `THEMING` })
    }

    console.log(`ran`)

    return <CountriesContext.Provider value={{
        countries: datas.countriesData,
        queriedCountries: datas.queriedCountries,
        queried: datas.queried,
        isDetailsPageShown: datas.isDetailsPageShown,
        details: datas.details,
        isLightMode: datas.isLightMode,
        toggleTheme,
        filterByName,
        filterByRegion,
        findByName,
        hideDetailsPage
    }}>
        {props.children}
    </CountriesContext.Provider>;
}

export default CountriesContextProvider;