import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { DefaultPageMeta } from 'src/shared/constants';

export const routesPrivacyPolicy: Routes = [
  {
    component: PrivacyPolicyComponent,
    data: {
      author: DefaultPageMeta.author,
      description: "Cody Tolene's Portfolio Website Privacy Policy",
      keywords: DefaultPageMeta.keywords,
      title: 'Privacy Policy',
    },
    path: '',
  },
];
