import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { DefaultPageMeta } from 'src/shared/constants';

export const routesIndex: Routes = [
  {
    component: IndexComponent,
    data: {
      author: DefaultPageMeta.author,
      description: DefaultPageMeta.description,
      keywords: DefaultPageMeta.keywords,
      title: DefaultPageMeta.title,
    },
    path: '',
    pathMatch: 'full',
  },
];
