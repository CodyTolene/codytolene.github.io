import { Environment } from './environment-type';

export const environment: Environment = {
  googleAnalyticsId: 'UA-42346076-7',
  production: true,
  version: require('../../package.json').version,
};
