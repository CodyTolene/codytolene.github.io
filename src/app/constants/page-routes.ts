import { Route } from '@angular/router';

export const PAGE_ROUTES: { [key in PageUrl]: Route } = {
  '/': {
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
    path: '',
    pathMatch: 'full',
  },
  '/privacy-policy': {
    loadChildren: () =>
      import('src/app/pages/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule,
      ),
    path: 'privacy-policy',
    pathMatch: 'full',
  },
} as const;
