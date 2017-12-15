export interface USERINFO{
  misId: string;
  userId: number;
  userName: string;
}

export default interface STATE{
  userInfo: USERINFO
}
