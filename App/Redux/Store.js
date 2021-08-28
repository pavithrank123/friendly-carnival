import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allSagas from "./RootSaga";
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist';
import RootReducers from './RootReducers';
import AsyncStorage from '@react-native-community/async-storage';

let reduxStore;
let sagaMiddleware;
let persiststore;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, RootReducers);

const configureStore = () => {
  if (!reduxStore) {
    sagaMiddleware = createSagaMiddleware();
    const storeMiddleWares = [logger,sagaMiddleware];

    const allMiddleWares = applyMiddleware(...storeMiddleWares);

    reduxStore = createStore(persistedReducer, allMiddleWares);
    persiststore = persistStore(reduxStore);

    sagaMiddleware.run(allSagas);

    return {store: reduxStore, persiststore};
  }
  return {store: reduxStore, persiststore};
};

export default configureStore;
