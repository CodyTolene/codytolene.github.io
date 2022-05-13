import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { BodyComponent } from './layout/body.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import {
  ScreenSizeDetectorComponent,
  ScreenSizeService,
} from './services/screen-size.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo.component';
import { NavbarComponent } from './components/navbar.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
];

const sharedCoreComponents = [LogoComponent, NavbarComponent];

@NgModule({
  declarations: [
    BodyComponent,
    CoreComponent,
    FooterComponent,
    HeaderComponent,
    ScreenSizeDetectorComponent,
    ...sharedCoreComponents,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreRoutingModule,
    ...materialModules,
  ],
  providers: [ScreenSizeService],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
