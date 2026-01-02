import { Component } from '@angular/core';

import { DateTime } from 'luxon';

import { Logo } from 'src/app/components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'footer[ct-footer]',
  imports: [Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear: number = DateTime.now().year;
}
