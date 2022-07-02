import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    const url = useLocation();
    const [classNames, setClassNames] = useState([]);

    useEffect(() => {
        let hash = url.hash;

        if (hash === '#top' || hash === undefined) {
            setClassNames(['item__selected', 'item', 'item', 'item']);
        } else if (hash === '#about') {
            setClassNames(['item', 'item__selected', 'item', 'item']);
        } else if (hash === '#project') {
            setClassNames(['item', 'item', 'item__selected', 'item']);
        } else if (hash === '#contact') {
            setClassNames(['item', 'item', 'item', 'item__selected']);
        }
    }, [url]);

    return (
        <div className={cx('container')}>
            <div className={cx(classNames[0])}></div>
            <div className={cx(classNames[1])}></div>
            <div className={cx(classNames[2])}></div>
            <div className={cx(classNames[3])}></div>
        </div>
    );
}

export default Sidebar;
