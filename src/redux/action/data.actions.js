import { transformData } from "../utility/utility";
import {
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  GET_DATA_FAILED,
} from "../constants";

export const get_store_data = () => (dispatch) => {
  dispatch({
    type: GET_DATA_PENDING,
  });
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: transformData(result),
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DATA_FAILED,
        payload: error,
      });
    });
};
