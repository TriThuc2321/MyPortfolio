import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import ThucImg from '~/Assets/Image/DSCF2659.JPG';

import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin, BsArrowLeft } from 'react-icons/bs';
import { ImGoogle2 } from 'react-icons/im';

import classNames from 'classnames/bind';
import styles from './Overview.module.scss';
const cx = classNames.bind(styles);

function Overview() {
    let navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <img className={cx('thuc-img')} src={ThucImg} alt="" />
                <Content />

                <BsArrowLeft className={cx('turn-back')} size="4em" onClick={() => navigate(-1)} />
            </div>
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
            </div>
        </div>
    );
};

const Icons = () => {
    const positionRef = React.useRef({
        x: 0,
        y: 0,
    });

    const popperRef = React.useRef(null);
    const areaRef = React.useRef(null);

    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };

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
            {listIcons &&
                listIcons.map((item, index) => (
                    <Tooltip
                        key={index}
                        title={item.title}
                        placement="bottom"
                        arrow
                        PopperProps={{
                            popperRef,
                            anchorEl: {
                                getBoundingClientRect: () => {
                                    return new DOMRect(
                                        positionRef.current.x,
                                        areaRef.current.getBoundingClientRect().y + 30,
                                        0,
                                        0,
                                    );
                                },
                            },
                        }}
                    >
                        <Box ref={areaRef} onMouseMove={handleMouseMove}>
                            <a href={item.link}>{item.icon}</a>
                        </Box>
                    </Tooltip>
                ))}
        </div>
    );
};

export default Overview;
