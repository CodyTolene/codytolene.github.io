import { AppRouteRedirect } from 'src/app/types';

export const PAGE_REDIRECTS: Record<string, AppRouteRedirect> = {
  '404': { path: '**', redirectTo: '' },
};
