import { combineReducers , createStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet/reducer";

const reducers = combineReducers({
    wallet : walletReducer
});

const store = createStore(reducers)

export default store;