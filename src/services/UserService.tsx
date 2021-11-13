import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';
import { IAuth } from '../Types/Auth';

const login = BaseConfig.api.user('user/login');
const checkAuth = BaseConfig.api.user('user/checkAuth');

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
