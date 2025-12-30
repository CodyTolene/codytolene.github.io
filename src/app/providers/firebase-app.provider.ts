import { EnvironmentProviders } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { environment } from 'src/environments/environment';

export function firebaseAppProvider(): EnvironmentProviders {
  return provideFirebaseApp(() =>
    initializeApp(
      environment.google.firebase,
      environment.google.firebase.projectId, // 'cody-tolene-com'
    ),
  );
}
