import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/core/services/screen-size.service';

@Component({
  selector: 'ct-navbar',
  styles: [
    `
      :host > nav {
        display: flex;
        flex-basis: auto;
        flex-grow: 1;
        align-items: center;
        font-weight: 300;
        color: var(--white);
        padding: 1rem;

        ul {
          flex-direction: row;
          text-transform: uppercase;
          display: flex;
          list-style: none;
          margin: 0;

          li {
            display: flex;
            flex-direction: column;
            list-style: none;
            display: list-item;

            button.menu {
              width: var(--header-height);
              height: var(--header-height);

              mat-icon {
                font-size: 2rem;
              }
            }

            a {
              font-weight: 500;
              padding-right: 1rem;
              padding-left: 1rem;
              color: var(--white);

              &:hover {
                color: var(--theme_light_green_light_tint) !important;
                text-decoration: overline;
              }

              &:visited {
                color: var(--white);
              }
            }
          }
        }
      }
      // Applied for Mobile - 1280px or less (< Bootstrap XL).
      @media only screen and (max-width: 1280px) {
        :host > nav {
          padding: 0;
        }
      }
    `,
  ],
  template: `
    <nav>
      <ng-container *ngIf="isMobileChanges | async; else defaultTemplate">
        <ul>
          <li>
            <button
              class="menu"
              mat-icon-button
              [matMenuTriggerFor]="beforeMenu"
            >
              <mat-icon color="accent" [inline]="true">menu_open</mat-icon>
            </button>
          </li>
        </ul>
        <mat-menu #beforeMenu="matMenu" xPosition="before">
          <ng-container *ngTemplateOutlet="defaultLinkTemplate"></ng-container>
        </mat-menu>
      </ng-container>
      <ng-template #defaultTemplate>
        <ng-container *ngTemplateOutlet="defaultLinkTemplate"></ng-container>
      </ng-template>
      <ng-template #defaultLinkTemplate>
        <ul>
          <li mat-menu-item>
            <a href="#services">Services</a>
          </li>
          <li mat-menu-item>
            <a href="#about">About</a>
          </li>
          <li mat-menu-item>
            <a href="#resume">Resume</a>
          </li>
          <li mat-menu-item>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </ng-template>
    </nav>
  `,
})
export class NavbarComponent {
  public constructor(private readonly screenSizeService: ScreenSizeService) {}

  public readonly isMobileChanges = this.screenSizeService.isMobileChanges;
}
