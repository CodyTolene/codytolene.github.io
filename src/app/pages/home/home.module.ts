import { ButtonModule, IconModule } from 'src/app/components';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';

const PAGE_ROUTE: PageRoute = {
  canActivate: [],
  component: HomeComponent,
  data: {
    meta: {
      author: 'Cody Tolene',
      description: "Cody Tolene's Portfolio Website.",
      keywords: ['cody', 'tolene', 'portfolio', 'about', 'resume'],
      title: 'Portfolio',
    },
  },
  path: '',
  pathMatch: 'full',
};

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ButtonModule,
    CommonModule,
    IconModule,
    MatButtonModule,
    MatDividerModule,
    NgOptimizedImage,
    RouterModule.forChild([PAGE_ROUTE]),
  ],
})
export class HomeModule {}
