import CustomButton from '~/Components/CustomButton';

import astronaut from '~/Assets/Image/astronaut.png';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
const cx = classNames.bind(styles);

function Top() {
    return (
        <div className={cx('container')} id="top">
            <div className={cx('rectangle')} />
            <img className={cx('astronaut')} src={astronaut} alt="" />
            <Content />
        </div>
    );
}

const Content = () => {
    return (
        <div className={cx('content')}>
            <h1>TRAN TRI</h1>
            <h1>THUC</h1>
            <p>Hi, I'm Front - end developer</p>
            <div className={cx('line')} />
            <p>This is my portfolio and I hope you enjoy it!</p>

            <CustomButton
                link="https://drive.google.com/drive/folders/1PKnFq45d63zs7BWs3Tw7xCzDyN3-B-Rw?usp=sharing"
                title="Resume"
                newTab={true}
            />
        </div>
    );
};

export default Top;
