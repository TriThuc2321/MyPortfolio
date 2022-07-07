import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import shinema from '~/Assets/Image/shinema_overview.png';
import shinema1 from '~/Assets/Image/shinema1.png';
import shinema2 from '~/Assets/Image/shinema2.png';
import shinema3 from '~/Assets/Image/shinema3.png';
import shinema4 from '~/Assets/Image/shinema4.png';
import shinema5 from '~/Assets/Image/shinema5.png';

import classNames from 'classnames/bind';
import styles from './Description.module.scss';
const cx = classNames.bind(styles);

function Description() {
    return (
        <div className={cx('container')}>
            <Header />
            <Descriptions />
            <Imgs />
        </div>
    );
}

const Header = () => {
    return (
        <div className={cx('header')}>
            <h1>Description</h1>
        </div>
    );
};

const Descriptions = () => {
    return (
        <div className={cx('description')}>
            <p>
                Shinema is a movie ticket app. The application has basic features of the trailer top movie, popular
                movie, booked tickets... Besides, the application is integrated with chatbot to help users find
                information quickly.
            </p>
        </div>
    );
};

const Imgs = () => {
    const itemData = [
        shinema,
        shinema1,
        shinema2,
        shinema3,
        shinema4,
        shinema5,
        shinema,
        shinema1,
        shinema2,
        shinema3,
        shinema4,
        shinema5,
    ];
    return (
        <div className={cx('imgs')}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <img src={item} alt="" loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};
export default Description;
