import React, { useContext } from "react"
import CountriesContext from "../../store/countriesDataContext";
import ErrorBoundaries from "../Error/Error";

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
    const sectionContent = (<section className={styles.section}>
        {countriesContent}
    </section>)
    return (<React.Fragment>
        <ErrorBoundaries>
            {countriesCtx.isLoading && !sectionContent && <div className={styles.loading}></div>}
            {countriesCtx.errorMsg !== "" && <p className={styles.error}>{countriesCtx.errorMsg}</p>}
            {!countriesCtx.isLoading && sectionContent}
        </ErrorBoundaries>
    </React.Fragment>
    )
}

export default Countries;