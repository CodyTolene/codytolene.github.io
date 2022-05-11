import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { Data, Route, RouterModule } from '@angular/router';
import { DEFAULT_PAGE_META, SPACE_BANNER_OPTIONS } from 'src/core/constants';

/** This will be imported via `~/angular.json` */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let particlesJS: any;

@Component({
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
class IndexPageComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    // Initialize space banner
    try {
      particlesJS('particles', SPACE_BANNER_OPTIONS);
    } catch (error) {
      console.warn('Failed to load particles.');
    }
  }
}

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
