import { combineReducers , createStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet/reducer";
import themeReducer from "./theme/reducer";

const reducers = combineReducers({
    wallet : walletReducer,
    theme : themeReducer
});

const store = createStore(reducers)

export default store;