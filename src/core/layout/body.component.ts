import { Component } from '@angular/core';

@Component({
  selector: 'ct-body',
  styles: [
    `
      :host {
        display: block;
        position: relative;
        width: 100%;
      }
    `,
  ],
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class BodyComponent {}
