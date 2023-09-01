export interface ITokensResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IPayloadResponse {
  _id: string;
  exp: number;
}
