import NotFound from 'containers/NotFound';
import Home from 'containers/Home';
import Memos from 'containers/Memos';
import Auth from 'containers/Auth';

export default [
    {
        path: '/app',
        exact: true,
        pageTitle: 'aucodi.',
        pageDesc: 'Your favourite voice memos',
        component: Home
    },
    {
        path: '/app/:name',
        component: Memos
    },
    {
        path: '/auth',
        exact: true,
        component: Auth 
    },
    // {
    //     path: '/record',
    //     exact: true,
    //     pageTitle: 'Home',
    //     component: Record
    // },
    {
        path: '*',
        pageTitle: 'Page Unavailable',
        component: NotFound
    }
];
