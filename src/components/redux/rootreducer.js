import { combineReducers } from "redux";

import { reducer, userData } from './reducer'

const rootReducer = combineReducers({
    data: reducer,
    userData: userData
})

export default rootReducer;