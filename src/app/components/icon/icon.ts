import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

import { iconCustomNames } from 'src/app/components/icon/icon-custom-names';
import { IconCustomName, IconFontSet, IconName } from 'src/app/types';

@Component({
  selector: 'ct-icon[name]',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon],
  standalone: true,
  host: { class: 'mat-icon' },
})
export class Icon {
  public readonly name = input.required<IconName | IconCustomName>();

  protected readonly ariaLabel = input<string | null>(null);

  protected readonly color = input<ThemePalette | null>(null);

  protected fontIcon: Signal<FontIcon> = computed(() =>
    (iconCustomNames as readonly string[]).includes(this.name())
      ? 'svg'
      : 'font',
  );

  @Input() public fontSet: IconFontSet = 'material-icons';

  @Input({ transform: booleanAttribute }) public inline = false;
}

type FontIcon = 'svg' | 'font';
