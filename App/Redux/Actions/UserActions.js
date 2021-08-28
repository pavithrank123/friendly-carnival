import actionTypes from '../ActionTypes';
const { REQUEST_LOAN_INFORMATION ,REQUEST_LOAN_INFORMATION_SUCCESS, REQUEST_LOAN_INFORMATION_FAILURE} = actionTypes;

const handleOnLoanDetailsRequest = data => ({
  type: REQUEST_LOAN_INFORMATION,
  payload: data,
});


const handleOnLoanDetailsSuccess = data => ({
    type: REQUEST_LOAN_INFORMATION_SUCCESS,
    payload: data,
});

const handleOnLoanDetailsFailure = error => ({
    type: REQUEST_LOAN_INFORMATION_FAILURE,
    payload: error,
});

export default {
    handleOnLoanDetailsRequest,
    handleOnLoanDetailsSuccess,
    handleOnLoanDetailsFailure,
};