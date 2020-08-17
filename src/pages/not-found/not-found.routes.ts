import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { defaultPageMeta } from 'src/shared/constants';

export const routesNotFound: Routes = [
  {
    component: NotFoundComponent,
    data: {
      author: defaultPageMeta.author,
      description: `The page you're looking for cannot be found.`,
      keywords: defaultPageMeta.keywords,
      title: '404: Page Not Found',
    },
    path: '',
  },
];
