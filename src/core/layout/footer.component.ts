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
    <footer
      class="
        container-fluid
        justify-content-between
        darer-background
        text-center
        white-text
      "
    >
      <div class="row pb-3 pt-2">
        <div class="col-12">
          <ct-logo></ct-logo>
        </div>
        <div class="col-12">
          <span>Copyright &copy; Cody Tolene 2019 - {{ currentYear }}</span>
        </div>
        <div class="col-12 pt-1">
          Trademark images by
          <a
            href="https://fontawesome.com/"
            aria-label="Font Awesome"
            title="Font Awesome"
            rel="nofollow noreferrer noopener"
            target="_blank"
          >
            Font Awesome
          </a>
          &copy;{{ currentYear }}
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  public readonly currentYear = new Date().getFullYear();
}
