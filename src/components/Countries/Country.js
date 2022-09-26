import React from 'react';

import styles from "./Country.module.scss";

const Country = (props) => {
    const clickHandler = event => {
        props.onClick(props.name);
    }
    return (
        <article onClick={clickHandler} className={styles.card}>
            <div className={styles[`card__flag`]}>
                <img src={props.flag} alt="" />
            </div>
            <article className={styles[`card__detail`]}>
                <h2 className={styles[`card__title`]}>{props.name}</h2>
                <div className={styles[`card__infos`]}>
                    <p><span>Population: </span>{props.population}</p>
                    <p><span>Region: </span>{props.region}</p>
                    <p><span>Capital: </span> {props.capital}</p>
                </div>
            </article>
        </article>
    )
}

export default Country;