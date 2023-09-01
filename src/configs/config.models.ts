export interface IConfigService {
  getString(name: string): string;
  getNumber(name: string): number;
  getBoolean(name: string): boolean;
  getDate(name: string): Date;
}

export interface IBucketData {
  bucketName: string;
  bucketRegion: string;
  endPoint: string;
}
