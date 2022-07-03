import ThucImg from '~/Assets/Image/DSCF2659.JPG';

import { useNavigate } from 'react-router-dom';

import { FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { ImGoogle2 } from 'react-icons/im';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')} id="about">
            <div className={cx('inner')}>
                <img className={cx('thuc-img')} src={ThucImg} alt="" />
                <Content />
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

            <Icons />
        </div>
    );
};

const Icons = () => {
    let navigate = useNavigate();
    return (
        <div className={cx('icons')}>
            <FaFacebookSquare size="2.3em" />
            <BsLinkedin size="2em" />
            <ImGoogle2 size="2em" />
        </div>
    );
};

export default About;
