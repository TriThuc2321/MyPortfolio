import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Overview from './Component/Overview';
import Skill from './Component/Skill';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={cx('container')}>
            <Overview />
            <Skill />
        </div>
    );
}

export default About;
