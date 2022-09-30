import { countriesActions } from "./countries-slice";
import { statusActions } from "./status-slice";

export const fetchCountries = () => {
    return async (dispatch) => {
        async function fetchCountriesData() {
            dispatch(statusActions.loading());
            const res = await fetch("https://restcountries.com/v3.1/all");
            if (!res.ok) {
                throw new Error(`Something broke : ${res?.statusText
                    }`)
            }
            const datas = await res.json();

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

            dispatch(countriesActions.fetchAll({ value: transformedDatas }));
            dispatch(statusActions.done());
        };
        fetchCountriesData().catch(error => {
            dispatch(statusActions.error());
        });
    }
}