import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

import { Stat } from 'src/app/types';

@Component({
  selector: 'ct-stat-card',
  imports: [MatCard, MatCardContent],
  templateUrl: './stat-card.html',
  styleUrls: [
    './stat-card.scss',
    '../panel/panel.scss',
    '../panel/reveal.scss',
  ],
})
export class StatCard {
  public readonly stat = input.required<Stat>();
}
