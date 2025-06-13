import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  selector: 'ct-body',
  styleUrl: './body.component.scss',
  templateUrl: './body.component.html',
})
export class BodyComponent {}
