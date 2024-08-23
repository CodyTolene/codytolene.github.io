import { PAGE_ROUTES } from 'src/app/constants';

import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';

const routeOptions: ExtraOptions = {
  enableTracing: false,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          children: Object.values(PAGE_ROUTES),
        },
        {
          path: '**',
          redirectTo: '/',
        },
      ],
      routeOptions,
    ),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRouting {}
