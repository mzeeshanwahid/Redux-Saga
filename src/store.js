import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import allReducers from "./reducers";
import todosSaga from "./sagas/todoSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(todosSaga);
export default store;