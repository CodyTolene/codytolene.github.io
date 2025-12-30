import { PageUrl } from 'src/app/types';

export type AppRoute = Omit<import('@angular/router').Route, 'data' | 'path' | 'redirectTo'> & {
  data?: import('src/app/models').PageData;
  path: PageUrl;
  redirectTo?: PageUrl;
};
