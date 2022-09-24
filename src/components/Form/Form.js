import React from 'react';

import styles from "./Form.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={`${styles[`form__control`]} ${styles[`form__input`]}`}>
                <FontAwesomeIcon icon={faSearch} className={styles[`form__input-icon`]} />
                <input type="text" aria-label='Search by name'
                    placeholder='Search for a country...' />
            </div>
            <div className={`${styles[`form__control`]} ${styles[`form__select`]}`}>
                <select name="Filter by region">
                    <option value="null">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceanic</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className={styles[`form__select-icon`]} />
            </div>
        </form>
    )
}

export default Form;