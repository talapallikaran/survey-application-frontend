import { combineReducers } from "redux";
import { dataReducer, userData } from "../reducer/reducer";

const RootReducers = combineReducers({
    data: dataReducer,
    userData: userData,
});
export default RootReducers;
