import { EnvironmentCredentials } from 'src/app/types';

export const environment: EnvironmentCredentials = {
  apiUrl: 'https://us-central1-cody-tolene-com.cloudfunctions.net',
  google: {
    firebase: {
      apiKey: 'AIzaSyA8u0g2eLcIaNhynbGwWeiZhVTSMqQrG8g',
      appId: '1:525398606630:web:62802ccdcf3690a42cf7e7',
      authDomain: 'cody-tolene-com.firebaseapp.com',
      measurementId: 'G-QFMH0027N0',
      messagingSenderId: '525398606630',
      projectId: 'cody-tolene-com',
      storageBucket: 'cody-tolene-com.firebasestorage.app',
    },
    maps: {
      apiKey: undefined,
    },
    recaptcha: {
      apiKey: '6LfUzzosAAAAADDdgV63l99SJrlh2hzBZ6foy4tM',
    },
  },
  isProduction: true,
};
