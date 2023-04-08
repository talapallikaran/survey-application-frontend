import {userDataApi} from "../../actionType/actionType";
import axios from "axios";

export const fetchUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: userDataApi.FETCH_USER_DATA_REQUEST,
    });
    const res = await axios.get(`http://localhost:4000/users`);
    dispatch({
      type: userDataApi.FETCH_USER_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: userDataApi.FETCH_USER_DATA_ERROR,
      payload: { data: error },
    });
  }
};
