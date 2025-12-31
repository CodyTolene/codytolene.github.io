import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PAGES } from 'src/app/routing';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[cat-header]',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly PAGES = PAGES;
}
