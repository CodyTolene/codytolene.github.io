import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

import { Icon } from 'src/app/components/icon/icon';
import { ContactLink } from 'src/app/types';

@Component({
  selector: 'ct-contact-link-card',
  imports: [MatCard, MatCardContent, Icon],
  templateUrl: './contact-link-card.html',
  styleUrls: [
    './contact-link-card.scss',
    '../panel/panel.scss',
    '../panel/reveal.scss',
  ],
})
export class ContactLinkCard {
  public readonly contactLink = input.required<ContactLink>();
}
