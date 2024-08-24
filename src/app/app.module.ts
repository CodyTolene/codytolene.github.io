import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';
import {
  BodyComponent,
  FooterComponent,
  HeaderComponent,
} from 'src/app/layout';
import { NavigationService } from 'src/app/services';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const HttpClient = provideHttpClient(withInterceptorsFromDi());

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRouting,
    BodyComponent,
    BrowserAnimationsModule,
    BrowserModule,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [HttpClient, NavigationService],
})
export class AppModule {}
