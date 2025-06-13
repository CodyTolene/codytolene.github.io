import { PARTICLE_GALAXY_BLACK } from 'src/app/constants';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-privacy-policy',
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
  standalone: false,
})
export class PrivacyPolicyComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    try {
      particlesJS('particle-galaxy', PARTICLE_GALAXY_BLACK);
    } catch (error) {
      console.warn(
        `Failed to load particles! Error message: ${error || 'Unknown error'}`,
      );
    }
  }
}
