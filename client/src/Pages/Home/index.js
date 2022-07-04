import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Project from './Components/Project';
import Top from './Components/Top';
import About from './Components/About';
import Contact from './Components/Contact';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    const url = useLocation();

    const [currentComponent, setCurrentComponent] = useState();

    useEffect(() => {
        let hash = url.hash;
        if (hash === '#top' || hash === '') {
            setCurrentComponent(<Top />);
        } else if (hash === '#about') {
            setCurrentComponent(<About />);
        } else if (hash === '#project') {
            setCurrentComponent(<Project />);
        } else if (hash === '#contact') {
            setCurrentComponent(<Contact />);
        }
    }, [url]);

    return <div className={cx('container')}>{currentComponent}</div>;
}

export default Home;
