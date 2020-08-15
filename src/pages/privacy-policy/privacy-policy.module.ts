import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: PrivacyPolicyComponent,
    path: '',
  },
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class PrivacyPolicyModule {}
