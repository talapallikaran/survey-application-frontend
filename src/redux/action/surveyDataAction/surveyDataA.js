import { workerAndSurvey } from "../../actionType/actionType";
import axios from "axios";

export const fetchSurveyDataAction = () => async (dispatch) => {
  try {
    let UUID = localStorage.getItem("UUID");
    const res = await axios.get(`http://localhost:4000/survey/data/${UUID}`);
    dispatch({
      type: workerAndSurvey.FETCH_SURVEY_DATA_SUCCESS,
      payload: { surveyData: res.data },
    });
  } catch (error) {
    dispatch({
      type: workerAndSurvey.FETCH_SURVEY_DATA_ERROR,
      payload: { surveyData: error },
    });
  }
};

export const getSurveyDataAction = () => async (dispatch) => {
  try {
    let UUID = localStorage.getItem("UUID");
    const res = await axios.get(`http://localhost:4000/survey/data/${UUID}`);
    dispatch({
      type: workerAndSurvey.GET_SURVEY_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: workerAndSurvey.GET_SURVEY_DATA_ERROR,
      payload: { data: error },
    });
  }
};

export const postSurveyDataAction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/survey/submission/`,
      data
    );
    dispatch({
      type: workerAndSurvey.POST_SURVEY_DATA_SUCCESS,
      payload: { data: res.data },
    });
  } catch (error) {
    dispatch({
      type: workerAndSurvey.POST_SURVEY_DATA_ERROR,
      payload: { data: error },
    });
  }
};
