import { combineReducers } from "redux";
import { dataReducer, userData, loginUserReducer, signInUserReducer, getSurveyDataReducer, postSurveyDataReducer, fetchSurveyDataReducer } from "../reducer/reducer";

const RootReducers = combineReducers({
    data: dataReducer,
    userData: userData,
    loginUserReducer:loginUserReducer,
    signInUserReducer:signInUserReducer,
    getSurveyDataReducer:getSurveyDataReducer,
    postSurveyDataReducer:postSurveyDataReducer,
    fetchSurveyDataReducer: fetchSurveyDataReducer
});
export default RootReducers;
