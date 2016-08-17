// @flow

declare module 'Cs/Accounts' {
  declare interface User {
    _id: string;
    profile: any;
    roles: string[];
    isRole(role: string | string[]): boolean;
    isAdmin(): boolean;
  }

  declare type AccountsState = {
    view: string;
    error?: string;
    info?: string;
    token?: string;
    user?: User;
    userId?: string;
    loggingIn?: boolean;
  }

  declare interface AuthContainerProps {
    user: User;
    isAdmin: boolean;
    isRole: (role: string | string[]) => boolean;
    loggingIn: boolean;
  }
}
