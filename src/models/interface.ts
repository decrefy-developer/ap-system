export interface Ilogin {
  username: string;
  password: string;
}

export interface IResetPassword {
  id: string;
  username: string;
}

export interface IForgotPassword extends Ilogin {
  id: string;
  newPassword: string;
}
