import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header>
            <h1>
                <a href="/">
                    Where in the world?
                </a>
            </h1>

            <div>
                <span>
                    <FontAwesomeIcon icon={faMoon} />
                </span>
                <span>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header