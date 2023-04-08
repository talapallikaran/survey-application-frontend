import { combineReducers } from "redux";
import {
  loginUserReducer,
  signInUserReducer,
} from "../reducer/loginReducer/loginR";
import {
  getSurveyDataReducer,
  postSurveyDataReducer,
  fetchSurveyDataReducer,
} from "../reducer/surveyDataReducer/surveyDataR";
import { fetchWorkerDataReducer } from "../reducer/workerDataReducer/workerDataR";
import { fetchUserReducer } from "../reducer/userDataReducer/fetchUserR";
import { putUserEditDataR } from "../reducer/userDataReducer/postEditDataR";
import { deleteUserData } from "../reducer/userDataReducer/deleteUserR";
import { editDataR } from "../reducer/userDataReducer/editDataR";

const RootReducers = combineReducers({
  //logIn and SignIn
  loginUserReducer: loginUserReducer,
  signInUserReducer: signInUserReducer,
  fetchUserReducer: fetchUserReducer,

  //survey
  getSurveyDataReducer: getSurveyDataReducer,
  postSurveyDataReducer: postSurveyDataReducer,
  fetchSurveyDataReducer: fetchSurveyDataReducer,

  //worker
  fetchWorkerDataReducer: fetchWorkerDataReducer,

  // user
  putUserEditDataR: putUserEditDataR,
  deleteUserData: deleteUserData,
  editDataR: editDataR,
});
export default RootReducers;
