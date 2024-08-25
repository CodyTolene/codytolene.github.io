import { ButtonTypeEnum } from 'src/app/enumerators';
import { getEnumMember } from 'src/app/utilities';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-button',
  styleUrl: './button.component.scss',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  /**
   * The theme color of the button.
   *
   * @default 'primary' The primary color.
   * @see https://material.angular.io/guide/theming#using-component-color-variants
   */
  @HostBinding('class') @Input() public color: ButtonThemeColor = 'primary';

  @Input()
  public set disabled(value: BooleanInput) {
    this.#disabled = coerceBooleanProperty(value);
  }
  public get disabled(): boolean {
    return this.#disabled;
  }
  #disabled = false;

  @Input() public set type(value: ButtonTypeEnum | `${ButtonTypeEnum}`) {
    const parsedValue = getEnumMember(ButtonTypeEnum, value);
    if (parsedValue === null) {
      throw new Error('Invalid button type.');
    }
    this.#type = parsedValue;
  }
  public get type(): ButtonTypeEnum {
    return this.#type;
  }
  #type = ButtonTypeEnum.FLAT;

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

type ButtonThemeColor = Exclude<ThemeColor, 'surface'>;
