import { IEnvironment } from '@environments/ienvironment';

export const environment: IEnvironment = {
  production: true,
  apiHost: 'production.com',
  apiUrl: 'https://production.com/api',
  enableDebugTools: false,
  logLevel: 'error'
};
