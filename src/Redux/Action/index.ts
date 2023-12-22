import {LOGINUSER, LOGOUTUSER} from '../Constants';

export function LoginUser(user) {
  return {type: LOGINUSER, user};
}
export function LogoutUser() {
  return {type: LOGOUTUSER};
}
