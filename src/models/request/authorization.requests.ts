export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface ISignInRequest {
  name: string;
  email: string;
  password: string;
}

export interface IRefreshRequest {
  refreshToken: string;
}
