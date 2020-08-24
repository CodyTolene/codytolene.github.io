import { Component } from '@angular/core';
import { LocalStorageService } from 'src/services/browser/local-storage.service';

interface CookieConsentStorageKeys {
  acceptedPrivacyPolicy: boolean;
}

@Component({
  providers: [LocalStorageService],
  selector: 'app-cookie-consent',
  styleUrls: ['./cookie-consent.component.scss'],
  templateUrl: './cookie-consent.component.html',
})
export class CookieConsentComponent {
  public constructor(
    private readonly localStorage: LocalStorageService<
      CookieConsentStorageKeys
    >,
  ) {
    if (this.localStorage.get('acceptedPrivacyPolicy') === 'true') {
      this.acceptedPrivacyPolicy = true;
    }
  }

  public acceptedPrivacyPolicy = false;

  public acceptPrivacyPolicy(): void {
    this.localStorage.set('acceptedPrivacyPolicy', 'true');
    this.acceptedPrivacyPolicy = true;
  }
}
