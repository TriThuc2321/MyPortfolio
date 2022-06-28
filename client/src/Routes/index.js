import { HeaderLayout } from '~/Layouts';
import { Home, Shinema, Coolzy, Flanner, About, Contact } from './../Pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shinema', component: Shinema, layout: HeaderLayout },
    { path: '/coolzy', component: Coolzy, layout: HeaderLayout },
    { path: '/flanner', component: Flanner, layout: HeaderLayout },
    { path: '/about', component: About, layout: HeaderLayout },
    { path: '/contact', component: Contact, layout: HeaderLayout },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
