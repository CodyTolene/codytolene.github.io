import { META_AUTHOR, META_DEFAULT_KEYWORDS } from 'src/app/constants';
import { AppRoute } from 'src/app/types';

export const PRIVACY_POLICY_PAGE_ROUTE: AppRoute = {
  path: 'privacy-policy',
  pathMatch: 'full',
  data: {
    author: META_AUTHOR,
    description: 'Read the privacy policy.',
    keywords: ['Privacy Policy', ...META_DEFAULT_KEYWORDS],
    title: 'Privacy Policy',
  },
  loadComponent: () => import('src/app/pages').then((c) => c.PrivacyPolicyPage),
};
