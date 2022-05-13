import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  shareReplay,
  startWith,
} from 'rxjs';
import { MetaService } from 'src/core/services/meta.service';
import { isNonEmptyObject } from 'src/core/utilities/type-validation';
import { GoogleAnalyticsService } from 'src/core/services/google-analytics.service';

@UntilDestroy()
@Component({
  selector: 'ct-core',
  styles: [],
  template: `
    <ct-header></ct-header>
    <ct-body>
      <router-outlet></router-outlet>
    </ct-body>
    <ct-footer></ct-footer>
    <ct-screen-size-detector></ct-screen-size-detector>
  `,
  providers: [GoogleAnalyticsService, MetaService],
})
export class CoreComponent implements OnInit {
  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly googleAnalytics: GoogleAnalyticsService,
    private readonly meta: MetaService,
    private readonly router: Router
  ) {}

  public readonly routerNavigationEndChanges = this.router.events.pipe(
    map((event) => event instanceof NavigationEnd),
    filter((isNavigationEndEvent) => !!isNavigationEndEvent),
    shareReplay(1)
  );

  public readonly routeDataChanges = this.routerNavigationEndChanges.pipe(
    startWith(null),
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data),
    distinctUntilChanged()
  );

  public async ngOnInit(): Promise<void> {
    // Dynamically set page data and meta on route data changes
    this.routeDataChanges
      .pipe(filter(isNonEmptyObject), untilDestroyed(this))
      .subscribe((routeData) => {
        try {
          // Get data from route
          const data: (CustomRouteData & Data) | null =
            (routeData as unknown as CustomRouteData & Data) ?? null;
          if (!data) {
            throw new Error('Failed to fetch route data.');
          }

          // Get meta from route data
          const meta: PageMeta | null = data.meta ?? null;
          if (!meta) {
            throw new Error('Failed to fetch route meta.');
          }

          // Set page meta
          this.meta.setPageAuthor(meta.author);
          this.meta.setPageTitle(meta.title, meta.trailingTitle);
          this.meta.setPageDescription(meta.description);
          this.meta.setPageKeywords(meta.keywords);
        } catch (error: unknown) {
          console.error(error);
        } finally {
          // Track page view in Google Analytics
          this.googleAnalytics.trackPageView({
            pageTitle: this.meta.getPageTitle(),
          });
        }
      });
  }
}
