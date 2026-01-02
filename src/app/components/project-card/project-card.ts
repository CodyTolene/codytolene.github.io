import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';

import { Icon } from '../icon/icon';

import { Project } from 'src/app/types';

@Component({
  selector: 'ct-project-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatChipSet,
    MatChip,
    Icon,
    MatDivider,
    MatCardActions,
  ],
  templateUrl: './project-card.html',
  styleUrls: [
    './project-card.scss',
    '../panel/panel.scss',
    '../panel/reveal.scss',
  ],
})
export class ProjectCard {
  public readonly project = input.required<Project>();

  protected trackByLabel(_index: number, item: { label: string }): string {
    return item.label;
  }
}
