import { loginApi, signInApi } from "../../actionType/actionType";
import axios from "axios";

//login
export const loginUserAction = (details) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4000/login", details);
    dispatch({
      type: loginApi.LOGIN_USER_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: loginApi.LOGIN_USER_ERROR,
      payload: { data: error },
    });
  }
};

//SignIn
export const signInUserAction = (details) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4000/register", details);
    dispatch({
      type: signInApi.SIGNIN_USER_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: signInApi.SIGNIN_USER_ERROR,
      payload: { data: error },
    });
  }
};
