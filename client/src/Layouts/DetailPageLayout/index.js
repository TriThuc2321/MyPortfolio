import logo from '~/Assets/Image/mLogo.png';
import Footer from '../Components/Footer';
import classNames from 'classnames/bind';
import styles from './DetailPageLayout.module.scss';
const cx = classNames.bind(styles);

function DetailPageLayout({ children }) {
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <img className={cx('logo')} src={logo} alt="My logo" onClick={() => window.location.reload()} />
                </div>
            </header>
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DetailPageLayout;
