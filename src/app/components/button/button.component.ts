import { ButtonTypeEnum } from 'src/app/enums';
import { getEnumMember } from 'src/app/utilities';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule],
  selector: 'ct-button',
  standalone: true,
  styleUrl: './button.component.scss',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
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
