import { Routes } from '@angular/router';

const homePath = '';

export const routes: Routes = [
  {
    path: homePath,
    loadComponent: () =>
      import('src/app/pages/home/home.component').then((c) => c.HomeComponent),
    data: {
      meta: {
        author: 'Cody Tolene',
        description: "Cody Tolene's Portfolio Website.",
        keywords: ['cody', 'tolene', 'portfolio', 'about', 'resume'],
        title: 'Portfolio',
      },
    },
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('src/app/pages/privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent,
      ),
    data: {
      meta: {
        author: 'Cody Tolene',
        description: 'Privacy Policy',
        keywords: ['cody', 'tolene', 'portfolio', 'about', 'resume'],
        title: 'Privacy Policy',
      },
    },
  },
  { path: '', redirectTo: homePath, pathMatch: 'full' },
  { path: '**', redirectTo: homePath },
];
