import React, { useContext, useRef } from 'react';

import styles from "./Form.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import CountriesContext from '../../store/countriesDataContext';

const Form = () => {
    const countriesCtx = useContext(CountriesContext);
    const nameRef = useRef("");
    const regionRef = useRef(``);
    const selectChangeHandler = event => {
        nameRef.current.value = '';
        countriesCtx.filterByRegion(regionRef.current.value);
    }

    const inputChangeHandler = event => {
        regionRef.current.selectedIndex = 0;
        countriesCtx.filterByName(nameRef.current.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        if (regionRef.current.value === "") {
            return countriesCtx.filterByName(nameRef.current.value);
        }
        if (nameRef.current.value === "") {
            return countriesCtx.filterByRegion(regionRef.current.value);
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={`${styles[`form__control`]} ${styles[`form__input`]}`}>
                <FontAwesomeIcon icon={faSearch} className={styles[`form__input-icon`]} />
                <input onChange={inputChangeHandler} ref={nameRef} type="text" aria-label='Search by name'
                    placeholder='Search for a country...' />
            </div>
            <div className={`${styles[`form__control`]} ${styles[`form__select`]}`}>
                <select onChange={selectChangeHandler} ref={regionRef} name="Filter by region">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
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