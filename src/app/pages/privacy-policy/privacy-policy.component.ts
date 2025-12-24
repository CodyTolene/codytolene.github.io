import { PARTICLE_GALAXY_BLACK } from 'src/app/constants';
import { adjustSpeed, getRefreshRate } from 'src/app/utilities';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  selector: 'ct-privacy-policy',
  standalone: true,
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    getRefreshRate().then((fps) => {
      // console.log(`Estimated refresh rate: ${fps} Hz`);

      // Get default particles and options
      const pgb = { ...PARTICLE_GALAXY_BLACK };

      // Reference particle speeds
      const pgbSpeed = pgb.particles.move.speed;

      // Adjust particle speeds, normalize based on users screen refresh rates
      pgb.particles.move.speed = adjustSpeed(pgbSpeed, fps);

      // Run particles
      try {
        particlesJS('particle-galaxy', pgb);
      } catch (error) {
        console.warn('Failed to load particles!', error);
      }
    });

    try {
      particlesJS('particle-galaxy', PARTICLE_GALAXY_BLACK);
    } catch (error) {
      console.warn(
        `Failed to load particles! Error message: ${error || 'Unknown error'}`,
      );
    }
  }
}
