import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import TooltipCustom from '~/Components/Tooltip/Tooltip';
import ShinemaImg from '~/Assets/Image/shinema_overview.png';

import { BsArrowLeft } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';

import classNames from 'classnames/bind';
import styles from './Overview.module.scss';
const cx = classNames.bind(styles);

function Overview() {
    let navigate = useNavigate();
    return (
        <div className={cx('container')}>
            <Content />
            <img className={cx('shinema-img')} src={ShinemaImg} alt="" />
            <BsArrowLeft className={cx('turn-back')} size="4em" onClick={() => navigate('/#project')} />
        </div>
    );
}

const Content = () => {
    const listIcons = [
        {
            title: 'Github',
            link: 'https://github.com/khanhlinh1406/Shinema',
            icon: <FaGithubSquare size="2em" />,
        },
        {
            title: 'Document',
            link: 'https://drive.google.com/file/d/1b4XZNqpArAUhzN4tVimLCvtdlU8yWPzN/view?usp=sharing',
            icon: <MdPictureAsPdf size="2.3em" />,
        },
    ];

    return (
        <div className={cx('content')}>
            <h1>Shinema</h1>
            <p>The web site for movie tickets.</p>

            <div className={cx('icons')}>
                {listIcons && listIcons.map((item, index) => <TooltipCustom key={index} item={item} />)}
            </div>
        </div>
    );
};

export default Overview;
