import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
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
  styles: [
    ':host{display:inline-flex;align-items:center;justify-content:center;}',
  ],
  host: {
    class: 'mat-icon',
    '[style.font-size.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.line-height.px]': 'size()',
    '[style.width.px]': 'size()',
  },
})
export class Icon {
  public readonly name = input.required<IconName | IconCustomName>();

  public readonly ariaLabel = input<string | null>(null);

  public readonly color = input<ThemePalette | null>(null);

  public readonly fontSet = input<IconFontSet>('material-icons');

  public readonly inline = input<boolean, boolean | string>(false, {
    transform: booleanAttribute,
  });

  public readonly size = input<number, number | string | null>(undefined, {
    transform: numberAttribute,
  });

  protected fontIcon: Signal<FontIcon> = computed(() =>
    (iconCustomNames as readonly string[]).includes(this.name())
      ? 'svg'
      : 'font',
  );
}

type FontIcon = 'svg' | 'font';
