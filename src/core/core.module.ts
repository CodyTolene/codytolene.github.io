import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { BodyComponent } from './layout/body.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { ScreenSizeDetectorComponent } from './services/screen-size.service';

@NgModule({
  declarations: [
    BodyComponent,
    CoreComponent,
    FooterComponent,
    HeaderComponent,
    ScreenSizeDetectorComponent,
  ],
  imports: [BrowserModule, CoreRoutingModule],
  providers: [],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
