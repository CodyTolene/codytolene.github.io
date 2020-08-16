import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-core',
  template: `<router-outlet></router-outlet>`,
})
export class CoreComponent {
  public constructor(private readonly serviceWorkerUpdate: SwUpdate) {
    // Update the service worker on every construct
    this.serviceWorkerUpdate.activateUpdate();
  }
}
