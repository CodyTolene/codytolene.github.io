import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

import { Impact } from 'src/app/types';

@Component({
  selector: 'ct-impact-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
  ],
  templateUrl: './impact-card.html',
  styleUrls: [
    './impact-card.scss',
    '../panel/panel.scss',
    '../panel/reveal.scss',
  ],
})
export class ImpactCard {
  public readonly impact = input.required<Impact>();
}
