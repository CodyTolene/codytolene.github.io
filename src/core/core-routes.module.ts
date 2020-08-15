import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: "",
    component: CoreComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/index/index.module")
            .then(module => module.IndexModule),
      },
      {
        path: "privacy-policy",
        loadChildren: () =>
          import("../pages/privacy-policy/privacy-policy.module")
            .then(module => module.PrivacyPolicyModule),
      },
    ]
  },
  {
    path: "404",
    loadChildren: () =>
      import("../pages/not-found/not-found.module")
        .then(module => module.NotFoundModule),
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutesModule { }
