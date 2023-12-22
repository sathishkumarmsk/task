import {LOGINUSER, LOGOUTUSER} from '../Constants';

function authentication(
  state = {
    logout: true,
  },
  action,
) {
  switch (action.type) {
    case LOGINUSER:
      return {
        user: action.user,
        logout: false,
      };
    case LOGOUTUSER:
      return {
        logout: true,
      };
    default:
      return state;
  }
}

export default authentication;
