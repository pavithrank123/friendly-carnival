import { fork, all } from 'redux-saga/effects';
import * as UsersSaga from './Sagas/UsersSaga';

export default function* rootSaga() {
  yield all([
      ...Object.values(UsersSaga)
  ].map(fork));
}
