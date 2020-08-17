import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { defaultPageMeta } from 'src/shared/constants';

export const routesIndex: Routes = [
  {
    component: IndexComponent,
    data: {
      author: defaultPageMeta.author,
      description: defaultPageMeta.description,
      keywords: defaultPageMeta.keywords,
      title: defaultPageMeta.title,
    },
    path: '',
  },
];
