import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;
