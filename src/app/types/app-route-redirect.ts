import { AppRoute } from 'src/app/types';

export type AppRouteRedirect = Omit<AppRoute, 'data' | 'path'> & {
  path: string;
};
