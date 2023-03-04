import React, { useState } from 'react';
import logo from '~/Assets/Image/mLogo.png';

import { HiMenuAlt3 } from 'react-icons/hi';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={logo} alt="My logo" onClick={() => window.location.reload()} />
                <NavText />
                <Menu />
            </div>
        </header>
    );
}

const NavText = () => {
    return (
        <div className={cx('nav-text')}>
            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#top">Home</a>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#about">About</a>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#project">Project</a>
            </div>
        </div>
    );
};

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClose = () => {
        setToggleMenu(false);
    };

    return (
        <div className={cx('menu')}>
            <HiMenuAlt3 size="2em" onClick={() => setToggleMenu(!toggleMenu)} onBlur={() => console.log('blur')} />
            {toggleMenu && <ListMenu handleClose={handleClose} />}
        </div>
    );
};

const ListMenu = ({ handleClose }) => {
    return (
        <div className={cx('list-menu')}>
            <a href="#top" onClick={handleClose}>
                Home
            </a>
            <a href="#about" onClick={handleClose}>
                About
            </a>
            <a href="#project" onClick={handleClose}>
                Project
            </a>
        </div>
    );
};

export default Header;
