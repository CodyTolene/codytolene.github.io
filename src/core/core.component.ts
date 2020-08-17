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
import { SEOService } from './seo/seo.service';

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`,
})
export class CoreComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly serviceWorkerUpdate: SwUpdate,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly seo: SEOService,
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
      .subscribe((routeData) => {
        if (routeData.title) {
          this.seo.updateTitle(routeData.title, {
            trailingTitle: 'Cody Tolene',
          });
        } else {
          throw new Error('Failed to set page title.');
        }
        if (routeData.description) {
          this.seo.updateMetaDescription(routeData.description);
        } else {
          console.warn('Failed to set page description.');
        }
      });

    // Google analytics
    this.routerNavigationEndChanges
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((event) =>
        this.seo.sendGoogleAnalyticsPageView(
          event.url,
          event.urlAfterRedirects,
        ),
      );
  }

  public ngOnDestroy(): void {
    // Needed for `takeUntil(componentDestroyed(this))`
  }
}
