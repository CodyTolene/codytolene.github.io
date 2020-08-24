import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { DefaultPageMeta } from 'src/shared/constants';

export const routesNotFound: Routes = [
  {
    component: NotFoundComponent,
    data: {
      author: DefaultPageMeta.author,
      description: `The page you're looking for cannot be found.`,
      keywords: DefaultPageMeta.keywords,
      title: '404: Page Not Found',
    },
    path: '',
  },
];
