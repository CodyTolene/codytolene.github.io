import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ct-privacy-policy',
  styleUrl: './privacy-policy.component.scss',
  templateUrl: './privacy-policy.component.html',
})
export class PrivacyPolicyComponent {}
