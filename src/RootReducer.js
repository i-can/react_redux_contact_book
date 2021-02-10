import { ContactReducer } from './Container/ContactContainer/Reducer'
import {AddToContactReducer} from './Container/AddToContactContainer/Reducer'
import { combineReducers } from "redux";

export default combineReducers({
    ContactReducer,
    AddToContactReducer
})


