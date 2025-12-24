import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointService, NavigationService } from 'src/app/services';
import { scrollTop } from 'src/app/utilities';

import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BodyComponent, FooterComponent, HeaderComponent } from './layout';

@UntilDestroy()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BodyComponent, FooterComponent, HeaderComponent, RouterModule],
  providers: [HttpClient, NavigationService],
  selector: 'ct-app',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public constructor(
    private readonly breakpointService: BreakpointService,
    private readonly navigationService: NavigationService,
  ) {}

  public ngOnInit(): void {
    this.breakpointService.initialize();

    this.navigationService.isNavigatingChanges
      .pipe(untilDestroyed(this))
      .subscribe((isNavigating) => {
        if (!isNavigating) {
          scrollTop();
        }
      });
  }
}
