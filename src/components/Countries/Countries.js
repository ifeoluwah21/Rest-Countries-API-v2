import React, { useContext } from "react"
import CountriesContext from "../../store/countriesDataContext";

import styles from "./Countries.module.scss";
import Country from "./Country";

const Countries = (props) => {
    const countriesCtx = useContext(CountriesContext);
    const clickHandler = name => {
        props.getName(name)
    }
    // LOOPING THROUGH ALL THE COUNTRIES DATA
    let countriesContent = (countriesCtx.countries.slice(0, 60).map(data => (
        <Country className={countriesCtx.isLightMode ? "--lm" : '--dm'} onClick={clickHandler} name={data.name} key={data.name}
            flag={data.flag} population={data.population.toLocaleString()}
            capital={data.capital} region={data.region} />
    )))
    //CHECKING IF THE DATA HAS BEEN QUERIED, THEN ASSIGNING THE CONTENT TO BE DISPLAY TO THE RESULT OF THE QUERY
    if (countriesCtx.queried) {
        countriesContent = countriesCtx.queriedCountries.slice(0, 60).map(data => (
            <Country className={countriesCtx.isLightMode ? "--lm" : '--dm'} onClick={clickHandler} name={data.name} key={data.name}
                flag={data.flag} population={data.population.toLocaleString()}
                capital={data.capital} region={data.region} />
        ))
    }
    return (
        <section className={styles.section}>
            {countriesContent}
        </section>
    )
}

export default Countries;