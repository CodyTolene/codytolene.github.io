import {
  Component,
  AfterViewInit,
  HostListener,
  OnInit,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from 'src/services/browser/window.services';

@Component({
  selector: 'app-navigation',
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  public constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(WINDOW) private readonly window: Window,
  ) {}
  public distanceFromTopOfPage = 0;

  @HostListener('window:scroll', []) public onScroll(): void {
    this.distanceFromTopOfPage = this.getDistanceFromTopOfPage();
  }

  public ngOnInit(): void {
    this.distanceFromTopOfPage = this.getDistanceFromTopOfPage();
  }

  private getDistanceFromTopOfPage(): number {
    return (
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0
    );
  }
}
