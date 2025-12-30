export interface EnvironmentCredentials {
  apiUrl: string;
  google: {
    firebase: import('@angular/fire/app').FirebaseOptions;
    maps: {
      apiKey: string | undefined;
    };
    recaptcha: {
      apiKey: string | undefined;
    };
  };
  isProduction: boolean;
}
