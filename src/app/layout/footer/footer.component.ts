import { scrollTop } from 'src/app/utilities';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  selector: 'ct-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly scrollTop = scrollTop;
}
