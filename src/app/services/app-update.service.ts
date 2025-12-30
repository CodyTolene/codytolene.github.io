import { Injectable, inject } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

import { filter } from 'rxjs';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({ providedIn: 'root' })
export class AppUpdateService {
  private readonly swUpdate = inject(SwUpdate);

  public init(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.checkForUpdate();

    // Update in the background and reload automatically
    this.swUpdate.versionUpdates
      .pipe(
        untilDestroyed(this),
        filter((e: VersionEvent) => e.type === 'VERSION_READY'),
      )
      .subscribe(async () => {
        const updated = await this.swUpdate.activateUpdate();
        if (updated) {
          // Reload the page to apply the update immediately
          location.reload();
        }
      });

    // Handle fatal
    this.swUpdate.unrecoverable.pipe(untilDestroyed(this)).subscribe(() => {
      // If something goes wrong, reload is safest
      location.reload();
    });
  }
}
