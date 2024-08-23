import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrivacyPolicyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';

const ROUTE: PageRoute = {
  canActivate: [],
  component: PrivacyPolicyComponent,
  data: {
    meta: {
      author: 'Cody Tolene',
      description: 'Privacy Policy',
      keywords: ['cody', 'tolene', 'portfolio', 'about', 'resume'],
      title: 'Privacy Policy',
    },
  },
  path: '',
  pathMatch: 'full',
};

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, RouterModule.forChild([ROUTE])],
})
export class PrivacyPolicyModule {}
