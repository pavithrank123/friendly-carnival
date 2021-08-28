import {put, takeLatest} from 'redux-saga/effects';
import actionTypes from '../ActionTypes.js';
import UserActions from '../Actions/UserActions.js';
import Url from '@API/Url';
import Api from '@API/Network';

const { handleOnLoanDetailsSuccess , handleOnLoanDetailsFailure } = UserActions;
const {REQUEST_LOAN_INFORMATION} = actionTypes;

function* handleOnUsersDetailsSuccess(action) {
    try {
        var url = Url.loanDetails;
        const response = yield Api.get(url);
        yield put(handleOnLoanDetailsSuccess(response));
      } catch (e) {
        yield put(handleOnLoanDetailsFailure(e));
      }
}

export function* requestUserDetailsSuccess() {
  yield takeLatest(REQUEST_LOAN_INFORMATION, handleOnUsersDetailsSuccess);
}