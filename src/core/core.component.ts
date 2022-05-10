import { Component } from '@angular/core';

@Component({
  selector: 'ct-core',
  styles: [],
  template: `
    <ct-header></ct-header>
    <ct-body>
      <router-outlet></router-outlet>
    </ct-body>
    <ct-footer></ct-footer>
  `,
})
export class CoreComponent {}
