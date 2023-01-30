export interface IUserConfig {
  sources: string[];
  bookmarks: string[];
  keywords: string[];
}

export interface IUser {
  email: string;
  id: string;
  config: IUserConfig;
  groups: [];
}
