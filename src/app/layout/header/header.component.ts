import { firstValueFrom, shareReplay } from 'rxjs';
import { ButtonModule } from 'src/app/components';
import { BreakpointEnum } from 'src/app/enums';
import { BreakpointService, NavigationService } from 'src/app/services';
import { scrollToElementById, scrollTop } from 'src/app/utilities';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, CommonModule, MatMenuModule, RouterModule],
  selector: 'ct-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public constructor(
    private readonly breakpointService: BreakpointService,
    private readonly navigationService: NavigationService,
  ) {}

  protected readonly scrollTop = scrollTop;

  protected readonly currentUrlChanges =
    this.navigationService.currentUrlChanges.pipe(shareReplay(1));

  protected readonly BreakpointEnum = BreakpointEnum;
  protected readonly breakpointState$ =
    this.breakpointService.breakpointState$.pipe(shareReplay(1));

  protected async scrollToElementById(id: string): Promise<void> {
    const isNavigating = await firstValueFrom(
      this.navigationService.isNavigatingChanges,
    );
    if (isNavigating) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      return this.scrollToElementById(id);
    }
    scrollToElementById(id);
  }
}
