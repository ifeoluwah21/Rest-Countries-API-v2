import React from 'react';

import styles from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles[`header__title`]}>
                <a href="/">
                    Where in the world?
                </a>
            </h1>

            <div className={styles[`header__theme-wrapper`]}>
                <span className={styles[`header__theme-icon`]}>
                    <FontAwesomeIcon className={styles[`header__theme-icon`]} icon={faMoon} />
                </span>
                <span className={styles[`header__theme-desc`]}>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header