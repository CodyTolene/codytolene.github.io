import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: PrivacyPolicyComponent,
    data: {
      description: "Cody Tolene's Portfolio Website",
      title: 'Privacy Policy',
    },
    path: '',
  },
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class PrivacyPolicyModule {}
