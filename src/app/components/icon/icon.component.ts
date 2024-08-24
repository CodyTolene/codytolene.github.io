import { IconsService } from 'src/app/services';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { iconsCustom as customIconNames } from 'src/app/components/icon/icons-custom';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-icon[name]',
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  public constructor(private readonly iconsService: IconsService) {
    this.iconsService.initialize();
  }

  @Input() public color: ThemePalette = 'primary';

  @Input() public set inline(value: BooleanInput) {
    this.#inline = coerceBooleanProperty(value);
  }
  public get inline(): boolean {
    return this.#inline;
  }
  #inline = false;

  @Input() public name!: IconName;

  @Input() public type: IconType = 'filled';

  protected readonly iconTypeToFontSet = iconTypeToFontSet;

  protected get isCustom(): boolean {
    return customIconNames.includes(
      this.name as (typeof customIconNames)[number],
    );
  }
}

type IconType = 'filled' | 'outlined' | 'rounded' | 'sharp' | 'two-tone';

const iconTypeToFontSet: Record<IconType, string> = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
  rounded: 'material-icons-round',
  sharp: 'material-icons-sharp',
  'two-tone': 'material-icons-two-tone',
};
