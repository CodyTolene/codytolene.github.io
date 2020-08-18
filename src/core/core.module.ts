import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutesModule } from './core-routes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core.component';
import { FooterComponent, HeaderComponent } from './page-elements';
import { RouterModule } from '@angular/router';

@NgModule({
  bootstrap: [CoreComponent],
  declarations: [CoreComponent, FooterComponent, HeaderComponent],
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
