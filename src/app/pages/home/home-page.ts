import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import {
  ContactLinkCard,
  Icon,
  ImpactCard,
  ProjectCard,
  Roles,
  SkillGroupCard,
  StatCard,
} from 'src/app/components';
import {
  CONTACT_LINKS,
  FEATURED_PROJECTS,
  HOBBY_PROJECTS,
  IMPACTS,
  ROLES,
  SKILL_GROUPS,
  STATS,
} from 'src/app/constants';
import { ChipItem } from 'src/app/types';

@Component({
  selector: 'ct-home-page',
  imports: [
    ContactLinkCard,
    Icon,
    ImpactCard,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatRippleModule,
    ProjectCard,
    Roles,
    SkillGroupCard,
    StatCard,
  ],
  templateUrl: './home-page.html',
  styleUrls: [
    './home-page.scss',
    '../../components/panel/panel.scss',
    '../../components/panel/reveal.scss',
  ],
})
export class HomePage {
  protected readonly CONTACT_LINKS = CONTACT_LINKS;
  protected readonly FEATURED_PROJECTS = FEATURED_PROJECTS;
  protected readonly HOBBY_PROJECTS = HOBBY_PROJECTS;
  protected readonly IMPACTS = IMPACTS;
  protected readonly INTRO_CHIPS = INTRO_CHIPS;
  protected readonly ROLES = ROLES;
  protected readonly SKILL_GROUPS = SKILL_GROUPS;
  protected readonly STATS = STATS;

  protected trackByLabel(_index: number, item: { label: string }): string {
    return item.label;
  }

  protected trackByTitle(_index: number, item: { title: string }): string {
    return item.title;
  }
}

const INTRO_CHIPS: ChipItem[] = [
  { label: 'Angular', icon: 'angular' },
  { label: 'React', icon: 'react' },
  { label: 'Vue.js', icon: 'vuedotjs' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'ASP.NET', icon: 'dotnet' },
  { label: 'Firebase', icon: 'firebase' },
  { label: 'CI/CD', icon: 'githubactions' },
  { label: 'Docker', icon: 'docker' },
  { label: 'Cypress', icon: 'cypress' },
  { label: 'Express', icon: 'express' },
];
