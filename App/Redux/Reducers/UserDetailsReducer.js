import actionTypes from '../ActionTypes';
const {REQUEST_LOAN_INFORMATION,REQUEST_LOAN_INFORMATION_SUCCESS,REQUEST_LOAN_INFORMATION_FAILURE} = actionTypes;

const initialState = {
  data: {},
  error: '',
  isLoading: false,
};

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOAN_INFORMATION:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_LOAN_INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        data: {},
      };
    case REQUEST_LOAN_INFORMATION_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default userDetailsReducer;