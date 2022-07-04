import classNames from 'classnames/bind';
import styles from './HeaderLayout.module.scss';
const cx = classNames.bind(styles);

function HeaderLayout({ children }) {
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <a className={cx('logo')} href="./">
                        Thuc
                    </a>
                </div>
            </header>
            <div>{children}</div>
        </div>
    );
}

export default HeaderLayout;
