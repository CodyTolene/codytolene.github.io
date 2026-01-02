import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';

import { Icon } from '../icon/icon';

import { SkillGroup } from 'src/app/types';

@Component({
  selector: 'ct-skill-group-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatChip,
    Icon,
    MatChipSet,
  ],
  templateUrl: './skill-group-card.html',
  styleUrls: [
    './skill-group-card.scss',
    '../panel/panel.scss',
    '../panel/reveal.scss',
  ],
})
export class SkillGroupCard {
  public readonly skillGroup = input.required<SkillGroup>();

  protected trackByLabel(_index: number, item: { label: string }): string {
    return item.label;
  }
}
