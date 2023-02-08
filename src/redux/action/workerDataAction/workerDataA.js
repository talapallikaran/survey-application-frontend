import { workerAndSurvey } from "../../actionType/actionType";
import axios from "axios";

export const fetchWorkerDataAction = () => async (dispatch) => {
  try {
    let wuuid = localStorage.getItem("workerId");
    let UUID = localStorage.getItem("UUID");
    const res = await axios.get(
      `http://localhost:4000/survey/data/${UUID}?wuuid=${wuuid}`
    );
  
    dispatch({
      type: workerAndSurvey.FETCH_WORKER_DATA_SUCCESS,
      payload: { surveyData: res.data },
    });
  } catch (error) {
   
    dispatch({
      type: workerAndSurvey.FETCH_WORKER_DATA_ERROR,
      payload: { surveyData: error },
    });
  }
};

export const getWorkerDataAction = () => async (dispatch) => {
  try {
    let wuuid = localStorage.getItem("workerId");
    let UUID = localStorage.getItem("UUID");
    const res = await axios.get(
      `http://localhost:4000/survey/data/${UUID}?wuuid=${wuuid}`
    );
   
    dispatch({
      type: workerAndSurvey.GET_WORKER_DATA_SUCCESS,
      payload: { data: res.data },
     
    });
  } catch (error) {
   
    dispatch({
      type: workerAndSurvey.GET_WORKER_DATA_ERROR,
      payload: { data: error },
    });
  }
};

export const postWorkerDataAction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/survey/submission/`,
      data
    );
    dispatch({
      type: workerAndSurvey.POST_WORKER_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: workerAndSurvey.POST_WORKER_DATA_ERROR,
      payload: { data: error },
    });
  }
};