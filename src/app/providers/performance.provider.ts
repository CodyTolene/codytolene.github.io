import { EnvironmentProviders } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';

export function performanceProvider(): EnvironmentProviders {
  return providePerformance((injector) => {
    const app = injector.get(FirebaseApp);

    return getPerformance(app);
  });
}
