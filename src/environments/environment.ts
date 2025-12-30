import { EnvironmentCredentials } from 'src/app/types';

export const environment: EnvironmentCredentials = {
  apiUrl: 'http://127.0.0.1:5001/cody-tolene-com/us-central1',
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
      apiKey: undefined,
    },
  },
  isProduction: false,
};
