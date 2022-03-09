import {
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  GET_DATA_FAILED,
} from "../constants";

const initialState = {
  data: [],
  isPending: true,
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case GET_DATA_SUCCESS:
      return { ...state, isPending: false, data: action.payload };
    case GET_DATA_PENDING:
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export default dataReducer;
