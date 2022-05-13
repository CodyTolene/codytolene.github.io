import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  public constructor(public readonly breakpointObserver: BreakpointObserver) {}
  private readonly isMobileSubject = new ReplaySubject<boolean>(1);
  public readonly isMobileChanges = this.isMobileSubject.asObservable();

  public set isMobile(value: boolean) {
    this.isMobileSubject.next(value);
  }
}

@UntilDestroy()
@Component({
  selector: 'ct-screen-size-detector',
  template: '',
})
export class ScreenSizeDetectorComponent implements OnInit {
  public constructor(
    public readonly breakpointObserver: BreakpointObserver,
    private readonly screenSizeService: ScreenSizeService
  ) {}

  public ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Handset,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.Tablet,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait,
      ])
      .pipe(untilDestroyed(this))
      .subscribe((state: BreakpointState) => {
        this.screenSizeService.isMobile = state.matches;
      });
  }
}
