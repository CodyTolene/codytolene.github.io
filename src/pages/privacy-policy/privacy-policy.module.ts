import { NgModule } from '@angular/core';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';
import { routesPrivacyPolicy } from './privacy-policy.routes';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [RouterModule.forChild(routesPrivacyPolicy)],
  providers: [],
})
export class PrivacyPolicyModule {}
