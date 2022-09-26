import React, { useContext } from 'react';

import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./Details.module.scss";
import CountriesContext from '../../store/countriesDataContext';


const Details = () => {
    const countriesCtx = useContext(CountriesContext);
    console.log(countriesCtx);
    const borders = countriesCtx.details.borders.map(x => {
        for (let country of countriesCtx.countries) {
            if (x === country.fifa) {
                return country.name;
            }
        }
    })
    console.log(borders)
    const closeDetailsPageHandler = () => {
        countriesCtx.hideDetailsPage();

    }
    return (
        <section className={styles.details}>
            <div className={styles[`details__action`]}>
                <button onClick={closeDetailsPageHandler} className={styles[`details__btn`]}>
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
                {borders.map(name => <p key={name}>{name}</p>)}


            </article>
        </section>
    )
}

export default Details