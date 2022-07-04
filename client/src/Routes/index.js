import { HeaderLayout } from '~/Layouts';
import { Home, Shinema, Coolzy, Flanner, About } from './../Pages';
import config from '~/Configs';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About, layout: HeaderLayout },
    { path: config.routes.shinema, component: Shinema, layout: HeaderLayout },
    { path: config.routes.coolzy, component: Coolzy, layout: HeaderLayout },
    { path: config.routes.flanner, component: Flanner, layout: HeaderLayout },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
