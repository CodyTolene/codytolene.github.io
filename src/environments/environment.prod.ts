import { Environment } from './environment-type';

export const environment: Environment = {
  production: true,
  version: require('../../package.json').version,
};
