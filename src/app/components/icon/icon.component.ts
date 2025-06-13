import { IconsService } from 'src/app/services';
import { toNumber } from 'src/app/utilities';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { iconsCustom as customIconNames } from 'src/app/components/icon/icons-custom';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-icon[name]',
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
  standalone: false,
})
export class IconComponent {
  public constructor(private readonly iconsService: IconsService) {
    this.iconsService.initialize();
  }

  @HostBinding('class.inline')
  @Input()
  public set inline(value: BooleanInput) {
    this.#inline = coerceBooleanProperty(value);
  }
  public get inline(): boolean {
    return this.#inline;
  }
  #inline = true;

  @Input() public name!: IconName;

  @Input() public type: IconType = 'filled';

  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  @Input()
  public set size(value: number | string) {
    const parsedValue = toNumber(value);
    if (parsedValue === null) {
      throw new Error('Invalid size value (px).');
    }
    this.#size = parsedValue;
  }
  public get size(): number {
    return this.#size;
  }
  #size = 16;

  @HostBinding('style.font-size.px')
  public get fontSize(): number {
    return this.size;
  }

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
