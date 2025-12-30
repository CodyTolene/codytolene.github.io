import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { ScreenTrackingService } from '@angular/fire/analytics';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { ROUTES } from './routing';

import {
  analyticsProvider,
  appCheckProvider,
  firebaseAppProvider,
  performanceProvider,
} from 'src/app/providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      [...ROUTES],
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(MatLuxonDateModule),
    firebaseAppProvider(),
    analyticsProvider(),
    ScreenTrackingService,
    appCheckProvider(),
    performanceProvider(),
  ],
};
