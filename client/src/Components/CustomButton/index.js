import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CustomButton.module.scss';
const cx = classNames.bind(styles);

function CustomButton({ link, title }) {
    return (
        <div className={cx('custom-button')}>
            <Link to={link}>
                <span>{title}</span>
                <i></i>
            </Link>
        </div>
    );
}

export default CustomButton;
