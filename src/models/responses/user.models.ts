export interface IGeo {
  country: string;
  city: string;
  fias_id: string;
  fias_addr: string;
}

export interface IWork {
  place: string;
  industry: string;
  position: string;
  ogrn: string;
  inn: string;
}

export interface IBirthday {
  year: number;
  month: number;
  day: number;
}

export interface IPassport {
  name: string;
  sur_name: string;
  patronymic: string;
}

export interface IImages {
  passport: string | null;
  diploma: string | null;
  qualification: string | null;
}

export interface IDocs {
  snils: string;
  idDocName: string;
  idDoc: string;
  images: IImages;
}

export interface IUserInfo {
  geo: IGeo;
  work: IWork;
  birthday: IBirthday;
  passport: IPassport;
  docs: IDocs;
}

export interface IRole {
  service: string;
  role: string;
}

export interface IModeration {
  is_moderated: boolean;
  moderation_time: string;
  comment: string;
}

export interface IUser {
  id: string;
  phone: string;
  email: string;
  user_info: IUserInfo;
  login: string;
  status: string;
  avatar: string;
  roles: IRole[];
  moderation: IModeration;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserLogs {
  body: string;
  event_date: string;
  event_date_time: string;
  ip: string;
  service: string;
  user_agent: string;
  user_id: string;
}

export interface ILogsResponse {
  logs: IUserLogs[];
  total: number;
}
