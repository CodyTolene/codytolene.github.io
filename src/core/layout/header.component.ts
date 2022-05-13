import { Component } from '@angular/core';

@Component({
  selector: 'ct-header',
  styles: [
    `
      :host,
      header {
        width: 100%;
        height: var(--header-height);
        z-index: 999;
        overflow: hidden;
        display: block;
        position: relative;
      }

      header {
        position: fixed;
        top: 0;
        width: 100%;

        .row {
          height: var(--header-height);

          > div,
          ct-navbar {
            height: var(--header-height);
            max-height: var(--header-height);
          }
        }
      }

      ct-navbar {
        float: right;
      }
    `,
  ],
  template: `
    <header class="container-fluid darer-background">
      <div class="row">
        <div class="col-8 col-xl-5 offset-xl-1 logo-container">
          <ct-logo></ct-logo>
        </div>
        <div class="col-4 col-xl-5">
          <ct-navbar></ct-navbar>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
