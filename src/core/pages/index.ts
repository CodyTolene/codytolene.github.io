import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ct-index-page',
  styles: [],
  template: ` <section>Index page content.</section> `,
})
class IndexPageComponent {}

@NgModule({
  declarations: [IndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: IndexPageComponent,
        path: '',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
})
export class IndexModule {}
