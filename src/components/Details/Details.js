import React from 'react';

import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./Details.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { detailsActions } from '../../store/details-slice';


const Details = () => {
    const details = useSelector(state => state.details.details);
    const countries = useSelector(state => state.countries.countries);
    const isLightMode = useSelector(state => state.theme.isLightMode)
    const dispatch = useDispatch();
    const borders = details?.borders?.map?.(x => {
        let result;
        for (let country of countries) {
            if (x === country.fifa) {
                result = country.name;
                break;
            }
        }
        return result;
    })
    const closeDetailsPageHandler = () => {
        dispatch(detailsActions.hideDetails());

    }
    const borderDetailsHandler = (name) => {
        dispatch(detailsActions.getDetails({ allCountries: countries, value: name }))
    }
    return (
        <section className={`${styles[`details`]} ${isLightMode ? styles[`details--lm`] : styles[`details--dm`]}`}>
            <div className={styles[`details__action`]}>
                <button onClick={closeDetailsPageHandler} className={`${styles[`details__btn`]} ${isLightMode ? styles[`details__btn--lm`] : styles[`details__btn--dm`]}`}>
                    <FontAwesomeIcon className={styles[`icon`]} icon={faArrowLeftLong} />
                    <span>Back</span>
                </button>
            </div>
            <div className={styles[`details__flag-wrapper`]}>
                <img src={details.flag} alt={details.name} />
            </div>
            <h1 className={styles[`details__title`]}>{details.name}</h1>
            <article className={styles[`details__info`]}>
                <p><span>Native Name: </span> {details.nativeName}</p>
                <p><span>Population: </span> {details.population?.toLocaleString()}</p>
                <p><span>Region: </span> {details.region}</p>
                <p><span>Sub Region: </span> {details.subRegion}</p>
                <p><span>Capital: </span> {details.capital}</p>
            </article>
            <article className={styles[`details__sub-info`]}>
                <p><span>Top Level Domain: </span>{details.domain}</p>
                <p><span>Currencies: </span>{details.currencies}</p>
                <p><span>Languages: </span>{details.languages}</p>
            </article>

            <article className={styles[`details__info-border`]}>
                <h2>Border Countries:</h2>
                {borders && borders?.map?.(name => <p onClick={borderDetailsHandler.bind(null, name)} className={isLightMode ? styles.lm : styles.dm} key={name}>{name}</p>)}
                {!borders && <p className={isLightMode ? styles.lm : styles.dm}>No border country</p>}

            </article>
        </section>
    )
}

export default Details