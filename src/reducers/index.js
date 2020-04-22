import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";


export default combineReducers({
    errors:errorReducer,
    event:eventReducer
});