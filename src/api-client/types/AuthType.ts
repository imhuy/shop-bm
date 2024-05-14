export interface LoginParamsType {
  username: string;
  password: string;
}

export interface LoginResponseType {
  access_token: string;
}

export interface AccountDetailResponse {
  id: string;
  name: string;
  currentPlanKey: string;
  planExpiredAt: string;
  createdAt: string;
  email: string;
  inviteCode: string;
  confirmedEmail: boolean;
  username: string;
}

export interface RegisterParamsType {
  userName: string;
  emailAddress: string;
  password: string;
  appName: string;
}

export enum UserPayType {
  FREE = "FREE",
  PREMIUM = "PREMIUM",
}
