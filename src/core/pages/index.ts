import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';
import { DEFAULT_PAGE_META } from 'src/core/constants/default-page-meta';

const template = `
  <section>Index page content.</section>
`;

@Component({
  selector: 'ct-index-page',
  styles: [],
  template,
})
class IndexPageComponent {}

const data: CustomRouteData & Data = {
  meta: {
    author: DEFAULT_PAGE_META.author,
    description: DEFAULT_PAGE_META.description,
    keywords: DEFAULT_PAGE_META.keywords,
    title: DEFAULT_PAGE_META.title,
    trailingTitle: DEFAULT_PAGE_META.trailingTitle,
  },
};

const route: Route = {
  component: IndexPageComponent,
  data,
  path: '',
  pathMatch: 'full',
};

@NgModule({
  declarations: [IndexPageComponent],
  imports: [CommonModule, RouterModule.forChild([route])],
  providers: [],
})
export class IndexModule {}
