import { firstValueFrom, shareReplay } from 'rxjs';
import { NavigationService } from 'src/app/services';
import { scrollToElementById, scrollTop } from 'src/app/utilities';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  selector: 'ct-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public constructor(private readonly navigationService: NavigationService) {}

  protected readonly scrollTop = scrollTop;

  protected readonly currentUrl$ = this.navigationService.currentUrl$.pipe(
    shareReplay(1),
  );

  private readonly isNavigating$ = this.navigationService.isNavigating$;

  protected async scrollToElementById(id: string): Promise<void> {
    const isNavigating = await firstValueFrom(this.isNavigating$);
    if (isNavigating) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      return this.scrollToElementById(id);
    }
    scrollToElementById(id);
  }
}
