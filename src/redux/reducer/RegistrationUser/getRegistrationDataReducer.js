import {GET_REGISTRATION_DATA_ERROR,
       GET_REGISTRATION_DATA_REQUEST, 
       GET_REGISTRATION_DATA_SUCCESS} from '../../actionType/actionType';

const instate = {
    toggle :false,
  }

  export const getRegistrationDataReducer = (state = instate, action) => {
    //console.log("<<action get data>>", action);
   // console.log("<<state get data>>", state);
    switch (action.type) {
      case GET_REGISTRATION_DATA_REQUEST:
        return { 
          toggle: true
        };
     //   return { ...action.payload };
      case GET_REGISTRATION_DATA_SUCCESS:
        return { ...action.payload };
      case GET_REGISTRATION_DATA_ERROR:
        return { ...action.payload };
      default:
        return state;
    }
  };
  