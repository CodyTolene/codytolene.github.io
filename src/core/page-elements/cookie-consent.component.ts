import { Component, HostListener } from '@angular/core';
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

  // TODO: Add animations (fade in/fade out)
  public isTemporarilyHidden = true;
  public acceptedPrivacyPolicy = false;

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const atTop = window.scrollY <= 300;
    const atBot =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    this.isTemporarilyHidden = atTop || atBot;
  }

  public acceptPrivacyPolicy(): void {
    this.localStorage.set('acceptedPrivacyPolicy', 'true');
    this.acceptedPrivacyPolicy = true;
  }
}
