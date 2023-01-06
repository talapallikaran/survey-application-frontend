import {userDataApi} from '../../actionType/actionType'
import axios from "axios";

export const deleteUserData = (id, data) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:4000/delete/${id}`, data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    dispatch({
      type: userDataApi.POST_DELETE_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: userDataApi.POST_DELETE_DATA_ERROR,
      payload: { data: error },
    });
  }
};
