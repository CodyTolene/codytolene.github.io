import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutesModule } from './core-routes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core.component';

@NgModule({
  bootstrap: [CoreComponent],
  declarations: [CoreComponent],
  imports: [
    BrowserModule,
    CoreRoutesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    NgbModule,
  ],
  providers: [],
})
export class CoreModule {}
