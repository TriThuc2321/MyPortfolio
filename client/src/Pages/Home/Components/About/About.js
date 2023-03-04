import * as React from 'react';
import CustomButton from '~/Components/CustomButton';
import TooltipCustom from '~/Components/Tooltip/Tooltip';

import ThucImg from '~/Assets/Image/DSCF2659.jpg';

import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { ImGoogle2 } from 'react-icons/im';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')} id="about">
            <img className={cx('thuc-img')} src={ThucImg} alt="" />
            <Content />
        </div>
    );
}

const Content = () => {
    return (
        <div className={cx('content')}>
            <h1>About me</h1>
            <p>Hi, I'm Tran Tri Thuc. I'm a senior student of University of Information Technology.</p>
            <p>And welcome to my portfolio!</p>

            <div className={cx('contact')}>
                <Icons />

                <CustomButton link="/about" title="Show me more" />
            </div>
        </div>
    );
};

const Icons = () => {
    const listIcons = [
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/trithuc2321/',
            icon: <BsLinkedin size="2em" />,
        },
        {
            title: 'Facebook',
            link: 'https://www.facebook.com/shin2323/',
            icon: <FaFacebookSquare size="2.3em" />,
        },
        {
            title: '19522321@gm.uit.edu.vn',
            link: 'mailto:19522321@gm.uit.edu.vn',
            icon: <ImGoogle2 size="2em" />,
        },
    ];

    return (
        <div className={cx('icons')}>
            {listIcons && listIcons.map((item, index) => <TooltipCustom key={index} item={item} />)}
        </div>
    );
};

export default About;
