import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { txReducer } from "../redux/reducers/walletReducers";

const middleware = [thunk];

const reducer = combineReducers({ wallet: txReducer });

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
