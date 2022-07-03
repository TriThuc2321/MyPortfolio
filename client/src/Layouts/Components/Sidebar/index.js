import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    const url = useLocation();
    const navigate = useNavigate();

    const [classNames, setClassNames] = useState([]);

    useEffect(() => {
        let hash = url.hash;
        if (hash === '#top' || hash === '') {
            setClassNames(['item__selected', 'item', 'item', 'item']);
        } else if (hash === '#about') {
            setClassNames(['item', 'item__selected', 'item', 'item']);
        } else if (hash === '#project') {
            setClassNames(['item', 'item', 'item__selected', 'item']);
        } else if (hash === '#contact') {
            setClassNames(['item', 'item', 'item', 'item__selected']);
        }
    }, [url]);

    const handleClick = (id) => {
        navigate(id, { replace: true });
    };

    return (
        <div className={cx('container')}>
            <div className={cx(classNames[0])} onClick={() => handleClick('/#top')} />
            <div className={cx(classNames[1])} onClick={() => handleClick('/#about')} />
            <div className={cx(classNames[2])} onClick={() => handleClick('/#project')} />
            <div className={cx(classNames[3])} onClick={() => handleClick('/#contact')} />
        </div>
    );
}

export default Sidebar;
