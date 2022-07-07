import * as React from 'react';

import Overview from './Components/Overview';
import Concept from './Components/Concept';
import Description from './Components/Description/Description';

import classNames from 'classnames/bind';
import styles from './Shinema.module.scss';
const cx = classNames.bind(styles);

function Shinema() {
    return (
        <div className={cx('container')}>
            <Overview />
            <Concept />
            <Description />
        </div>
    );
}

export default Shinema;
