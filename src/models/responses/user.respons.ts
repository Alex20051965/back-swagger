import { User } from '../../schemas/users.schema';

export interface IGetUsersPaginatedResponse {
  response: User[] ;
  count: number;
}
