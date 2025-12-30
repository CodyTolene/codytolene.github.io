import {
  META_AUTHOR,
  META_DEFAULT_KEYWORDS,
  META_DESCRIPTION,
} from 'src/app/constants';
import { AppRoute } from 'src/app/types';

export const HOME_PAGE_ROUTE: AppRoute = {
  path: '',
  pathMatch: 'full',
  data: {
    author: META_AUTHOR,
    description: META_DESCRIPTION,
    keywords: ['Home', ...META_DEFAULT_KEYWORDS],
    title: 'Home',
  },
  loadComponent: () => import('src/app/pages').then((c) => c.HomePage),
};
