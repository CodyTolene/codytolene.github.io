import { EnvironmentProviders } from '@angular/core';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { FirebaseApp } from '@angular/fire/app';

export function analyticsProvider(): EnvironmentProviders {
  return provideAnalytics((injector) => {
    const app = injector.get(FirebaseApp);
    return getAnalytics(app);
  });
}
