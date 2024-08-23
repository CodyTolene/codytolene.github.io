import { AppComponent } from 'src/app/app.component';
import { AppRouting } from 'src/app/app.routing';
import {
  BodyComponent,
  FooterComponent,
  HeaderComponent,
} from 'src/app/layout';
import { NavigationService } from 'src/app/services';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  providers: [NavigationService],
})
export class AppModule {}
