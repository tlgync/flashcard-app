import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';
import { IAuth, IForgotPassword, IRegister } from '../Types/Auth';

const login = BaseConfig.api.user('user/login');
const register = BaseConfig.api.user('user/register');
const checkAuth = BaseConfig.api.user('user/checkAuth');
const forgotPassword = BaseConfig.api.user('user/forgotPassword');
const resetPassword = BaseConfig.api.user('user/resetPassword');

export const UserService = {

  Login(data: IAuth) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(login, requestOptions);
  },
  Register(data: IRegister) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(register, requestOptions);
  },
  ForgotPassword(data: IForgotPassword) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(forgotPassword, requestOptions);
  },
  ResetPassword(data: IForgotPassword) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(resetPassword, requestOptions);
  },

  /**
    * [LOGOUT]
    */
  Logout() {
    localStorage.removeItem('user');
    window.location.href = '/';
  },

  /**
    * [AUTHENTICATED]
    */
  Authenticated() {
    const requestOptions = {
      method: 'GET',
      headers: BaseConfig.utilities.authorizedHeader(),
    };

    return Fetch(checkAuth, requestOptions);
  },

};
