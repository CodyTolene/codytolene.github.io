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
  standalone: false,
})
export class HomeComponent implements AfterViewInit {
  public constructor(private readonly breakpointService: BreakpointService) {}

  protected readonly BreakpointEnum = BreakpointEnum;
  protected readonly breakpointState$ = this.breakpointService.breakpointState$;

  public ngAfterViewInit(): void {
    this.getRefreshRate().then((fps) => {
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
      pgw.particles.move.speed = this.adjustSpeed(pgwSpeed, fps);
      pgb.particles.move.speed = this.adjustSpeed(pgbSpeed, fps);
      ph.particles.move.speed = this.adjustSpeed(phSpeed, fps);

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

  /**
   * Particle.js particle movement is tied to `requestAnimationFrame`, which
   * runs once per screen refresh, so on faster displays, animations happen
   * more frequently and appear faster than intended.
   *
   * This function normalizes the speed of partices based on the current users
   * refresh rate to normalize the animation fps.
   */
  private adjustSpeed(base: number, fps: number): number {
    return Math.max(base * (60 / fps), 0.1);
  }

  private getRefreshRate(): Promise<number> {
    return new Promise((resolve) => {
      const samples: number[] = [];
      let last = performance.now();

      const sample = (): void => {
        const now = performance.now();
        const delta = now - last;
        last = now;
        samples.push(delta);

        if (samples.length < 20) {
          requestAnimationFrame(sample);
        } else {
          const avg = samples.reduce((sum, v) => sum + v, 0) / samples.length;
          const fps = Math.round(1000 / avg);
          resolve(fps);
        }
      };

      requestAnimationFrame(sample);
    });
  }
}
