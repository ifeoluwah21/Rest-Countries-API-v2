import React, { useContext } from 'react';

import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./Details.module.scss";
import CountriesContext from '../../store/countriesDataContext';


const Details = () => {
    const countriesCtx = useContext(CountriesContext);
    console.log(countriesCtx);
    const borders = countriesCtx.details?.borders?.map?.(x => {
        let result;
        for (let country of countriesCtx.countries) {
            if (x === country.fifa) {
                result = country.name;
                break;
            }
        }
        return result;
    })
    console.log(borders)
    const closeDetailsPageHandler = () => {
        countriesCtx.hideDetailsPage();

    }
    console.log(countriesCtx.isLightMode)
    return (
        <section className={`${styles[`details`]} ${countriesCtx.isLightMode ? styles[`details--lm`] : styles[`details--dm`]}`}>
            <div className={styles[`details__action`]}>
                <button onClick={closeDetailsPageHandler} className={`${styles[`details__btn`]} ${countriesCtx.isLightMode ? styles[`details__btn--lm`] : styles[`details__btn--dm`]}`}>
                    <FontAwesomeIcon className={styles[`icon`]} icon={faArrowLeftLong} />
                    <span>Back</span>
                </button>
            </div>
            <div className={styles[`details__flag-wrapper`]}>
                <img src={countriesCtx.details.flag} alt={countriesCtx.details.name} />
            </div>
            <h1 className={styles[`details__title`]}>{countriesCtx.details.name}</h1>
            <article className={styles[`details__info`]}>
                <p><span>Native Name: </span> {countriesCtx.details.nativeName}</p>
                <p><span>Population: </span> {countriesCtx.details.population?.toLocaleString()}</p>
                <p><span>Region: </span> {countriesCtx.details.region}</p>
                <p><span>Sub Region: </span> {countriesCtx.details.subRegion}</p>
                <p><span>Capital: </span> {countriesCtx.details.capital}</p>
            </article>
            <article className={styles[`details__sub-info`]}>
                <p><span>Top Level Domain: </span>{countriesCtx.details.domain}</p>
                <p><span>Currencies: </span>{countriesCtx.details.currencies}</p>
                <p><span>Languages: </span>{countriesCtx.details.languages}</p>
            </article>

            <article className={styles[`details__info-border`]}>
                <h2>Border Countries:</h2>
                {borders && borders?.map?.(name => <p onClick={() => {
                    countriesCtx.findByName(name)
                }} className={countriesCtx.isLightMode ? styles.lm : styles.dm} key={name}>{name}</p>)}
                {!borders && <p className={countriesCtx.isLightMode ? styles.lm : styles.dm}>No border country</p>}

            </article>
        </section>
    )
}

export default Details