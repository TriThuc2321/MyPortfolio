import shinema_detail from '~/Assets/Image/shinema_detail_mockup.png';

import classNames from 'classnames/bind';
import styles from './Concept.module.scss';
const cx = classNames.bind(styles);

function Concept() {
    return (
        <div className={cx('container')}>
            <Header />
            <Description />

            <img className={cx('detail-shinema-img')} src={shinema_detail} alt="" />
        </div>
    );
}

const Header = () => {
    return (
        <div className={cx('header')}>
            <h1>Overview</h1>
        </div>
    );
};

const Description = () => {
    let data = [
        {
            title: 'Role',
            description: 'Team leader/Coding',
        },
        {
            title: 'Date',
            description: '2/2022 – 6/2022',
        },
        {
            title: 'Tech stack',
            description: 'ReactJs, Html, Css, Material UI,\nNodeJs (ExpressJS), MongoDb, JWT, Dialogflow',
        },
    ];
    return (
        <div className={cx('description')}>
            {data &&
                data.map((item, index) => (
                    <div className={cx('item')} key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
        </div>
    );
};

export default Concept;
