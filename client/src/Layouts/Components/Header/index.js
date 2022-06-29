import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
            </div>
        </header>
    );
}

export default Header;
