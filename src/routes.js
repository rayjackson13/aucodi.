import NotFound from 'modules/NotFound';
import Home from 'containers/Home';
import Record from 'modules/Record';

export default [
  {
    path: '/',
    exact: true,
    pageTitle: 'aucodi.',
    pageDesc: 'Your favourite voice memos',
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
