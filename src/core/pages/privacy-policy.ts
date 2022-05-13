import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';
import { DEFAULT_PAGE_META } from 'src/core/constants';

@Component({ templateUrl: './privacy-policy.html' })
class PrivacyPolicyPageComponent {}

const data: CustomRouteData & Data = {
  meta: {
    author: DEFAULT_PAGE_META.author,
    description: "Cody Tolene's Portfolio Website Privacy Policy",
    keywords: [
      ...DEFAULT_PAGE_META.keywords,
      'conditions',
      'policy',
      'privacy',
      'privacy-policy',
      'terms',
    ],
    title: 'Privacy Policy',
    trailingTitle: DEFAULT_PAGE_META.trailingTitle,
  },
};

const route: Route = {
  component: PrivacyPolicyPageComponent,
  data,
  path: '',
  pathMatch: 'full',
};

@NgModule({
  declarations: [PrivacyPolicyPageComponent],
  imports: [CommonModule, RouterModule.forChild([route])],
  providers: [],
})
export class PrivacyPolicyModule {}
