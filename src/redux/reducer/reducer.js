import { SURVEY_DATA, USER_SIGN_IN, TOGGLE } from '../actionType/actionType';
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
