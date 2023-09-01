export interface IConfigService {
  getString(name: string): string;
  getNumber(name: string): number;
  getBoolean(name: string): boolean;
  getDate(name: string): Date;
}

export interface IAppConfig {
  name: string;
  port: number;
  isProduction: boolean;
}

export interface IAuthConfig {
  accessSecret: string;
  refreshSecret: string;
  accessExpire: string;
  refreshExpire: string;
}
