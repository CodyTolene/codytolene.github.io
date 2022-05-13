import { Component } from '@angular/core';

@Component({
  selector: 'ct-logo',
  styles: [
    `
      :host {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;

        .cody-tolene-logo {
          display: inline-block;
          font-family: var(--font-family-bungee);
          font-size: 1.75em;
          color: var(--theme_light_green_light_tint);
          line-height: 175%;
          height: 100%;
        }
      }
    `,
  ],
  template: `
    <a class="cody-tolene-logo" [routerLink]="['/']"> Cody Tolene </a>
  `,
})
export class LogoComponent {}
