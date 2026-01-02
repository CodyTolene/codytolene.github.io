import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

import { Role } from 'src/app/types';

@Component({
  selector: 'ct-roles',
  imports: [MatCard, MatCardContent],
  templateUrl: './roles.html',
  styleUrls: ['./roles.scss', '../panel/panel.scss', '../panel/reveal.scss'],
})
export class Roles {
  public readonly roles = input.required<Role[]>();

  protected trackByTitle(_index: number, item: { title: string }): string {
    return item.title;
  }
}
