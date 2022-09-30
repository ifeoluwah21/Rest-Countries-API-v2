import React, { useRef } from 'react';

import styles from "./Form.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../../store/countries-slice';

const Form = () => {
    const nameRef = useRef("");
    const regionRef = useRef(``);
    const dispatch = useDispatch();
    const isLightMode = useSelector(state => state.theme.isLightMode)
    const selectChangeHandler = event => {
        nameRef.current.value = '';
        dispatch(countriesActions.queryByRegion({ value: regionRef.current.value }));
    }

    const inputChangeHandler = event => {
        regionRef.current.selectedIndex = 0;
        dispatch(countriesActions.queryByName({ value: nameRef.current.value.toLowerCase() }));
    }

    const submitHandler = event => {
        event.preventDefault();
        if (regionRef.current.value === "") {
            return dispatch(countriesActions.queryByName({ value: nameRef.current.value.toLowerCase() }));
        }
        if (nameRef.current.value === "") {
            return dispatch(countriesActions.queryByRegion({ value: regionRef.current.value }));
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={`${styles[`form__control`]} ${styles[`form__input`]}`}>
                <FontAwesomeIcon icon={faSearch} className={`${styles[`form__input-icon`]} ${isLightMode ? styles[`form__input-icon--lm`] : styles[`form__input-icon--dm`]}`} />
                <input className={`${isLightMode ? styles[`--lm`] : styles[`--dm`]}`} onChange={inputChangeHandler} ref={nameRef} type="text" aria-label='Search by name'
                    placeholder='Search for a country...' />
            </div>
            <div className={`${styles[`form__control`]} ${styles[`form__select`]}`}>
                <select className={`${isLightMode ? styles[`--lm`] : styles[`--dm`]}`} onChange={selectChangeHandler} ref={regionRef} name="Filter by region">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceanic</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className={`${styles[`form__select-icon`]} ${isLightMode ? styles[`form__select-icon--lm`] : styles[`form__select-icon--dm`]}`} />
            </div>
        </form>
    )
}

export default Form;