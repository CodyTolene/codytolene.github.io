import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ct-privacy-policy-page',
  styles: [],
  template: ` <section>Privacy policy page content.</section> `,
})
class PrivacyPolicyPageComponent {}

@NgModule({
  declarations: [PrivacyPolicyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: PrivacyPolicyPageComponent,
        path: '',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
})
export class PrivacyPolicyModule {}
