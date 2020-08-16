import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`,
})
export class CoreComponent {
  public constructor(private readonly serviceWorkerUpdate: SwUpdate) {
    // Update the service worker on every construct
    // This fixes and issue with GitHub pages 404 redirect into Angular
    this.serviceWorkerUpdate.activateUpdate();
  }
}
