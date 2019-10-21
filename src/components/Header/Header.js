import React from 'react';
import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import Like from './Like/Like';

import classes from './Header.module.css';

class Header extends React.Component {
    render () {
        return (
            <header className={classes.Header}>
                <Logo />
                <SearchField />
                <Like />
            </header>
        );
    }
}

export default Header;