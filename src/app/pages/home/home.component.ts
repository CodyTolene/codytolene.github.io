import {
  PARTICLE_GALAXY_BLACK,
  PARTICLE_GALAXY_WHITE,
  PARTICLE_HEXAGONS,
} from 'src/app/constants';
import { BreakpointEnum } from 'src/app/enums';
import { BreakpointService } from 'src/app/services';
import {
  adjustSpeed,
  getRefreshRate,
  scrollToElementById,
} from 'src/app/utilities';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ButtonComponent } from 'src/app/components/button/button.component';
import { IconComponent } from 'src/app/components/icon/icon.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    MatButtonModule,
    MatDividerModule,
    NgOptimizedImage,
  ],
  selector: 'ct-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent implements AfterViewInit {
  public constructor(private readonly breakpointService: BreakpointService) {}

  protected readonly BreakpointEnum = BreakpointEnum;
  protected readonly breakpointState$ = this.breakpointService.breakpointState$;

  public ngAfterViewInit(): void {
    getRefreshRate().then((fps) => {
      // console.log(`Estimated refresh rate: ${fps} Hz`);

      // Get default particles and options
      const pgw = { ...PARTICLE_GALAXY_WHITE };
      const pgb = { ...PARTICLE_GALAXY_BLACK };
      const ph = { ...PARTICLE_HEXAGONS };

      // Reference particle speeds
      const pgwSpeed = pgw.particles.move.speed;
      const pgbSpeed = pgb.particles.move.speed;
      const phSpeed = ph.particles.move.speed;

      // Adjust particle speeds, normalize based on users screen refresh rates
      pgw.particles.move.speed = adjustSpeed(pgwSpeed, fps);
      pgb.particles.move.speed = adjustSpeed(pgbSpeed, fps);
      ph.particles.move.speed = adjustSpeed(phSpeed, fps);

      // Run particles
      try {
        particlesJS('particle-galaxy-one', pgw);
        particlesJS('particle-hexagons-one', ph);
        particlesJS('particle-galaxy-two', pgb);
        particlesJS('particle-hexagons-two', ph);
        particlesJS('particle-galaxy-three', pgb);
      } catch (error) {
        console.warn('Failed to load particles!', error);
      }
    });
  }

  protected scrollToElementById(id: string): void {
    scrollToElementById(id);
  }
}
