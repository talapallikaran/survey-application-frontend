import { SURVEY_DATA, USER_SIGN_IN, TOGGLE } from '../actionType/actionType';

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
