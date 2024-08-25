import { PARTICLE_OPTIONS } from 'src/app/constants';
import { BreakpointEnum } from 'src/app/enumerators';
import { BreakpointService } from 'src/app/services';
import { scrollToElementById } from 'src/app/utilities';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  public constructor(private readonly breakpointService: BreakpointService) {}

  protected readonly BreakpointEnum = BreakpointEnum;
  protected readonly breakpointState$ = this.breakpointService.breakpointState$;

  public ngAfterViewInit(): void {
    try {
      particlesJS('galaxy', PARTICLE_OPTIONS);
    } catch (error) {
      console.warn(
        `Failed to load galaxy. Error message: ${error || 'Unknown error'}`,
      );
    }
  }

  protected scrollToElementById(id: string): void {
    scrollToElementById(id);
  }
}
