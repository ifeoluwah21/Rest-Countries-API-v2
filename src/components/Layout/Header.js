import React, { useContext } from 'react';

import styles from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountriesContext from '../../store/countriesDataContext';
import { faMoon as dm } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lm } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const countriesCtx = useContext(CountriesContext);
    const toggleTheme = () => {
        countriesCtx.toggleTheme();
    }
    console.log(countriesCtx.isLightMode)
    return (
        <header className={`${styles.header} ${countriesCtx.isLightMode ? styles[`header--lm`] : styles[`header--dm`]}`}>
            <h1 className={styles[`header__title`]}>
                <a href="/">
                    Where in the world?
                </a>
            </h1>

            <button type='button' onClick={toggleTheme} className={styles[`header__theme-wrapper`]}>
                <span className={styles[`header__theme-icon`]}>
                    <FontAwesomeIcon className={styles[`header__theme-icon`]} icon={countriesCtx.isLightMode ? lm : dm} />
                </span>
                <span className={styles[`header__theme-desc`]}>Dark Mode</span>
            </button>
        </header>
    )
}

export default Header