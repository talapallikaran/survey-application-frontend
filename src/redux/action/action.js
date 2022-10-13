import { 
  SURVEY_DATA, 
  USER_SIGN_IN, 
  TOGGLE, 
  LOGIN_USER_REQUEST, 
  LOGIN_USER_ERROR, 
  LOGIN_USER_SUCCESS, 
  SIGNIN_USER_ERROR, 
  SIGNIN_USER_SUCCESS, 
  SIGNIN_USER_REQUEST, 
  GET_SURVEY_DATA_ERROR, 
  GET_SURVEY_DATA_REQUEST, 
  GET_SURVEY_DATA_SUCCESS,
  POST_SURVEY_DATA_REQUEST,
  POST_SURVEY_DATA_SUCCESS,
  POST_SURVEY_DATA_ERROR 
} from '../actionType/actionType';
import axios from 'axios';

export const mainSurveyData = (data) => {
  return {
    type: SURVEY_DATA,
    payload: data
  };
};

export const userData = (data) => {
  return {
    type: USER_SIGN_IN,
    payload: data
  };
};
export const toggle = () => {
  return {
    type: TOGGLE,
  }
}

//login
export const loginUserAction = (details) => async(dispatch) => {
try {
  const res = await axios.post("http://localhost:4000/login",details); 
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload:{data: res.data}
  })
} catch (error) {
  dispatch({
    type:LOGIN_USER_ERROR,
    payload:{data: error}
  })
}};

//SignIn
export const signInUserAction = (details) => async(dispatch) => {
  try {
    const res = await axios.post("http://localhost:4000/register",details); 
    dispatch({
      type: SIGNIN_USER_SUCCESS,
      payload:{data: res.data}
    })
  } catch (error) {
    dispatch({
      type:SIGNIN_USER_ERROR,
      payload:{data: error}
    })
  }};


//SurveyData
export const getSurveyDataAction = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/survey/data/${id}`); 
    dispatch({
      type: GET_SURVEY_DATA_SUCCESS,
      payload:{data: res.data}
    })
  } catch (error) {
    dispatch({
      type:GET_SURVEY_DATA_ERROR,
      payload:{data: error}
    })
  }};

//SurveyDataPost
export const postSurveyDataAction = (id,data) => async(dispatch) => {
  try {
    const res = await axios.post(`http://localhost:4000/survey/data/${id}`,data); 
    dispatch({
      type: POST_SURVEY_DATA_SUCCESS,
      payload:{data: res.data}
    })
  } catch (error) {
    dispatch({
      type:POST_SURVEY_DATA_ERROR,
      payload:{data: error}
    })
  }};