import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CustomButton.module.scss';
const cx = classNames.bind(styles);

function CustomButton({ link, title, newTab }) {
    return (
        <div className={cx('custom-button')}>
            {newTab ? (
                <a target="_blank" href={link} rel="noreferrer">
                    <span>{title}</span>
                    <i></i>
                </a>
            ) : (
                <Link to={link} replace>
                    <span>{title}</span>
                    <i></i>
                </Link>
            )}
        </div>
    );
}

export default CustomButton;
