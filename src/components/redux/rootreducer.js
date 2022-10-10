import { combineReducers } from "redux";

import reducer from './reducer'

const rootReducer = combineReducers({
    finish: reducer
})

export default rootReducer