import NotFound from 'modules/NotFound';
import Home from 'modules/Home';
import Record from 'modules/Record';

export default [
  {
    path: '/',
    exact: true,
    pageTitle: 'Home',
    component: Home
  },
  {
    path: '/record',
    exact: true,
    pageTitle: 'Home',
    component: Record
  },
  {
    path: '*',
    pageTitle: 'Page Unavailable',
    component: NotFound
  }
];
