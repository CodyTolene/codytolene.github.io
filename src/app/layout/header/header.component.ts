import { scrollToElementById, scrollTop } from 'src/app/utilities';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  selector: 'ct-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly scrollToElementById = scrollToElementById;
  protected readonly scrollTop = scrollTop;
}
