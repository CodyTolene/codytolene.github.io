import { PARTICLE_GALAXY_BLACK } from 'src/app/constants';

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  selector: 'ct-privacy-policy',
  standalone: true,
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
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
