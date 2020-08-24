import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEOService } from 'src/services/seo';

const routes: Routes = [
  {
    children: [
      {
        loadChildren: () =>
          import('../pages/index/index.module').then(
            (module) => module.IndexModule,
          ),
        path: '',
        pathMatch: 'full',
      },
      {
        loadChildren: () =>
          import('../pages/privacy-policy/privacy-policy.module').then(
            (module) => module.PrivacyPolicyModule,
          ),
        path: 'privacy-policy',
      },
    ],
    path: '',
  },
  {
    loadChildren: () =>
      import('../pages/not-found/not-found.module').then(
        (module) => module.NotFoundModule,
      ),
    path: '404',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  providers: [SEOService],
})
export class CoreRoutesModule {}
