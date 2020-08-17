import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { defaultPageMeta } from 'src/shared/constants';

export const routesPrivacyPolicy: Routes = [
  {
    component: PrivacyPolicyComponent,
    data: {
      author: defaultPageMeta.author,
      description: "Cody Tolene's Portfolio Website Privacy Policy",
      keywords: defaultPageMeta.keywords,
      title: 'Privacy Policy',
    },
    path: '',
  },
];
