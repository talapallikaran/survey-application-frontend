import { loginApi, signInApi } from "../../actionType/actionType";

const statea = {
  data: {},
  
};

//login
export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case loginApi.LOGIN_USER_REQUEST:
      return { ...action.payload };
    case loginApi.LOGIN_USER_SUCCESS:
      return { ...action.payload };
    case loginApi.LOGIN_USER_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

//SignIn
export const signInUserReducer = (state = statea, action) => {
  switch (action.type) {
    case signInApi.SIGNIN_USER_REQUEST:
      return { data: action.payload };
    case signInApi.SIGNIN_USER_SUCCESS:
      return { data: action.payload };
    case signInApi.SIGNIN_USER_ERROR:
      return { data: action.payload };
    default:
      return state;
  }
};
