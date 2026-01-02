import { HOME_PAGE_ROUTE } from 'src/app/pages/home/home-page.route';
import { PRIVACY_POLICY_PAGE_ROUTE } from 'src/app/pages/privacy-policy/privacy-policy-page.route';
import { PAGE_REDIRECTS } from 'src/app/routing/page-redirects';
import { AppRoute, AppRouteRedirect } from 'src/app/types';

export const ROUTES: ReadonlyArray<AppRoute | AppRouteRedirect> = [
  HOME_PAGE_ROUTE,
  PRIVACY_POLICY_PAGE_ROUTE,
  PAGE_REDIRECTS['404'],
];
