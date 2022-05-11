import { Component } from '@angular/core';

@Component({
  selector: 'ct-header',
  styles: [
    `
      :host,
      header {
        width: 100%;
        height: 50px;
        background: var(--theme_dark_gray);
        z-index: 999;
      }
      header {
        position: fixed;
        top: 0;
        width: 100%;

        .row {
          height: 50px;

          .links {
            text-align: end;
          }
        }
      }
    `,
  ],
  template: `
    <header class="container-fluid">
      <div class="row">
        <div class="col-6 col-md-4">CODY TOLENE</div>
        <div class="col-6 col-md-8 links">Links</div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
