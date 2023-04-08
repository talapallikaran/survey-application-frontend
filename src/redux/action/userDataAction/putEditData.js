import {userDataApi} from "../../actionType/actionType";
import axios from "axios";

export const putUserEditData = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:4000/edit/${id}`, data);
    dispatch({
      type: userDataApi.POST_USER_EDIT_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: userDataApi.POST_USER_EDIT_DATA_ERROR,
      payload: { data: error },
    });
  }
};
