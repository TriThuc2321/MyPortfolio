import Project from './Components/Project';
import Top from './Components/Top';
import About from './Components/About';
import Contact from './Components/Contact';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <Top />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default Home;
