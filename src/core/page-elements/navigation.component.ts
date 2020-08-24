import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { WINDOW } from 'src/services/browser';

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
  public readonly faBars = faBars;

  private readonly windowWidthSubject = new BehaviorSubject<number>(
    this.window.innerWidth,
  );
  public readonly isMobileDeviceWindowWidth = this.windowWidthSubject.pipe(
    map((windowWidth) => windowWidth < 992),
  );

  @HostListener('window:scroll', []) public onScroll(): void {
    this.distanceFromTopOfPage = this.getDistanceFromTopOfPage();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event): void {
    this.windowWidthSubject.next(event.target.innerWidth);
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
