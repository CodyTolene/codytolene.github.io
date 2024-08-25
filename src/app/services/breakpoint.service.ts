import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject, distinctUntilChanged, shareReplay } from 'rxjs';
import { BreakpointEnum } from 'src/app/enumerators';

import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class BreakpointService {
  public constructor(private readonly breakpointObserver: BreakpointObserver) {}

  private readonly breakpointStateSubject = new ReplaySubject<BreakpointEnum>(
    1,
  );

  public readonly breakpointState$ = this.breakpointStateSubject
    .asObservable()
    .pipe(distinctUntilChanged(), shareReplay(1));

  private isInitialized = false;

  public initialize(): void {
    if (this.isInitialized) {
      throw new Error('The breakpoint service is already initialized!');
    }
    this.isInitialized = true;

    this.breakpointObserver
      .observe(Object.keys(breakpointMap))
      .pipe(untilDestroyed(this))
      .subscribe((state: BreakpointState) => {
        const mapEntries = Object.entries(breakpointMap);
        for (const [breakpoint, screenSize] of mapEntries) {
          if (state.breakpoints[breakpoint]) {
            this.breakpointStateSubject.next(screenSize);
            break;
          }
        }
      });
  }
}

const breakpointMap: Record<string, BreakpointEnum> = {
  [Breakpoints.XSmall]: BreakpointEnum.MOBILE,
  [Breakpoints.Small]: BreakpointEnum.TABLET,
  [Breakpoints.Medium]: BreakpointEnum.TABLET,
  [Breakpoints.Large]: BreakpointEnum.DESKTOP,
  [Breakpoints.XLarge]: BreakpointEnum.DESKTOP,
};
