import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Logo } from 'src/app/components';
import { PAGES } from 'src/app/routing';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[ct-header]',
  imports: [Logo, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly PAGES = PAGES;
}
