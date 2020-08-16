import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { componentDestroyed } from '../shared/utilities';
import {
  takeUntil,
  filter,
  map,
  mergeMap,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
interface GTagEvent {
  page_location: string | null;
  page_path: string | null;
  page_title: string | null;
  send_page_view: boolean | null;
}

declare let gtag;

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`,
})
export class CoreComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly serviceWorkerUpdate: SwUpdate,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title,
  ) {
    if (environment.production) {
      // Update the service worker on every construct
      // This fixes and issue with GitHub pages 404 redirect into Angular
      this.serviceWorkerUpdate.activateUpdate();
    }
  }

  public readonly routerNavigationEndChanges = this.router.events.pipe(
    map((event) => (event instanceof NavigationEnd ? event : null)),
    filter<NavigationEnd>(Boolean),
    distinctUntilChanged((previous, current) => previous.url !== current.url),
  );

  public readonly routeDataChanges = this.routerNavigationEndChanges.pipe(
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data),
  );

  public ngOnInit(): void {
    // Dynamically set page title from data on route
    this.routeDataChanges
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((routeData) =>
        this.title.setTitle(routeData.title + ' - Cody Tolene'),
      );

    // Google analytics
    this.routerNavigationEndChanges
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((event) => this.sendGoogleAnalyticsPageView(event));
  }

  public ngOnDestroy(): void {
    // Needed for `takeUntil(componentDestroyed(this))`
  }

  private sendGoogleAnalyticsPageView(event: NavigationEnd): void {
    if (environment.production) {
      try {
        const gtagEvent: GTagEvent = {
          page_location: event.url,
          page_path: event.urlAfterRedirects,
          page_title: null,
          send_page_view: true,
        };
        gtag('js', new Date());
        gtag('config', 'UA-42346076-7', gtagEvent);
      } catch (error) {
        console.warn('Error communicating with Google Analytics', error);
      }
    }
  }
}
