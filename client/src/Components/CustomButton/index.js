import classNames from 'classnames/bind';
import styles from './CustomButton.module.scss';
const cx = classNames.bind(styles);

function CustomButton({ link, title }) {
    return (
        <div className={cx('custom-button')}>
            <a href={link}>
                <span>{title}</span>
                <i></i>
            </a>
        </div>
    );
}

export default CustomButton;
