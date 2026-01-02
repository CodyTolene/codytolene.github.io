import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { ScreenTrackingService } from '@angular/fire/analytics';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { ROUTES } from './routing';

import { iconCustomNames } from 'src/app/components';
import {
  analyticsProvider,
  appCheckProvider,
  customIconsProvider,
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
    provideHttpClient(withFetch()),
    importProvidersFrom(MatLuxonDateModule),
    firebaseAppProvider(),
    analyticsProvider(),
    ScreenTrackingService,
    appCheckProvider(),
    performanceProvider(),
    customIconsProvider(iconCustomNames),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
