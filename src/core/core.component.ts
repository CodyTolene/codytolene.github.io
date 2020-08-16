import { Component, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { componentDestroyed } from '../shared/utilities';
import { takeUntil } from 'rxjs/operators';

declare let gtag;

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`,
})
export class CoreComponent implements OnDestroy {
  public constructor(
    private readonly serviceWorkerUpdate: SwUpdate,
    private readonly router: Router,
  ) {
    if (environment.production) {
      // Update the service worker on every construct
      // This fixes and issue with GitHub pages 404 redirect into Angular
      this.serviceWorkerUpdate.activateUpdate();

      // Google analytics
      this.router.events
        .pipe(takeUntil(componentDestroyed(this)))
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            console.log(event.urlAfterRedirects);
            gtag('js', new Date());
            gtag('config', 'UA-42346076-7', {
              page_path: event.urlAfterRedirects,
            });
          }
        });
    }
  }

  public ngOnDestroy(): void {
    // Needed for `takeUntil(componentDestroyed(this))`
  }
}
