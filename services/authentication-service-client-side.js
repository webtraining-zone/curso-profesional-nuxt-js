import SessionStorageServiceClientSide from './session-storage-service-client-side';
import {SESSION_STORAGE_USER_KEY} from '../config/api';

class AuthenticationServiceClientSide {
  static isAuthenticated = false;
  static userData;

  static isUserAuthenticated() {
    const userData = SessionStorageServiceClientSide.get(SESSION_STORAGE_USER_KEY);

    console.log('isUserAuthenticated', userData);

    this.isAuthenticated = (!!userData && typeof userData.api_token ===
      'string');

    return this.isAuthenticated;
  }

  static logout() {

    return new Promise((resolve, reject) => {
      this.isAuthenticated = false;
      SessionStorageServiceClientSide.remove(SESSION_STORAGE_USER_KEY);
      resolve();

      // TODO: Do you want to do something in the backend?
      // Then send a request here to logout
    });

  }
}

export default AuthenticationServiceClientSide;
