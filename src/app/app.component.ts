import { BreakpointService, NavigationService } from 'src/app/services';
import { scrollTop } from 'src/app/utilities';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-app',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  public constructor(
    private readonly breakpointService: BreakpointService,
    private readonly navigationService: NavigationService,
  ) {}

  public ngOnInit(): void {
    this.breakpointService.initialize();

    this.navigationService.isNavigating$.subscribe((isNavigating) => {
      if (!isNavigating) {
        scrollTop();
      }
    });
  }
}
