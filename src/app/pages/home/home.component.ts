import { PARTICLE_OPTIONS } from 'src/app/constants';

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
  protected readonly title = 'Cody Tolene';

  public ngAfterViewInit(): void {
    try {
      particlesJS('particles', PARTICLE_OPTIONS);
    } catch (error) {
      console.warn(`Failed to load particles. Error message: ${error}`);
    }
  }
}
