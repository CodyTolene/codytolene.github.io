import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

type PagePaths = 'index' | 'privacy-policy';

const pages: { [key in PagePaths]: Route } = {
  index: {
    loadChildren: () =>
      import('src/core/pages/index').then((module) => module.IndexModule),
    path: '',
    pathMatch: 'full',
  },
  'privacy-policy': {
    loadChildren: () =>
      import('src/core/pages/privacy-policy').then(
        (module) => module.PrivacyPolicyModule
      ),
    path: 'privacy-policy',
  },
};

const routes: Routes = [
  {
    path: '',
    children: [pages['index'], pages['privacy-policy']],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
