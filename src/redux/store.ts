import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/userSaga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

/** Create the app store with the root reducer and the store enhancers. */
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;