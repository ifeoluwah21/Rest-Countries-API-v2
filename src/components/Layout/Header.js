
import styles from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as dm } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lm } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { themeAction } from '../../store/theme-slice';

const Header = () => {
    const dispatch = useDispatch();
    const isLightMode = useSelector(state => state.theme.isLightMode)
    const toggleTheme = () => {
        dispatch(themeAction.toggleTheme());
    }
    return (
        <header className={`${styles.header} ${isLightMode ? styles[`header--lm`] : styles[`header--dm`]}`}>
            <div className={styles[`header__wrapper`]}>
                <h1 className={styles[`header__title`]}>
                    <a href="/">
                        Where in the world?
                    </a>
                </h1>

                <button type='button' onClick={toggleTheme} className={styles[`header__theme-wrapper`]}>
                    <span className={styles[`header__theme-icon`]}>
                        <FontAwesomeIcon className={styles[`header__theme-icon`]} icon={isLightMode ? lm : dm} />
                    </span>
                    <span className={styles[`header__theme-desc`]}>Dark Mode</span>
                </button>
            </div>
        </header>
    )
}

export default Header