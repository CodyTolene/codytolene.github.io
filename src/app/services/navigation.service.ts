import {
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  startWith,
} from 'rxjs';

import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public constructor(private readonly router: Router) {}

  public readonly isNavigating$ = this.router.events.pipe(
    filter(
      (event) =>
        event instanceof NavigationStart || event instanceof NavigationEnd,
    ),
    map((event) => event instanceof NavigationStart),
    startWith(false),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
}
