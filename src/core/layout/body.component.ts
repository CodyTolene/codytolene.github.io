import { Component } from '@angular/core';

@Component({
  selector: 'ct-body',
  styles: [
    `
      :host {
        position: relative;
        top: var(--header-height);
      }
    `,
  ],
  template: '<router-outlet></router-outlet>',
})
export class BodyComponent {}
