export interface USERINFO {
  onlyId: string;
  userId: number;
  userName: string;
}

export default interface STATE {
  userInfo: USERINFO;
}
