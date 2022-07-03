import ThucImg from '~/Assets/Image/DSCF2659.JPG';
import Grid from '@mui/material/Grid';

import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')} id="about">
            <h1>About me</h1>

            <div className={cx('inner')}>
                <img className={cx('thuc-img')} src={ThucImg} alt="" />
                <Content />
            </div>
        </div>
    );
}

const Content = () => {
    const mySkills = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            name: 'JavaScript',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
            name: 'ReactJs',
        },
        {
            img: 'https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png',
            name: 'Mongodb',
        },
        {
            img: 'https://coursework.vschool.io/content/images/2016/06/jwt.png',
            name: 'Jwt',
        },
        {
            img: 'https://kuon.space/assets/img/html.svg',
            name: 'HTML/CSS',
        },
        {
            img: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png',
            name: 'Material UI',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
            name: 'Photoshop',
        },
        {
            img: 'https://images.squarespace-cdn.com/content/v1/60c9fbbe81a31a2e32a6a39d/1624471133484-2O1GWFL167I1E4PROARE/adobe+illustrator+logo',
            name: 'Illustrator',
        },
    ];

    return (
        <div className={cx('content')}>
            <h2>SKILL SET</h2>
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '120%',
                }}
            >
                {mySkills &&
                    mySkills.map((item, index) => (
                        <Grid item xs={5} key={index}>
                            <SkillItem item={item} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
};

const SkillItem = ({ item }) => {
    return (
        <div className={cx('content-item')}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
        </div>
    );
};

export default About;
