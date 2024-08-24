import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { iconsCustom as customIconNames } from 'src/app/components/icon/icons-custom';

@Injectable({ providedIn: 'root' })
export class IconsService {
  public constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly matIconRegistry: MatIconRegistry,
  ) {}

  private isInitialized = false;

  public initialize(): void {
    if (this.isInitialized) {
      return;
    }
    this.loadCustomIcons();
    this.isInitialized = true;
  }

  private loadCustomIcons(): void {
    if (this.isInitialized) {
      return;
    }

    for (const customIconName of customIconNames) {
      this.matIconRegistry.addSvgIcon(
        customIconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${customIconName}.svg`,
        ),
      );
    }
  }
}
