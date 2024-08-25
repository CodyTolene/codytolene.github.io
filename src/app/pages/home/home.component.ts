import {
  PARTICLE_GALAXY_BLACK,
  PARTICLE_GALAXY_WHITE,
  PARTICLE_HEXAGONS,
} from 'src/app/constants';
import { BreakpointEnum } from 'src/app/enums';
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
      particlesJS('particle-galaxy-one', PARTICLE_GALAXY_WHITE);
      particlesJS('particle-hexagons-one', PARTICLE_HEXAGONS);
      particlesJS('particle-galaxy-two', PARTICLE_GALAXY_BLACK);
      particlesJS('particle-hexagons-two', PARTICLE_HEXAGONS);
      particlesJS('particle-galaxy-three', PARTICLE_GALAXY_BLACK);
    } catch (error) {
      console.warn(
        `Failed to load particles! Error message: ${error || 'Unknown error'}`,
      );
    }
  }

  protected scrollToElementById(id: string): void {
    scrollToElementById(id);
  }
}
