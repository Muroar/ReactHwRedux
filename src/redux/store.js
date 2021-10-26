import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import appReducer from "./app/appReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
