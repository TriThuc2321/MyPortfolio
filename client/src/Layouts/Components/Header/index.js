import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a className={cx('logo')} href="./">
                    Thuc
                </a>
                <NavText />
            </div>
        </header>
    );
}

const NavText = () => {
    return (
        <div className={cx('nav-text')}>
            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#top">Home</a>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#about">About</a>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#project">Project</a>
            </div>

            <div className={cx('item')}>
                <div className={cx('item-background')} />
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;
