import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { appConfig } from './app.config';
import { ROUTES_SERVER } from './routing';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes([...ROUTES_SERVER]))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
