import { DetailPageLayout } from '~/Layouts';
import { Home, Shinema, Coolzy, Flanner, About } from './../Pages';
import config from '~/Configs';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About, layout: DetailPageLayout },
    { path: config.routes.shinema, component: Shinema, layout: DetailPageLayout },
    { path: config.routes.coolzy, component: Coolzy, layout: DetailPageLayout },
    { path: config.routes.flanner, component: Flanner, layout: DetailPageLayout },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
