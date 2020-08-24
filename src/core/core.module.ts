import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutesModule } from './core-routes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core.component';
import { FooterComponent, NavigationComponent } from './page-elements';
import { WINDOW_PROVIDERS } from 'src/services/browser/window.services';

@NgModule({
  bootstrap: [CoreComponent],
  declarations: [CoreComponent, FooterComponent, NavigationComponent],
  imports: [
    BrowserModule,
    CoreRoutesModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [WINDOW_PROVIDERS],
})
export class CoreModule {}
