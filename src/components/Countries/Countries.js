import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/countries-action";
import ErrorBoundaries from "../Error/Error";

import styles from "./Countries.module.scss";
import Country from "./Country";

const Countries = (props) => {
    const countriesData = useSelector(state => state.countries);
    const isLightMode = useSelector(state => state.theme.isLightMode)
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();
    const clickHandler = name => {
        props.getName(name)
    }
    useEffect(() => {

        dispatch(fetchCountries())
    }, [dispatch])
    // LOOPING THROUGH ALL THE COUNTRIES DATA
    let countriesContent = (countriesData.countries.slice(0, 60).map(data => (
        <Country className={isLightMode ? "--lm" : '--dm'} onClick={clickHandler} name={data.name} key={data.name}
            flag={data.flag} population={data.population.toLocaleString()}
            capital={data.capital} region={data.region} />
    )))
    //CHECKING IF THE DATA HAS BEEN QUERIED, THEN ASSIGNING THE CONTENT TO BE DISPLAY TO THE RESULT OF THE QUERY
    if (countriesData.queried) {
        countriesContent = countriesData.queriedCountries.slice(0, 60).map(data => (
            <Country className={isLightMode ? "--lm" : '--dm'} onClick={clickHandler} name={data.name} key={data.name}
                flag={data.flag} population={data.population.toLocaleString()}
                capital={data.capital} region={data.region} />
        ))
    }
    const sectionContent = (<section className={styles.section}>
        {countriesContent}
    </section>)
    return (<React.Fragment>
        <ErrorBoundaries>
            {status.errorMsg !== "" && <p className={styles.error}>{status.errorMsg}</p>}
            {!status.isLoading && sectionContent}
            {status.isLoading && <div className={styles.loading}></div>}
        </ErrorBoundaries>
    </React.Fragment>
    )
}

export default Countries;