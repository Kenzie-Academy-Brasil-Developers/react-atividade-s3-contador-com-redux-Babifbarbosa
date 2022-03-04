import { createStore, combineReducers } from "redux";
import reducerCounter from "./modules/counter/reducer";
const reducers = combineReducers({ numero: reducerCounter });
const store = createStore(reducers);
export default store;
