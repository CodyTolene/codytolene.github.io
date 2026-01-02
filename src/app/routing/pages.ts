import { PageName, PageUrl } from 'src/app/types';

/** The page name and the corresponding route URL records. */
export const PAGES: Record<PageName, PageUrl> = {
  Home: '',
  'Page Not Found': '**',
  'Privacy Policy': 'privacy-policy',
};
