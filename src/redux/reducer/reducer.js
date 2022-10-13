import { 
    SURVEY_DATA, 
    USER_SIGN_IN, 
    TOGGLE, 
    LOGIN_USER_ERROR, 
    LOGIN_USER_REQUEST, 
    LOGIN_USER_SUCCESS,
    SIGNIN_USER_ERROR,
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    GET_SURVEY_DATA_ERROR,
    GET_SURVEY_DATA_REQUEST,
    GET_SURVEY_DATA_SUCCESS,
    POST_SURVEY_DATA_REQUEST,
    POST_SURVEY_DATA_ERROR,
    POST_SURVEY_DATA_SUCCESS,
 } from '../actionType/actionType';
import { INITIALstate, INITIALuserData } from '../initialState/INITIALstate'

export const dataReducer = (state = INITIALstate, action) => {
    switch (action.type) {
        case SURVEY_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    };
};

export const userData = (state = INITIALuserData, action) => {
    switch (action.type) {
        case USER_SIGN_IN:
            return {
                ...state,
                userData: action.payload
            };
        case TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
        default:
            return state;
    };
}; 

//login
export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {...action.payload};
        case LOGIN_USER_SUCCESS:
            return {...action.payload};
        case LOGIN_USER_ERROR:
            return {...action.payload};
        default:
            return state
    };
};


//SignIn
export const signInUserReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNIN_USER_REQUEST:
            return {...action.payload};
        case SIGNIN_USER_SUCCESS:
            return {...action.payload};
        case SIGNIN_USER_ERROR:
            return {...action.payload};
        default:
            return state
    };
};

//SurveyData
export const getSurveyDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SURVEY_DATA_REQUEST:
            return {...action.payload};
        case GET_SURVEY_DATA_SUCCESS:
            return {...action.payload};
        case GET_SURVEY_DATA_ERROR:
            return {...action.payload};
        default:
            return state
    };
};

//SurveyDataPost
export const postSurveyDataReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_SURVEY_DATA_REQUEST:
            return {...action.payload};
        case POST_SURVEY_DATA_SUCCESS:
            return {...action.payload};
        case POST_SURVEY_DATA_ERROR:
            return {...action.payload};
        default:
            return state
    };
};