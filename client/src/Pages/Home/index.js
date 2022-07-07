import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import Project from './Components/Project';
import Top from './Components/Top';
import About from './Components/About';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    const url = useLocation();
    const navigate = useNavigate();

    const [currentComponent, setCurrentComponent] = useState();

    useEffect(() => {
        let hash = url.hash;
        if (hash === '#top' || hash === '') {
            setCurrentComponent(<Top />);
        } else if (hash === '#about') {
            setCurrentComponent(<About />);
        } else if (hash === '#project') {
            setCurrentComponent(<Project />);
        }
    }, [url]);

    const upHandle = () => {
        let hash = url.hash;
        if (hash === '#project') {
            navigate('#about', { replace: true });
        } else if (hash === '#about') {
            navigate('#top', { replace: true });
        }
    };

    const downHandle = () => {
        let hash = url.hash;
        if (hash === '#top' || hash === '') {
            navigate('#about', { replace: true });
        } else if (hash === '#about') {
            navigate('#project', { replace: true });
        }
    };

    return (
        <div className={cx('container')}>
            <ReactScrollWheelHandler upHandler={() => upHandle()} downHandler={() => downHandle()}>
                {currentComponent}
            </ReactScrollWheelHandler>
        </div>
    );
}

export default Home;
