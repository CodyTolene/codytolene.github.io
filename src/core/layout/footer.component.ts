import { Component } from '@angular/core';

@Component({
  selector: 'ct-footer',
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
    <footer class="container-fluid">
      <div class="row">
        <div class="col">Footer content.</div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
