import * as React from 'react';
import CustomButton from '~/Components/CustomButton/CustomButton';

import Shinema from '~/Assets/Image/shinema_overview.png';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';
const cx = classNames.bind(styles);

function Project() {
    return (
        <div className={cx('container')}>
            <Content />
            <img className={cx('thuc-img')} src={Shinema} alt="" />
        </div>
    );
}

const Content = () => {
    return (
        <div className={cx('content')}>
            <h1>Shinema</h1>
            <p>The web site for movie tickets.</p>
            <CustomButton link="/shinema" title="Show website more" />
        </div>
    );
};

export default Project;
